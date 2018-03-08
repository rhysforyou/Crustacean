// @flow
import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Platform, Text, Image } from 'react-native'
import moment from 'moment'
import HTML from 'react-native-render-html'
import { itemDividerColor, metaColor } from '../lib/colors'
import { maxContentWidth } from '../lib/metrics'
import CentredSafeAreaView from './CentredSafeAreaView'

import type { ComponentType } from 'react'
import type { Comment } from '../api'

const Divider = () => <View style={styles.divider} />

const baseHorizontalPadding = 16

type Props = {
  comments: Comment[],
  header?: ComponentType<*>,
  onRefresh?: () => void,
  refreshing?: boolean
}

const commentDividerColors = [
  '#4CAF50',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#3F51B5',
  '#2196F3',
  '#009688'
]

export default class StoryScreen extends Component<Props> {
  keyExtractor = (item: Comment) => item.short_id

  renderItem = ({ item }: { item: Comment }) => (
    <CentredSafeAreaView>
      <View style={[styles.item, this.indentStyles(item)]}>
        <View style={styles.metaContainer}>
          <Image
            source={{ uri: item.commenting_user.avatar_url }}
            style={styles.avatar}
          />
          <Text style={styles.meta}>
            {item.commenting_user.username}{' '}
            {item.updated_at != item.created_at
              ? `edited ${moment(item.updated_at).fromNow()}`
              : moment(item.created_at).fromNow()}
          </Text>
        </View>
        <HTML html={item.comment} baseFontSize={20} />
      </View>
    </CentredSafeAreaView>
  )

  indentStyles(comment: Comment) {
    if (comment.indent_level > 1) {
      const borderColor =
        commentDividerColors[
          (comment.indent_level - 2) % commentDividerColors.length
        ]
      return {
        marginStart: baseHorizontalPadding + 8 * (comment.indent_level - 1),
        borderLeftWidth: 2,
        borderLeftColor: borderColor
      }
    }
    return {}
  }

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.comments}
        renderItem={this.renderItem}
        ListHeaderComponent={this.props.header}
        ItemSeparatorComponent={Divider}
        style={styles.list}
        onRefresh={this.props.onRefresh}
        refreshing={this.props.refreshing}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    paddingTop: Platform.select({ ios: 0, android: 8 })
  },
  item: {
    marginVertical: 8,
    paddingHorizontal: baseHorizontalPadding,
    maxWidth: maxContentWidth,
    alignSelf: 'stretch'
  },
  divider: {
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor
  },
  metaContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  avatar: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginEnd: 8
  },
  meta: {
    fontSize: 14,
    color: metaColor
  }
})

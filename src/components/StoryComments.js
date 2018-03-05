// @flow
import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Platform, Text } from 'react-native'
import moment from 'moment'
import HTML from 'react-native-render-html'
import { itemDividerColor, metaColor } from '../lib/colors'
import { maxContentWidth } from '../lib/metrics'

import type { ComponentType } from 'react'
import type { Comment } from '../api'

const Divider = () => <View style={styles.divider} />

const baseHorizontalPadding = Platform.select({ android: 16, ios: 8 })

type Props = {
  comments: Comment[],
  header?: ComponentType<*>
}

export default class StoryScreen extends Component<Props> {
  keyExtractor = (item: Comment) => item.short_id

  renderItem = ({ item }: { item: Comment }) => (
    <View style={[styles.item, this.indentStyles(item)]}>
      <HTML html={item.comment} />
      <Text style={styles.meta}>
        {item.commenting_user.username}{' '}
        {item.updated_at != item.created_at
          ? `edited ${moment(item.updated_at).fromNow()}`
          : moment(item.created_at).fromNow()}
      </Text>
    </View>
  )

  indentStyles(comment: Comment) {
    if (comment.indent_level > 1) {
      return {
        marginStart: 8 * (comment.indent_level - 1),
        borderLeftWidth: 4,
        borderLeftColor: itemDividerColor
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
  meta: {
    fontSize: 14,
    color: metaColor
  }
})

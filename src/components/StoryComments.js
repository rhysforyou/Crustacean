// @flow
import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Platform } from 'react-native'
import HTML from 'react-native-render-html'
import { itemDividerColor } from '../lib/colors'
import { maxContentWidth } from '../lib/metrics'
import { singleStoryFixture } from '../api/fixtures'

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
    </View>
  )

  indentStyles(comment: Comment) {
    if (comment.indent_level === 1) {
      return null
    } else {
      return {
        marginStart: 8 * (comment.indent_level - 1),
        borderLeftWidth: 2,
        borderLeftColor: itemDividerColor
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={singleStoryFixture.comments || []}
          renderItem={this.renderItem}
          ListHeaderComponent={this.props.header}
          ItemSeparatorComponent={Divider}
          style={styles.list}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    alignSelf: 'stretch',
    paddingTop: Platform.select({ ios: 0, android: 8 })
  },
  item: {
    marginVertical: 8,
    paddingHorizontal: baseHorizontalPadding,
    maxWidth: maxContentWidth,
    width: '100%',
    alignSelf: 'center'
  },
  divider: {
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor,
    marginStart: 8
  }
})

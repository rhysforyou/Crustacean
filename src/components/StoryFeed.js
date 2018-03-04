/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native'

import type { StorySummary } from '../api'

type Props = {
  stories: StorySummary[]
}

export default class HomeScreen extends Component<Props> {
  keyExtractor = (item: StorySummary) => item.short_id

  renderItemTags = (item: StorySummary) =>
    item.tags != null &&
    item.tags.length > 0 && (
      <View style={styles.tagList}>
        {item.tags.map(tag => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    )

  renderItemMeta = (item: StorySummary) => (
    <View style={styles.meta}>
      <Text style={styles.author}>
        authored by {item.submitter_user.username}
      </Text>
    </View>
  )

  renderItem = ({ item }: { item: StorySummary }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        {this.renderItemTags(item)}
        {this.renderItemMeta(item)}
      </View>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.stories}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

const itemDividerColor = '#999'
const textColor = '#333'
const tagTextColor = '#555'
const tagBackgroundColor = '#fffcd7'
const tagBorderColor = '#d5d458'
const metaColor = '#888'

const styles = StyleSheet.create({
  list: {
    paddingTop: Platform.select({ ios: 0, android: 16 })
  },
  item: {
    paddingHorizontal: Platform.select({ ios: 8, android: 16 }),
    paddingVertical: 8,
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor
  },
  title: {
    fontSize: 18,
    color: textColor
  },
  tagList: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 4
  },
  tag: {
    paddingHorizontal: 4,
    paddingVertical: 1,
    marginEnd: 8,
    backgroundColor: tagBackgroundColor,
    color: tagTextColor,
    fontSize: 14,
    borderRadius: 3,
    borderColor: tagBorderColor,
    borderWidth: 1
  },
  meta: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8
  },
  author: {
    fontSize: 14,
    color: metaColor
  }
})

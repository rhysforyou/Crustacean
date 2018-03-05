/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, Platform, Image } from 'react-native'
import {
  textColor,
  tagTextColor,
  tagBackgroundColor,
  tagBorderColor,
  metaColor
} from '../lib/colors'
import { maxContentWidth } from '../lib/metrics'

import type { StorySummary as StorySummaryType } from '../api'

type Props = {
  story: StorySummaryType
}

export default class StorySummary extends Component<Props> {
  renderItemTags = () =>
    this.props.story.tags != null &&
    this.props.story.tags.length > 0 && (
      <View style={styles.tagList}>
        {this.props.story.tags.map(tag => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    )

  renderItemMeta = () => (
    <View style={styles.meta}>
      <Image
        style={styles.avatar}
        source={{ uri: this.props.story.submitter_user.avatar_url }}
      />
      <Text style={styles.author}>
        authored by {this.props.story.submitter_user.username}
      </Text>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.story.title}</Text>
        {this.renderItemTags()}
        {this.renderItemMeta()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.select({ ios: 8, android: 16 }),
    paddingVertical: 8,
    flex: 1,
    flexDirection: 'column',
    maxWidth: maxContentWidth,
    width: '100%',
    alignSelf: 'center'
  },
  title: {
    fontSize: 17,
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
  avatar: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginEnd: 4
  },
  author: {
    fontSize: 14,
    color: metaColor
  }
})

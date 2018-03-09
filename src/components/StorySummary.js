// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import HTML from 'react-native-render-html'
import moment from 'moment'
import {
  textColor,
  tagTextColor,
  tagBackgroundColor,
  metaColor,
  metaTagBackgroundColor,
  communityTagBackgroundColor,
  mediaTagBackgroundColor
} from '../lib/colors'
import { maxContentWidth } from '../lib/metrics'
import openLink from '../lib/openLink'
import votesIcom from '../../assets/icons/ic_votes.png'

import type { StorySummary as StorySummaryType } from '../api'

type Props = {
  story: StorySummaryType,
  withDescription: boolean
}

export default class StorySummary extends Component<Props> {
  static defaultProps = {
    withDescription: false
  }

  tagStyle(tag: string): { [key: string]: any } {
    if (tag === 'meta') {
      return {
        backgroundColor: metaTagBackgroundColor
      }
    } else if (['ask', 'show'].indexOf(tag) !== -1) {
      return {
        backgroundColor: communityTagBackgroundColor
      }
    } else if (['video', 'audio', 'slides', 'pdf'].indexOf(tag) !== -1) {
      return {
        backgroundColor: mediaTagBackgroundColor
      }
    } else {
      return {
        backgroundColor: tagBackgroundColor
      }
    }
  }

  renderStoryTags = () =>
    this.props.story.tags != null &&
    this.props.story.tags.length > 0 && (
      <View style={styles.tagList}>
        {this.props.story.tags.map(tag => (
          <View key={tag} style={[styles.tag, this.tagStyle(tag)]}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    )

  renderStoryMeta = () => (
    <View style={styles.meta}>
      <Image
        style={styles.avatar}
        source={{ uri: this.props.story.submitter_user.avatar_url }}
      />
      <Text style={styles.author}>
        authored by {this.props.story.submitter_user.username}{' '}
        {moment(this.props.story.created_at).fromNow()}
      </Text>
      <Image style={styles.scoreIcon} source={votesIcom} />
      <Text style={styles.score}>{this.props.story.score}</Text>
    </View>
  )

  renderStoryDescription = () => (
    <HTML
      html={this.props.story.description}
      onLinkPress={(event, href) => openLink(href)}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.story.title}</Text>
        {this.renderStoryTags()}
        {this.renderStoryMeta()}
        {this.props.withDescription &&
          this.props.story.description != null &&
          this.props.story.description.length > 0 &&
          this.renderStoryDescription()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
    flexDirection: 'column',
    maxWidth: maxContentWidth,
    width: '100%',
    alignSelf: 'center'
  },
  title: {
    fontSize: 17,
    color: textColor,
    fontWeight: '800',
    marginBottom: 4
  },
  tagList: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 4,
    marginBottom: 4
  },
  tag: {
    paddingHorizontal: 4,
    paddingVertical: 1,
    marginEnd: 8,
    borderRadius: 4
  },
  tagText: {
    color: tagTextColor,
    fontSize: 14
  },
  meta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  },
  scoreIcon: {
    marginStart: 8,
    marginEnd: 2
  },
  score: {
    fontSize: 14,
    color: metaColor
  }
})

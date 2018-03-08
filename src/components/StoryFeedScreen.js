/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { accentDarkColor } from '../lib/colors'
import openLink from '../lib/openLink'
import StoryFeed from './StoryFeed'

import type { StorySummary } from '../api'
import type { NavigationScreenProp } from 'react-navigation'

type NavigationState = {}

type Props = {
  fetchStories: () => Promise<StorySummary[]>,
  navigation: NavigationScreenProp<NavigationState>
}

type State = {
  stories: StorySummary[],
  isLoading: boolean,
  loadingError: ?Error
}

export default class StoryFeedScreen extends Component<Props, State> {
  state = {
    stories: [],
    isLoading: false,
    loadingError: null
  }

  componentDidMount() {
    if (!this.state.loading) {
      this.fetchStories()
    }
  }

  fetchStories = () => {
    this.setState({ isLoading: true, loadingError: null }, async () => {
      try {
        const stories = await this.props.fetchStories()
        this.setState({ stories, isLoading: false })
      } catch (e) {
        this.setState({ loadingError: e, isLoading: false })
      }
    })
  }

  handleSelectStory = (story: StorySummary) => {
    if (story.url == null || story.url.length === 0) {
      this.handleSelectStoryComments(story)
      return
    }

    openLink(story.url)
  }

  handleSelectStoryComments = (story: StorySummary) => {
    this.props.navigation.navigate('Story', {
      id: story.short_id,
      story: story
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={accentDarkColor}
          networkActivityIndicatorVisible={this.state.isLoading}
        />
        <StoryFeed
          stories={this.state.stories}
          isLoading={this.state.isLoading}
          onSelectStory={this.handleSelectStory}
          onSelectStoryComments={this.handleSelectStoryComments}
          onRefresh={this.fetchStories}
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
  }
})

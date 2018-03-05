/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { standardNavigationOptions } from '../lib/navigation'
import { fetchHottestStories } from '../api'
import StoryFeed from './StoryFeed'

import type { StorySummary } from '../api'
import type { NavigationNavigatorProps } from 'react-navigation'

type NavigationState = {}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

type State = {
  stories: StorySummary[],
  isLoading: boolean,
  loadingError: ?Error
}

export default class HottestStoriesScreen extends Component<Props, State> {
  static navigationOptions = {
    ...standardNavigationOptions,
    title: 'Hottest'
  }

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
        const stories = await fetchHottestStories()
        this.setState({ stories, isLoading: false })
      } catch (e) {
        this.setState({ loadingError: e, isLoading: false })
      }
    })
  }

  handleSelectStory = (story: StorySummary) => {
    this.props.navigation.navigate('Story', {
      id: story.short_id,
      story: story
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StoryFeed
          stories={this.state.stories}
          isLoading={this.state.isLoading}
          onSelectStory={this.handleSelectStory}
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

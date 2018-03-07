/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Linking, Platform } from 'react-native'
import SafariView from 'react-native-safari-view'
import { standardNavigationOptions } from '../lib/navigation'
import { accentColor } from '../lib/colors'
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
  static navigationOptions = ({
    navigation
  }: NavigationNavigatorProps<{}, NavigationState>) => ({
    ...standardNavigationOptions(() => {
      navigation.navigate('DrawerOpen')
    }),
    title: 'Top Stories'
  })

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
    if (Platform.OS === 'ios' && SafariView.isAvailable()) {
      SafariView.show({
        url: story.url,
        tintColor: accentColor,
        fromBottom: true
      })
    } else if (Linking.canOpenURL(story.url)) {
      Linking.openURL(story.url)
    } else {
      console.error(`Unable to open link: ${story.url}`)
    }
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
        <StatusBar networkActivityIndicatorVisible={this.state.isLoading} />
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

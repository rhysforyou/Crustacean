/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { standardNavigationOptions } from '../lib/navigation'
import { hottestStoriesFixture } from '../api/fixtures'
import StoryFeed from './StoryFeed'

import type { StorySummary } from '../api'
import type { NavigationNavigatorProps } from 'react-navigation'

type NavigationState = {}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

export default class HottestStoriesScreen extends Component<Props> {
  static navigationOptions = {
    ...standardNavigationOptions,
    title: 'Hottest'
  }

  handleSelectStory = (story: StorySummary) => {
    this.props.navigation.navigate('Story', { id: story.short_id })
  }

  render() {
    return (
      <View style={styles.container}>
        <StoryFeed
          stories={hottestStoriesFixture}
          onSelectStory={this.handleSelectStory}
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

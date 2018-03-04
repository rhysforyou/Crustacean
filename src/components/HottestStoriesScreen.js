/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { standardNavigationOptions } from '../lib/navigation'
import { hottestStoriesFixture } from '../api/fixtures'
import StoryFeed from './StoryFeed'

type Props = {}

export default class HottestStoriesScreen extends Component<Props> {
  static navigationOptions = {
    ...standardNavigationOptions,
    title: 'Hottest'
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StoryFeed stories={hottestStoriesFixture} />
      </SafeAreaView>
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

/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { hottestStoriesFixture } from '../api/fixtures'
import StoryFeed from './StoryFeed'

type Props = {}

export default class HottestStoriesScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Hottest'
  }

  render() {
    return (
      <View style={styles.container}>
        <StoryFeed stories={hottestStoriesFixture} />
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

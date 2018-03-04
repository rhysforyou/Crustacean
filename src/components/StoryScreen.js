/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { standardNavigationOptions } from '../lib/navigation'

import type { NavigationNavigatorProps } from 'react-navigation'

type NavigationState = {
  params: {
    id: string
  }
}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

export default class StoryScreen extends Component<Props> {
  static navigationOptions = {
    ...standardNavigationOptions,
    title: 'Story'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.id}</Text>
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

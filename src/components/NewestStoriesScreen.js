/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { PureComponent } from 'react'
import { standardNavigationOptions } from '../lib/navigation'
import { fetchNewestStories } from '../api'
import StoryFeedScreen from './StoryFeedScreen'

import type { NavigationNavigatorProps } from 'react-navigation'

type NavigationState = {}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

export default class NewestStoriesScreen extends PureComponent<Props> {
  static navigationOptions = ({
    navigation
  }: NavigationNavigatorProps<{}, NavigationState>) => ({
    ...standardNavigationOptions(() => {
      navigation.navigate('DrawerOpen')
    }),
    title: 'Recent'
  })

  render() {
    return (
      <StoryFeedScreen
        fetchStories={fetchNewestStories}
        navigation={this.props.navigation}
      />
    )
  }
}

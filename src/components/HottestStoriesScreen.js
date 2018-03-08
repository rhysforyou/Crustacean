/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { PureComponent } from 'react'
import { standardNavigationOptions } from '../lib/navigation'
import { fetchHottestStories } from '../api'
import StoryFeedScreen from './StoryFeedScreen'

import type { NavigationNavigatorProps } from 'react-navigation'

type NavigationState = {}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

export default class HottestStoriesScreen extends PureComponent<Props> {
  static navigationOptions = ({
    navigation
  }: NavigationNavigatorProps<{}, NavigationState>) => ({
    ...standardNavigationOptions(() => {
      navigation.navigate('DrawerOpen')
    }),
    title: 'Top Stories'
  })

  render() {
    return (
      <StoryFeedScreen
        fetchStories={fetchHottestStories}
        navigation={this.props.navigation}
      />
    )
  }
}

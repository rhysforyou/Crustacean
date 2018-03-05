// @flow
import { Platform } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import HottestStoriesScreen from './HottestStoriesScreen'
import NewestStoriesScreen from './NewestStoriesScreen'
import StoryScreen from './StoryScreen'

import type { ComponentType } from 'react'

const makeStackNavigator = (rootScreen: ComponentType<*>) =>
  StackNavigator(
    {
      Root: {
        screen: rootScreen
      },
      Story: {
        screen: StoryScreen
      }
    },
    {
      cardStyle: {
        backgroundColor: Platform.select({ ios: 'white', android: '#fafafa' })
      }
    }
  )

const RootNavigator = Platform.select({
  ios: TabNavigator,
  android: DrawerNavigator
})

export default RootNavigator({
  Hottest: makeStackNavigator(HottestStoriesScreen),
  Newest: makeStackNavigator(NewestStoriesScreen)
})

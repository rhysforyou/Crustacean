/* eslint react/display-name: off */
// @flow
import React from 'react'
import { Platform, Image } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import { accentColor } from '../lib/colors'
import HottestStoriesScreen from './HottestStoriesScreen'
import NewestStoriesScreen from './NewestStoriesScreen'
import StoryScreen from './StoryScreen'
import hottestIcon from '../../assets/icons/ic_hottest.png'
import recentIcon from '../../assets/icons/ic_recent.png'

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

export default RootNavigator(
  {
    Hottest: {
      screen: makeStackNavigator(HottestStoriesScreen),
      navigationOptions: {
        tabBarLabel: 'Top Stories',
        tabBarIcon: ({ tintColor }) => (
          <Image source={hottestIcon} style={{ tintColor }} />
        ),
        drawerLabel: 'Top Stories',
        drawerIcon: ({ tintColor }) => (
          <Image source={hottestIcon} style={{ tintColor }} />
        )
      }
    },
    Newest: {
      screen: makeStackNavigator(NewestStoriesScreen),
      navigationOptions: {
        tabBarLabel: 'Recent',
        tabBarIcon: ({ tintColor }) => (
          <Image source={recentIcon} style={{ tintColor }} />
        ),
        drawerLabel: 'Recent',
        drawerIcon: ({ tintColor }) => (
          <Image source={recentIcon} style={{ tintColor }} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: accentColor
    },
    contentOptions: {
      activeTintColor: accentColor
    }
  }
)

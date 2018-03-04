// @flow
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import HottestStoriesScreen from './HottestStoriesScreen'
import StoryScreen from './StoryScreen'

export default StackNavigator(
  {
    Hottest: {
      screen: HottestStoriesScreen
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

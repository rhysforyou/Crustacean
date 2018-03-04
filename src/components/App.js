// @flow
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import HottestStoriesScreen from './HottestStoriesScreen'

export default StackNavigator(
  {
    Hottest: {
      screen: HottestStoriesScreen
    }
  },
  {
    cardStyle: {
      backgroundColor: Platform.select({ ios: 'white', android: '#fafafa' })
    }
  }
)

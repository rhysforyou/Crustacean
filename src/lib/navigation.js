// @flow
import { Platform } from 'react-native'

export const standardNavigationOptions = {
  headerStyle: {
    ...Platform.select({
      android: { backgroundColor: '#E53935' }
    })
  },
  headerTitleStyle: {
    ...Platform.select({
      android: { color: 'white' }
    })
  },
  headerBackTitleStyle: {
    ...Platform.select({
      android: { color: 'white' }
    })
  }
}

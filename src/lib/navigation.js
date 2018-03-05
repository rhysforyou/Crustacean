// @flow
import { Platform } from 'react-native'

// eslint-disable-next-line no-unused-vars
export const standardNavigationOptions = (showDrawer?: () => void) => ({
  headerStyle: {
    ...Platform.select({
      android: { backgroundColor: '#E53935' }
    })
  },
  headerTitleStyle: {
    ...Platform.select({
      android: { color: 'white' },
      ios: { color: 'black' }
    })
  },
  headerBackTitleStyle: {
    ...Platform.select({
      android: { color: 'white' }
    })
  },
  headerTintColor: Platform.select({
    ios: '#E53935',
    android: 'white'
  })
})

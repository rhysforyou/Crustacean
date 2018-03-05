// @flow
import React from 'react'
import {
  Platform,
  TouchableNativeFeedback,
  Image,
  View,
  StyleSheet
} from 'react-native'
import { accentDarkColor } from '../lib/colors'
import menuIcon from '../../assets/icons/ic_menu.png'

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
  }),
  ...(showDrawer != null
    ? {
        headerLeft: (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(accentDarkColor, true)}
            onPress={showDrawer}
          >
            <View style={styles.actionBarButton}>
              <Image source={menuIcon} />
            </View>
          </TouchableNativeFeedback>
        )
      }
    : {})
})

const styles = StyleSheet.create({
  actionBarButton: {
    width: 48,
    height: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// @flow
import React from 'react'
import { StyleSheet, Platform, TouchableOpacity, Image } from 'react-native'
import shareIcon from '../../assets/icons/ic_share.png'

type Props = {
  onPress: () => void
}

const ShareButton = (props: Props) => (
  <TouchableOpacity
    style={styles.navigationBarButton}
    onPress={props.onPress}
    accessibilityLabel="Learn more about this purple button"
  >
    <Image source={shareIcon} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  navigationBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.select({ ios: 44, android: 48 }),
    height: Platform.select({ ios: 44, android: 48 }),
    marginEnd: Platform.select({ ios: 3, android: 0 })
  }
})

export default ShareButton

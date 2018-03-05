// @flow
import React from 'react'
import {
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  Image,
  View
} from 'react-native'
import { accentDarkColor } from '../lib/colors'
import shareIcon from '../../assets/icons/ic_share.png'

type Props = {
  onPress: () => void
}

const ShareButton = (props: Props) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(accentDarkColor, true)}
    onPress={props.onPress}
    accessibilityLabel="Learn more about this purple button"
  >
    <View style={styles.navigationBarButton}>
      <Image source={shareIcon} />
    </View>
  </TouchableNativeFeedback>
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

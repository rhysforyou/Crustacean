// @flow
import { Linking, Platform } from 'react-native'
import SafariView from 'react-native-safari-view'
import { accentColor } from '../lib/colors'

export default function openLink(url: string) {
  if (Platform.OS === 'ios' && SafariView.isAvailable()) {
    SafariView.show({
      url: url,
      tintColor: accentColor,
      fromBottom: true
    })
  } else if (Linking.canOpenURL(url)) {
    Linking.openURL(url)
  } else {
    console.error(`Unable to open link: ${url}`)
  }
}

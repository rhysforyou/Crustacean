// @flow
import { NativeModules } from 'react-native'

type ImpactWeight = 'light' | 'medium' | 'heavy'
type NotificationType = 'success' | 'warning' | 'error'

const HapticFeedbackIOS: {
  prepareImpact: (weight?: ImpactWeight) => void,
  generateImpact: (weight?: ImpactWeight) => void,
  prepareSelectionChange: () => void,
  generateSelectionChange: () => void,
  prepareNotification: () => void,
  generateNotification: (type?: NotificationType) => void
} =
  NativeModules.HapticFeedbackIOS

export default HapticFeedbackIOS

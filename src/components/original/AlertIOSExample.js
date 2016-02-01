import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} from 'react-native'

import SimpleAlertExampleBlock from './AlertExample'

export const title = 'AlertIOS'
export const description = 'iOS alerts'
export const examples = [
  {
    title: 'Alerts',
    render () {
      return <SimpleAlertExampleBlock />
    }
  }
]

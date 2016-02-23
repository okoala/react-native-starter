import React, {
  Linking,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import styles from './baseStyles'

export const title = 'Linking'
export const description = 'gives you a general interface to interact with both incoming and outgoing app links'
export const examples = [
  {
    title: '打开连接',
    description: 'openURL(url)',
    render () {
      return (
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Linking.openURL('http://www.baidu.com')}>
          <View style={styles.button}>
            <Text>Open</Text>
          </View>
        </TouchableHighlight>
      )
    }
  }
]

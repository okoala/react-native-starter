import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  VibrationIOS
} from 'react-native'

export const title = 'VibrationIOS'
export const description = 'Vibration API for iOS'
export const examples = [
  {
    title: 'VibrationIOS.vibrate()',
    render () {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => VibrationIOS.vibrate()}>
          <View style={styles.button}>
            <Text>Vibrate</Text>
          </View>
        </TouchableHighlight>
      )
    }
  }
]

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10
  }
})

import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBarIOS
} from 'react-native'

export const title = 'StatusBarIOS'
export const description = 'Module for controlling iOS status bar'
export const examples = [
  {
    title: '样式',
    render () {
      return (
        <View>
          {['default', 'light-content'].map((style) =>
            <TouchableHighlight key={style} style={styles.wrapper}
              onPress={() => StatusBarIOS.setStyle(style)}>
              <View style={styles.button}>
                <Text>setStyle('{style}')</Text>
              </View>
            </TouchableHighlight>
          )}
        </View>
      )
    }
  },
  {
    title: '样式动画效果',
    render () {
      return (
        <View>
          {['default', 'light-content'].map((style) =>
            <TouchableHighlight key={style} style={styles.wrapper}
              onPress={() => StatusBarIOS.setStyle(style, true)}>
              <View style={styles.button}>
                <Text>setStyle('{style}', true)</Text>
              </View>
            </TouchableHighlight>
          )}
        </View>
      )
    }
  },
  {
    title: '隐藏动画效果',
    render () {
      return (
        <View>
          {['none', 'fade', 'slide'].map((animation) =>
            <View key={animation}>
              <TouchableHighlight style={styles.wrapper}
                onPress={() => StatusBarIOS.setHidden(true, animation)}>
                <View style={styles.button}>
                  <Text>setHidden(true, '{animation}')</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.wrapper}
                onPress={() => StatusBarIOS.setHidden(false, animation)}>
                <View style={styles.button}>
                  <Text>setHidden(false, '{animation}')</Text>
                </View>
              </TouchableHighlight>
            </View>
          )}
        </View>
      )
    }
  },
  {
    title: '网络活动指示器',
    render () {
      return (
        <View>
          <TouchableHighlight style={styles.wrapper}
            onPress={() => StatusBarIOS.setNetworkActivityIndicatorVisible(true)}>
            <View style={styles.button}>
              <Text>setNetworkActivityIndicatorVisible(true)</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.wrapper}
            onPress={() => StatusBarIOS.setNetworkActivityIndicatorVisible(false)}>
            <View style={styles.button}>
              <Text>setNetworkActivityIndicatorVisible(false)</Text>
            </View>
          </TouchableHighlight>
        </View>
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

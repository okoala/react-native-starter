import React, {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const alertMessage = '别逗！'

class SimpleAlertExampleBlock extends React.Component {
  render () {
    return (
      <View>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage
          )}>
          <View style={styles.button}>
            <Text>默认</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
            [
              {text: '确认', onPress: () => console.log('确认 Pressed!')}
            ]
          )}>
          <View style={styles.button}>
            <Text>一个按钮</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
            [
              {text: '取消', onPress: () => console.log('取消 Pressed!')},
              {text: '确认', onPress: () => console.log('确认 Pressed!')}
            ]
          )}>
          <View style={styles.button}>
            <Text>两个按钮</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            null,
            [
              {text: 'Btn1', onPress: () => console.log('Btn1 Pressed!')},
              {text: 'Btn2', onPress: () => console.log('Btn2 Pressed!')},
              {text: 'Btn3', onPress: () => console.log('Btn3 Pressed!')}
            ]
          )}>
          <View style={styles.button}>
            <Text>三个按钮</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
            '..............'.split('').map((dot, index) => ({
              text: 'Button ' + index,
              onPress: () => console.log('Pressed ' + index)
            }))
          )}>
          <View style={styles.button}>
            <Text>N个按钮</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

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

export default SimpleAlertExampleBlock

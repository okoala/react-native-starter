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
    title: 'Alert',
    render () {
      return <SimpleAlertExampleBlock />
    }
  },
  {
    title: 'Prompt',
    render () {
      return <Prompt />
    }
  }
]

class Prompt extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      promptValue: null
    }

    this.onPrompt = this.onPrompt.bind(this)
    this.customButtons = [{
      text: '确认',
      onPress: this.onPrompt
    }, {
      text: '取消',
      style: 'cancel'
    }]
  }

  onPrompt (promptValue) {
    this.setState({ promptValue: JSON.stringify(promptValue) })
  }

  render () {
    return (
      <View>
        <Text style={{marginTop: 10, marginBottom: 20}}>
          <Text style={{fontWeight: 'bold'}}>当前值为: </Text>
          <Text style={{color: 'red'}}>{this.state.promptValue}</Text>
        </Text>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => AlertIOS.prompt('自定义标题', null, this.onPrompt)}>
          <View style={styles.button}>
            <Text>标题、回调</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => AlertIOS.prompt('自定义标题', null, this.customButtons)}>
          <View style={styles.button}>
            <Text>标题、自定义按钮</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => AlertIOS.prompt('自定义标题', null, this.onPrompt, null, '我是默认值')}>
          <View style={styles.button}>
            <Text>标题、回调、默认值</Text>
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10
  }
})

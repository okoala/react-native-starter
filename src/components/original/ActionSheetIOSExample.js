import React, {
  ActionSheetIOS,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native'

const BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel'
]

const DESTRUCTIVE_INDEX = 3
const CANCEL_INDEX = 4

export const title = 'ActionSheetIOS'
export const description = '显示 iOS\' action sheets'
export const examples = [
  {
    title: '普通',
    render () {
      return <ActionSheetExample />
    }
  }
]

class ActionSheetExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: 'none'
    }
  }

  showActionSheet () {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX
    }, buttonIndex => {
      this.setState({ clicked: BUTTONS[buttonIndex] })
    })
  }

  render () {
    return (
      <View>
        <TouchableHighlight onPress={this.showActionSheet.bind(this)} style={styles.wrapper}>
          <View style={styles.button}>
            <Text>点击显示ActionSheet</Text>
          </View>
        </TouchableHighlight>
        <Text style={{marginTop: 5, fontWeight: 'bold'}}>
          点击了：<Text style={{color: 'red'}}>{this.state.clicked}</Text>
        </Text>
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

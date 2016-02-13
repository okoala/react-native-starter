import React, {
  ActionSheetIOS,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native'

import styles from './baseStyles'

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
export const description = 'Interface to show iOS\' action sheets'
export const examples = [
  {
    title: '正常',
    description: 'showActionSheetWithOptions',
    render () {
      return <ActionSheetExample />
    }
  },
  {
    title: '改变按钮颜色',
    description: 'showActionSheetWithOptions({tintColor: \'green\'})',
    render () {
      return <ActionSheetTintExample />
    }
  },
  {
    title: '分享',
    description: 'showShareActionSheetWithOptions',
    render () {
      return <ShareActionSheetExample />
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
            <Text>显示ActionSheet</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

class ActionSheetTintExample extends React.Component {
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
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: 'green'
    }, buttonIndex => {
      this.setState({ clicked: BUTTONS[buttonIndex] })
    })
  }

  render () {
    return (
      <View>
        <TouchableHighlight onPress={this.showActionSheet.bind(this)} style={styles.wrapper}>
          <View style={styles.button}>
            <Text>显示ActionSheetTint</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

class ShareActionSheetExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  showShareActionSheet () {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'https://code.facebook.com',
      message: '这里输入需要分享的URL',
      subject: '标题内容',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    }, error => {
      console.error(error)
    }, (success, method) => {
      let text
      if (success) {
        text = `Shared via ${method}`
      } else {
        text = `分享失败`
      }
      this.setState({ text })
    })
  }

  render () {
    return (
      <View>
        <TouchableHighlight onPress={this.showShareActionSheet.bind(this)} style={styles.wrapper}>
          <View style={styles.button}>
            <Text>显示分享 ActionSheet</Text>
          </View>
        </TouchableHighlight>
        <Text style={{marginTop: 5, fontWeight: 'bold'}}>
          点击了：<Text style={{color: 'red'}}>{this.state.text}</Text>
        </Text>
      </View>
    )
  }
}

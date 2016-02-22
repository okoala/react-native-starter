import React, {
  AlertIOS,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native'

import autobind from 'autobind-decorator'
import createExamplePage from '../createExamplePage'

export const title = '<NavigatorIOS>'
export const description = 'iOS navigation capabilities'

@autobind
export default class NavigatorIOSExamplePage extends React.Component {
  render () {
    let recurseTitle = '递归导航'
    if (!this.props.depth || this.props.depth === 1) {
      recurseTitle += ' - 下一层'
    }
    return (
      <ScrollView style={styles.list}>
        <View style={styles.line}/>
        <View style={styles.group}>
          {this._renderRow(
            recurseTitle,
            'backButtonTitle',
            () => {
              this.props.navigator.push({
                title: title,
                component: NavigatorIOSExamplePage,
                backButtonTitle: '自定义返回',
                passProps: {depth: this.props.depth ? this.props.depth + 1 : 1}
              })
            }
          )}
          {this._renderRow(
            '跳转其他模块',
            'component: require(\'./Modal\')',
            () => {
              this.props.navigator.push({
                title: 'Very Long Custom Modal Example Title',
                component: createExamplePage(null, require('./Modal'))
              })
            }
          )}
          {this._renderRow(
            '自定义右侧按钮',
            'rightButtonTitle、onRightButtonPress',
            () => {
              this.props.navigator.push({
                title: title,
                component: EmptyPage,
                rightButtonTitle: '取消',
                onRightButtonPress: () => this.props.navigator.pop(),
                passProps: {
                  text: 'This page has a right button in the nav bar'
                }
              })
            }
          )}
          {this._renderRow(
            '自定义左侧、右侧按钮',
            'leftButtonTitle、rightButtonIcon',
            () => {
              this.props.navigator.push({
                title: title,
                component: EmptyPage,
                leftButtonTitle: '自定义左侧',
                onLeftButtonPress: () => this.props.navigator.pop(),
                rightButtonIcon: require('image!NavBarButtonPlus'),
                onRightButtonPress: () => {
                  AlertIOS.alert(
                    'Bar Button Action',
                    'Recognized a tap on the bar button icon',
                    [
                      {
                        text: 'OK',
                        onPress: () => console.log('Tapped OK')
                      }
                    ]
                  )
                },
                passProps: {
                  text: 'This page has an icon for the right button in the nav bar'
                }
              })
            }
          )}
          {this._renderRow(
            '返回上一层',
            'navigator.pop()',
            () => {
              this.props.navigator.pop()
            }
          )}
          {this._renderRow(
            '返回顶层',
            'navigator.popToTop()',
            () => {
              this.props.navigator.popToTop()
            }
          )}
          {this._renderReplace()}
          {this._renderReplacePrevious()}
          {this._renderReplacePreviousAndPop()}
        </View>
        <View style={styles.line}/>
      </ScrollView>
    )
  }

  _renderReplace () {
    if (!this.props.depth) {
      // this is to avoid replacing the top of the stack
      return null
    }
    return this._renderRow(
      '替换当前',
      'this.props.navigator.replace()',
      () => {
        const prevRoute = this.props.route
        this.props.navigator.replace({
          title: 'New Navigation',
          component: EmptyPage,
          rightButtonTitle: 'Undo',
          onRightButtonPress: () => this.props.navigator.replace(prevRoute),
          passProps: {
            text: 'The component is replaced, but there is currently no ' +
              'way to change the right button or title of the current route'
          }
        })
      }
    )
  }

  _renderReplacePrevious () {
    if (!this.props.depth || this.props.depth < 2) {
      // this is to avoid replacing the top of the stack
      return null
    }
    return this._renderRow(
      '替换前一个',
      'navigator.replacePrevious',
      () => {
        this.props.navigator.replacePrevious({
          title: 'Replaced',
          component: EmptyPage,
          passProps: {
            text: 'This is a replaced "previous" page'
          },
          wrapperStyle: styles.customWrapperStyle
        })
      }
    )
  }

  _renderReplacePreviousAndPop () {
    if (!this.props.depth || this.props.depth < 2) {
      // this is to avoid replacing the top of the stack
      return null
    }
    return this._renderRow(
      '替换前一个并跳转',
      'navigator.replacePreviousAndPop',
      () => {
        this.props.navigator.replacePreviousAndPop({
          title: 'Replaced and Popped',
          component: EmptyPage,
          passProps: {
            text: 'This is a replaced "previous" page'
          },
          wrapperStyle: styles.customWrapperStyle
        })
      }
    )
  }

  _renderRow (title, description, onPress) {
    return (
      <View>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {title}
            </Text>
            <Text style={styles.rowDescText}>
              {description}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    )
  }
}

class EmptyPage extends React.Component {
  render () {
    return (
      <View style={styles.emptyPage}>
        <Text style={styles.emptyPageText}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  customWrapperStyle: {
    backgroundColor: '#bbdddd'
  },
  emptyPage: {
    flex: 1,
    paddingTop: 64
  },
  emptyPageText: {
    margin: 10
  },
  list: {
    backgroundColor: '#eeeeee',
    marginTop: 10
  },
  group: {
    backgroundColor: 'white'
  },
  groupSpace: {
    height: 15
  },
  line: {
    backgroundColor: '#bbbbbb',
    height: StyleSheet.hairlineWidth
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15
  },
  rowNote: {
    fontSize: 16
  },
  rowDescText: {
    fontSize: 14,
    marginTop: 5,
    color: '#666666'
  },
  rowText: {
    color: '#ea4c89',
    fontSize: 16,
    fontWeight: '500'
  }
})

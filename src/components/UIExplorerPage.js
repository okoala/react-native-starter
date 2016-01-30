import React, {
  ScrollView,
  StyleSheet,
  View
} from 'react-native'

import UIExplorerTitle from './UIExplorerTitle'

class UIExplorerTitle extends React.Component {
  static propTypes = {
    keyboardShouldPersistTaps: React.PropTypes.bool,
    noScroll: React.PropTypes.bool,
    noSpacer: React.PropTypes.bool
  };

  render () {
    const ContentWrapper
    const wrapperProps = {}
    if (this.props.noScroll) {
      ContentWrapper = View
    } else {
      ContentWrapper = ScrollView
      // IOS only, 控制 nav bar、tab bar、toolbar后面的内容是否自适应
      wrapperProps.automaticallAdjustContentInsets = !this.props.title
      // 键盘在弹起的情况下，点击其他地方不会自动收起。
      wrapperProps.keyboardShouldPersistTaps = true
      wrapperProps.keyboardDismissMode = 'interactive'
    }

    return (
      <View style={styles.container}></View>
    )
  }
}

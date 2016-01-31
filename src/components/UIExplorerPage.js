import React, {
  ScrollView,
  StyleSheet,
  View
} from 'react-native'

import UIExplorerTitle from './UIExplorerTitle'

class UIExplorerPage extends React.Component {
  static propTypes = {
    keyboardShouldPersistTaps: React.PropTypes.bool,
    noScroll: React.PropTypes.bool,
    noSpacer: React.PropTypes.bool
  };

  render () {
    let ContentWrapper = null
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

    const title = this.props.title
      ? <UIExplorerTitle title={this.props.title}/>
      : null

    const spacer = this.props.noSpacer
      ? null
      : <View style={styles.spacer} />

    return (
      <View style={styles.container}>
        {title}
        <ContentWrapper
          style={styles.wrapper}
          {...wrapperProps}>
          {this.props.children}
          {spacer}
        </ContentWrapper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    flex: 1
  },
  spacer: {
    height: 270
  },
  wrapper: {
    flex: 1,
    paddingTop: 10
  }
})

export default UIExplorerPage

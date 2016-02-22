import React, {
  ActivityIndicatorIOS,
  StyleSheet,
  View
} from 'react-native'

import TimerMixin from 'react-timer-mixin'

export const title = '<ActivityIndicatorIOS>'
export const description = 'Animated loading indicators.'
export const examples = [
  {
    title: '默认颜色',
    render () {
      return (
        <View>
          <ActivityIndicatorIOS
            style={[styles.centering, {height: 40}]}
          />
          <ActivityIndicatorIOS
            style={[styles.centering, {backgroundColor: '#eeeeee', height: 40}]}
          />
        </View>
      )
    }
  },
  {
    title: '颜色 - color=\'white\'',
    render () {
      return (
        <ActivityIndicatorIOS
          style={[styles.centering, styles.gray, {height: 40}]}
          color='white'
        />
      )
    }
  },
  {
    title: '型号 - size=\'large\'',
    render () {
      return (
        <ActivityIndicatorIOS
          style={[styles.centering, styles.gray, {height: 80}]}
          color='white'
          size='large'
        />
      )
    }
  },
  {
    title: '自定义颜色',
    render () {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicatorIOS color='#0000ff' />
          <ActivityIndicatorIOS color='#aa00aa' />
          <ActivityIndicatorIOS color='#aa3300' />
          <ActivityIndicatorIOS color='#00aa00' />
        </View>
      )
    }
  },
  {
    title: '大号, 自定义颜色',
    render () {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicatorIOS
            size='large'
            color='#0000ff'
          />
          <ActivityIndicatorIOS
            size='large'
            color='#aa00aa'
          />
          <ActivityIndicatorIOS
            size='large'
            color='#aa3300'
          />
          <ActivityIndicatorIOS
            size='large'
            color='#00aa00'
          />
        </View>
      )
    }
  },
  {
    title: '开始/停止 - animating={animating}',
    render () {
      return <ToggleAnimatingActivityIndicator />
    }
  }
]

class ToggleAnimatingActivityIndicator extends React.Component {
  constructor () {
    super()
    this.state = {
      animating: true
    }
  }

  componentDidMount () {
    this.setToggleTimeout()
  }

  componentWillUnmount () {
    TimerMixin.componentWillUnmount.call(this)
  }

  render () {
    return (
      <ActivityIndicatorIOS
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
    )
  }

  setToggleTimeout () {
    TimerMixin.setTimeout.call(this, () => {
      this.setState({ animating: !this.state.animating })
      this.setToggleTimeout()
    }, 1200)
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  gray: {
    backgroundColor: '#cccccc'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

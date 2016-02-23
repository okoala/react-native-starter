import React, {
  PanResponder,
  StyleSheet,
  View,
  Text
} from 'react-native'

import autobind from 'autobind-decorator'

const CIRCLE_SIZE = 80
const CIRCLE_COLOR = 'blue'
const CIRCLE_HIGHLIGHT_COLOR = 'green'

const text = `
  onPanResponderMove: (event, gestureState) => {}

  event.nativeEvent
    changedTouches - 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）
    identifier - 触摸点的ID
    locationX - 触摸点相对于父元素的横坐标
    locationY - 触摸点相对于父元素的纵坐标
    pageX - 触摸点相对于根元素的横坐标
    pageY - 触摸点相对于根元素的纵坐标
    target - 触摸点所在的元素ID
    timestamp -  触摸事件的时间戳，可用于移动速度的计算
    touches - 当前屏幕上的所有触摸点的集合

  gestureState
    stateID - 触摸状态的ID。在屏幕上有至少一个触摸点的情况下，这个ID会一直有效。
    moveX - 最近一次移动时的屏幕横坐标
    moveY - 最近一次移动时的屏幕纵坐标
    x0 - 当响应器产生时的屏幕坐标
    y0 - 当响应器产生时的屏幕坐标
    dx - 从触摸操作开始时的累计横向路程
    dy - 从触摸操作开始时的累计纵向路程
    vx - 当前的横向移动速度
    vy - 当前的纵向移动速度
    numberActiveTouches - 当前在屏幕上的有效触摸点的数量

  PanResponder.create({
    // 要求成为响应者
    onMoveShouldSetPanResponder,
    onMoveShouldSetPanResponderCapture,
    onStartShouldSetPanResponder,
    onStartShouldSetPanResponderCapture,
    onPanResponderReject,
    // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
    onPanResponderGrant,
    onPanResponderStart,
    onPanResponderEnd,
    // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
    // 一般来说这意味着一个手势操作已经成功完成。
    onPanResponderRelease,
    // 最近一次的移动距离为gestureState.move{X,Y}
    onPanResponderMove,
    // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
    onPanResponderTerminate,
    onPanResponderTerminationRequest,
    // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
    // 默认返回true。目前暂时只支持android。
    onShouldBlockNativeResponder
  })
`

export const title = 'PanResponder'
export const description = 'Shows the use of PanResponder to provide basic gesture handling.'
@autobind
export default class PanResponderExample extends React.Component {
  constructor () {
    super()
    this._panResponder = {}
    this._previousLeft = 0
    this._previousTop = 0
    this._circleStyles = {}
    this.circle = null
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd
    })
    this._previousLeft = 20
    this._previousTop = 84
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop
      }
    }
  }

  componentDidMount () {
    this._updatePosition()
  }

  render () {
    return (
      <View
        style={styles.container}>
        <View style={styles.text}>
          <Text>{text}</Text>
        </View>
        <View
          ref={(circle) => {
            this.circle = circle
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}
        />
      </View>
    )
  }

  _highlight () {
    const circle = this.circle
    circle && circle.setNativeProps({
      style: {
        backgroundColor: CIRCLE_HIGHLIGHT_COLOR
      }
    })
  }

  _unHighlight () {
    const circle = this.circle
    circle && circle.setNativeProps({
      style: {
        backgroundColor: CIRCLE_COLOR
      }
    })
  }

  _updatePosition () {
    this.circle && this.circle.setNativeProps(this._circleStyles)
  }

  _handleStartShouldSetPanResponder (e, gestureState) {
    // Should we become active when the user presses down on the circle?
    return true
  }

  _handleMoveShouldSetPanResponder (e, gestureState) {
    // Should we become active when the user moves a touch over the circle?
    return true
  }

  _handlePanResponderGrant (e, gestureState) {
    this._highlight()
  }

  _handlePanResponderMove (e, gestureState) {
    this._circleStyles.style.left = this._previousLeft + gestureState.dx
    this._circleStyles.style.top = this._previousTop + gestureState.dy
    this._updatePosition()
  }

  _handlePanResponderEnd (e, gestureState) {
    this._unHighlight()
    this._previousLeft += gestureState.dx
    this._previousTop += gestureState.dy
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  },
  text: {
    height: 400,
    padding: 10
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: CIRCLE_COLOR,
    position: 'absolute',
    left: 10,
    top: 10
  }
})

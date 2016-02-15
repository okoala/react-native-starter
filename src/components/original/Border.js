import React, {
  StyleSheet,
  View
} from 'react-native'

export const title = 'Border'
export const description = 'Demonstrates some of the border styles available to Views.'
export const examples = [
  {
    title: '普通',
    render () {
      return <View style={[styles.box, styles.border1]}/>
    }
  },
  {
    title: '圆角',
    render () {
      return <View style={[styles.box, styles.borderRadius]}/>
    }
  },
  {
    title: '颜色',
    render () {
      return <View style={[styles.box, styles.border2]}/>
    }
  },
  {
    title: '不同宽度',
    render () {
      return <View style={[styles.box, styles.border3]}/>
    }
  },
  {
    title: '自定义1',
    render () {
      return <View style={[styles.box, styles.border4]}/>
    }
  },
  {
    title: '自定义2',
    platform: 'ios',
    render() {
      return <View style={[styles.box, styles.border5]} />;
    }
  },
  {
    title: '自定义3',
    platform: 'ios',
    render() {
      return <View style={[styles.box, styles.border6]} />;
    }
  },
  {
    title: '剪切',
    platform: 'ios',
    render() {
      return (
        <View style={[styles.box, styles.border7]}>
          <View style={styles.border7_inner} />
        </View>
      );
    }
  },
  {
    title: '单边框',
    render() {
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.box, styles.border8, {borderTopWidth: 5}]} />
          <View style={[styles.box, styles.border8, {borderLeftWidth: 5}]} />
          <View style={[styles.box, styles.border8, {borderBottomWidth: 5}]} />
          <View style={[styles.box, styles.border8, {borderRightWidth: 5}]} />
        </View>
      )
    }
  }
]

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100
  },
  border1: {
    borderWidth: 10,
    borderColor: 'brown'
  },
  borderRadius: {
    borderWidth: 10,
    borderRadius: 10,
    borderColor: 'cyan'
  },
  border2: {
    borderWidth: 10,
    borderTopColor: 'red',
    borderRightColor: 'yellow',
    borderBottomColor: 'green',
    borderLeftColor: 'blue'
  },
  border3: {
    borderColor: 'purple',
    borderTopWidth: 10,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftWidth: 40
  },
  border4: {
    borderTopWidth: 10,
    borderTopColor: 'red',
    borderRightWidth: 20,
    borderRightColor: 'yellow',
    borderBottomWidth: 30,
    borderBottomColor: 'green',
    borderLeftWidth: 40,
    borderLeftColor: 'blue'
  },
  border5: {
    borderTopWidth: 10,
    borderTopColor: 'red',
    borderRightWidth: 20,
    borderRightColor: 'yellow',
    borderBottomWidth: 30,
    borderBottomColor: 'green',
    borderLeftWidth: 40,
    borderLeftColor: 'blue',

    borderRadius: 50
  },
  border6: {
    borderTopWidth: 10,
    borderTopColor: 'red',
    borderRightWidth: 20,
    borderRightColor: 'yellow',
    borderBottomWidth: 30,
    borderBottomColor: 'green',
    borderLeftWidth: 40,
    borderLeftColor: 'blue',

    borderTopLeftRadius: 100
  },
  border7: {
    borderWidth: 10,
    borderColor: '#f007',
    borderRadius: 30,

    overflow: 'hidden'
  },
  border7_inner: {
    backgroundColor: 'blue',
    width: 100,
    height: 100
  },
  border8: {
    width: 60,
    height: 60,
    borderColor: 'black',
    marginRight: 10,
    backgroundColor: 'lightgrey'
  }
})

import React, {
  StyleSheet,
  View
} from 'react-native'

export const title = 'Border'
export const description = '给View设置边框'
export const examples = [
  {
    title: '等宽 / 同色',
    description: 'borderWidth & borderColor',
    render () {
      return <View style={[styles.box, styles.border1]}/>
    }
  },
  {
    title: '等宽 / 同色',
    description: 'borderWidth & borderColor & borderRadius',
    render () {
      return <View style={[styles.box, styles.borderRadius]}/>
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
  }
})

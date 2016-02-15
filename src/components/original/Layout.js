import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'

import UIExplorerBlock from '../UIExplorerBlock'
import UIExplorerPage from '../UIExplorerPage'

export const title = 'Layout - Flexbox'
export const description = 'Examples of using the flexbox API to layout views.'
export const examples = [
  {
    title: '方向 - flexDirection',
    render () {
      return (
        <View>
          <Text>flexDirection: 'row'</Text>
          <CircleBlock style={{flexDirection: 'row'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
          <Text>flexDirection: 'column'</Text>
          <CircleBlock style={{flexDirection: 'column'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
        </View>
      )
    }
  },
  {
    title: '内容适应 - justifyContent',
    render () {
      return (
        <View>
          <Text>justifyContent: 'flex-start'</Text>
          <CircleBlock style={{justifyContent: 'flex-start'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
          <Text>justifyContent: 'center'</Text>
          <CircleBlock style={{justifyContent: 'center'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
          <Text>justifyContent: 'flex-end'</Text>
          <CircleBlock style={{justifyContent: 'flex-end'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
          <Text>justifyContent: 'space-between'</Text>
          <CircleBlock style={{justifyContent: 'space-between'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
          <Text>justifyContent: 'space-around'</Text>
          <CircleBlock style={{justifyContent: 'space-around'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
        </View>
      )
    }
  },
  {
    title: '元素对齐 - alignItems',
    render () {
      return (
        <View>
          <Text>alignItems: 'flex-start'</Text>
          <CircleBlock style={{alignItems: 'flex-start', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
          <Text>alignItems: 'center'</Text>
          <CircleBlock style={{alignItems: 'center', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
          <Text>alignItems: 'flex-end'</Text>
          <CircleBlock style={{alignItems: 'flex-end', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
        </View>
      )
    }
  },
  {
    title: 'Wrap - flexWrap',
    render () {
      return (
        <CircleBlock style={{flexWrap: 'wrap'}}>
          {'oooooooooo'.split('').map((char, i) => <Circle key={i} />)}
        </CircleBlock>
      )
    }
  }
]


class Circle extends React.Component {
  render () {
    const size = this.props.size || 20
    return (
      <View
        style={{
          borderRadius: size / 2,
          backgroundColor: '#527fe4',
          width: size,
          height: size,
          margin: 1
        }}
      />
    )
  }
}

class CircleBlock extends React.Component {
  render () {
    return (
      <View style={[styles.circleStyle, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#aaccff',
    borderRadius: 10,
    borderWidth: 0.5,
    opacity: 0.5,
    padding: 5
  },
  circleStyle: {
    flexDirection: 'row',
    backgroundColor: '#f6f7f8',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 2
  }
})

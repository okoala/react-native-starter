import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'

import UIExplorerBlock from '../UIExplorerBlock'
import UIExplorerPage from '../UIExplorerPage'

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
    const circleStyle = {
      flexDirection: 'row',
      backgroundColor: '#f6f7f8',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      marginBottom: 2
    }
    return (
      <View style={[circleStyle, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

class LayoutExample extends React.Component {
  displayName: 'LayoutExample';

  render () {
    return (
      <UIExplorerPage title={this.props.navigator ? null : 'Layout'}>
        <UIExplorerBlock title="Flex Direction">
          <Text>row</Text>
          <CircleBlock style={{flexDirection: 'row'}}>
            <Circle /><Circle /><Circle /><Circle /><Circle />
          </CircleBlock>
        </UIExplorerBlock>
      </UIExplorerPage>
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
  }
})

LayoutExample.title = 'Layout - Flexbox'
LayoutExample.description = 'Examples of using the flexbox API to layout views.'

export default LayoutExample

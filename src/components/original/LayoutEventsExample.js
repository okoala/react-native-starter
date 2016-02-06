import React, {
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  View
} from 'react-native'

export const title = 'Layout Events'
export const description = 'Examples that show how Layout events can be used to ' +
  'measure view size and position'
export const examples = [
  {
    title: 'LayoutEventExample',
    render () {
      return <LayoutEventExample />
    }
  }
]

class LayoutEventExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      viewStyle: {
        margin: 20
      }
    }
  }

  animateViewLayout () {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.spring,
      () => {
        console.log('layout animation done.')
        this.addWrapText()
      }
    )
    this.setState({
      viewStyle: {
        margin: this.state.viewStyle.margin > 20 ? 20 : 60
      }
    })
  }

  addWrapText () {
    this.setState(
      {extraText: '  And a bunch more text to wrap around a few lines.'},
      this.changeContainer
    )
  }

  changeContainer () {
    this.setState({containerStyle: {width: 280}})
  }

  onViewLayout (e) {
    console.log('received view layout event\n', e.nativeEvent)
    this.setState({viewLayout: e.nativeEvent.layout})
  }

  onTextLayout (e) {
    console.log('received text layout event\n', e.nativeEvent)
    this.setState({textLayout: e.nativeEvent.layout})
  }

  onImageLayout (e) {
    console.log('received image layout event\n', e.nativeEvent)
    this.setState({imageLayout: e.nativeEvent.layout})
  }

  render () {
    const viewStyle = [styles.view, this.state.viewStyle]
    const textLayout = this.state.textLayout || {width: '?', height: '?'}
    const imageLayout = this.state.imageLayout || {x: '?', y: '?'}

    return (
      <View style={this.state.containerStyle}>
        <Text>
          layout events are called on mount and whenever layout is recalculated. Note that the layout event will typically be received <Text style={styles.italicText}>before</Text> the layout has updated on screen, especially when using layout animations.{'  '}
          <Text style={styles.pressText} onPress={this.animateViewLayout.bind(this)}>
            Press here to change layout.
          </Text>
        </Text>
        <View ref="view" onLayout={this.onViewLayout.bind(this)} style={viewStyle}>
          <Image
            ref="img"
            onLayout={this.onImageLayout.bind(this)}
            style={styles.image}
            source={{uri: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png'}}
          />
          <Text>
            viewLayout: {JSON.stringify(this.state.viewLayout, null, '  ' + '\n')}
          </Text>
          <Text ref="txt" onLayout={this.onTextLayout.bind(this)} style={styles.text}>
            A simple piece of text. {this.state.extraText}
          </Text>
          <Text>
            {'\n'}
            Text w/h: {textLayout.width}/{textLayout.height + '\n'}
            Image x/y: {imageLayout.x}/{imageLayout.y}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 12,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'transparent'
  },
  text: {
    alignSelf: 'flex-start',
    borderColor: 'rgba(0, 0, 255, 0.2)',
    borderWidth: 0.5
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center'
  },
  pressText: {
    fontWeight: 'bold'
  },
  italicText: {
    fontStyle: 'italic'
  }
})

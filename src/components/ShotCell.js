import React, {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from 'react-native'

import { shotImage } from '../util'

const screen = Dimensions.get('window')

class ShotCell extends React.Component {
  render () {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onSelect}>
          <View style={styles.row}>
            <Image
              source={shotImage(this.props.shot)}
              style={styles.cellImage}
              accessible={true}
            />
          </View>
        </TouchableHighlight>
        <View style={styles.cellBorder} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },
  row: {
    backgroundColor: "white",
    flexDirection: "column"
  },
  cellImage: {
    height: 300,
    width: screen.width,
    backgroundColor: "transparent",
    resizeMode: "cover"
  },
  cellBorder: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: 1 / PixelRatio.get(),
    marginLeft: 4
  }
})

export default ShotCell

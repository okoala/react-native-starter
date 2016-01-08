import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'

class OriginalView extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <Text>原生组件</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center"
  },
  separator: {
    height: 1,
    backgroundColor: "#eeeeee"
  },
  scrollSpinner: {
    marginVertical: 20
  }
})

export default OriginalView

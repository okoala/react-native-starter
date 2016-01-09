import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'

import ShotList from '../components/ShotList'

class DribbbleView extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ShotList />
        <Text>Dribbble</Text>
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

export default DribbbleView

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
        <ShotList {...this.props}/>
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
  scrollSpinner: {
    marginVertical: 20
  }
})

export default DribbbleView

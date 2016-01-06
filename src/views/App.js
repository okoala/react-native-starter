import React, { StyleSheet, Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import { Map } from 'immutable'

import * as actions from '../store/actions'

import Login from './Login'
import Tabbar from '../components/Tabbar'

class App extends React.Component {
  constructor (props) {
    this.state = {
      loggedIn: false
    }
  },

  render () {
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
  }
}

const stateToProps = (state) => {
  return {...state}
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({...actions}, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default connect(stateToProps, dispatchToProps)(App)



import React, {
  View,
  Text,
  StyleSheet,
  Navigator,
  NavigatorIOS,
  TabBarIOS,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  Platform
} from 'react-native'

import Toolbar from '../components/Toolbar'

import autobind from 'autobind-decorator'
import Icon from 'react-native-vector-icons/Ionicons'
import Navigate from '../util/Navigate'
import Navigation from './Navigation'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

const navbars = []

@autobind
class App extends React.Component {
  static childContextTypes = {
    drawer: React.PropTypes.object,
    navigator: React.PropTypes.object
  };

  constructor (props) {
    super(props)

    this.state = {
      drawer: null,
      navigator: null,
      selectedTab: 'original'
    }
  }

  getChildContext () {
    return {
      drawer: this.state.drawer,
      navigator: this.state.navigator
    }
  }

  setDrawer (drawer) {
    this.setState({drawer})
  }

  setNavigator (navigator) {
    this.setState({navigator: new Navigate(navigator)})
  }

  _renderTabBarItem (title, icon, name, view) {
    return (
      <Icon.TabBarItem
        title={title}
        iconName={icon}
        selectedIconName={icon}
        selected={this.state.selectedTab === name}
        onPress={() => {
          this.setState({
            selectedTab: name
          })
        }}>
        <NavigatorIOS style={styles.wrapper}
          initialRoute={{
            component: view,
            title: title
          }}
        />
      </Icon.TabBarItem>
    )
  }

  _openDrawer () {
    this.refs['DRAWER'].openDrawer()
  }

  render () {
    const { drawer, navigator } = this.state

    if (Platform.OS === 'android') {
      return (
          <DrawerLayoutAndroid
            ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => {
              if (drawer && navigator) {
                return React.createElement(Navigation)
              }
              return null
            }}>
            {drawer &&
              <Navigator
                initialRoute={Navigate.getInitialRoute()}
                navigationBar={<Toolbar onIconPress={drawer.openDrawer} />}
              />
            }
          </DrawerLayoutAndroid>
      )
    } else {
      return (
        <TabBarIOS tintColor={"#ea4c89"}>
          {navbars.map((item) => {
            return this._renderTabBarItem(item.title, item.icon, item.name, item.view)
          })}
        </TabBarIOS>
      )
    }
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    color: 'white',
    margin: 50
  },
  wrapper: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56
  }
})

const stateToProps = (state) => ({...state})
const dispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

export default connect(stateToProps, dispatchToProps)(App)

import React, {
  View,
  StyleSheet,
  Navigator,
  NavigatorIOS,
  TabBarIOS,
  DrawerLayoutAndroid,
  Platform
} from 'react-native'

import Toolbar from '../components/Toolbar'

import autobind from 'autobind-decorator'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Navigate from '../util/Navigate'
import Navigation from './Navigation'
import { original, community, dribbble, cnodejs } from '../route'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

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
                return <Navigation/>
              }
              return null
            }}>
            {drawer &&
              <Navigator
                ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
                initialRoute={Navigate.getInitialRoute()}
                navigationBar={<Toolbar onIconPress={drawer.openDrawer} />}
                configureScene={() => {
                  return Navigator.SceneConfigs.FadeAndroid
                }}
                renderScene={(route) => {
                  if (this.state.navigator && route.component) {
                    return (
                      <View
                        style={styles.scene}
                        showsVerticalScrollIndicator={false}>
                        <route.component title={route.title} path={route.path} {...route.props} />
                      </View>
                    )
                  }
                }}
              />
            }
          </DrawerLayoutAndroid>
      )
    } else {
      return (
        <TabBarIOS tintColor={"#ea4c89"}>
          {this._renderTabBarItem(original.title, original.icon, 'original', original.component)}
          {this._renderTabBarItem(community.title, community.icon, 'community', community.component)}
          {this._renderTabBarItem(dribbble.title, dribbble.icon, 'dribbble', dribbble.component)}
          {this._renderTabBarItem(cnodejs.title, cnodejs.icon, 'cnodejs', cnodejs.component)}
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

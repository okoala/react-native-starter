import React, {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  ToolbarAndroid,
  Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

import OriginalView from './Original'
import CommunityView from './Community'
import DribbbleView from './Dribbble'
import CNodeView from './CNode'

const navbars = [
  {
    title: '原生组件',
    icon: 'pizza',
    name: 'original',
    view: OriginalView
  },
  {
    title: '社区组件',
    icon: 'coffee',
    name: 'community',
    view: CommunityView
  },
  {
    title: 'Dribble',
    icon: 'social-dribbble-outline',
    name: 'dribbble',
    view: DribbbleView
  },
  {
    title: 'CNode',
    icon: 'social-nodejs',
    name: 'cnodejs',
    view: CNodeView
  }
]

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedTab: "original"
    }
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
    if (Platform.OS === 'android') {
      return (
        <ToolbarAndroid
          actions={[{title: 'fake', show: 'always'}]}
          navIcon={require('image!ic_menu_black_24dp')}
          style={styles.toolbar}
          title="Toolbar"
        />
      )
    } else {
      return (
        <TabBarIOS tintColor={"#ea4c89"}>
          {navbars.map(item => {
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
    alignItems: "center"
  },
  tabText: {
    color: "white",
    margin: 50
  },
  wrapper: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  }
})

const stateToProps = (state) => ({...state})
const dispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

export default connect(stateToProps, dispatchToProps)(App)

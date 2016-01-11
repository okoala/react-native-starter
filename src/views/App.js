import React, {
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  Text,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import * as actions from '../store/actions'

import OriginalView from './Original'
import CommunityView from './Community'
import DribbbleView from './Dribbble'
import CNodeView from './CNode'

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
    return (
      <TabBarIOS tintColor={"#ea4c89"}>
        {this._renderTabBarItem("原生组件", "pizza", "original", OriginalView)}
        {this._renderTabBarItem("社区组件", "coffee", "community", CommunityView)}
        {this._renderTabBarItem("Dribble", "social-dribbble-outline", "dribbble", DribbbleView)}
        {this._renderTabBarItem("CNode", "social-nodejs", "cnodejs", CNodeView)}
      </TabBarIOS>
    )
  }
}

const stateToProps = (state) => ({...state})
const dispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

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
  }
})

export default connect(stateToProps, dispatchToProps)(App)



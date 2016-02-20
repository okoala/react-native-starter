import React, {
  View,
  Text,
  Image,
  PropTypes
} from 'react-native'

import {
  Avatar,
  Drawer,
  COLOR,
  TYPO
} from 'react-native-material-design'

import { original, community, dribbble, cnodejs } from '../route'
import lang from '../constants/Localization'

import autobind from 'autobind-decorator'

@autobind
export default class Navigation extends React.Component {
  static contextTypes = {
    drawer: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props)
    this.state = {
      route: 'original'
    }
  }

  changeScene (path, name) {
    const { drawer, navigator } = this.context

    this.setState({ route: path })
    navigator.to(path, name)
    drawer.closeDrawer()
  }

  render () {
    const { route } = this.state

    return (
      <Drawer theme='light'>
        <Drawer.Header
          image={<Image source={require('../styles/img/nav.jpg')}/>}>
          <View style={styles.header}>
            <Avatar size={80} image={<Image source={{ uri: 'http://facebook.github.io/react-native/img/opengraph.png?2' }}/>} />
            <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>React Native Material Design</Text>
          </View>
        </Drawer.Header>

        <Drawer.Section
          items={[
            {
              value: lang.originalView,
              icon: original.icon,
              active: route === 'original',
              onPress: () => this.changeScene('original'),
              onLongPress: () => this.changeScene('original')
            },
            {
              value: lang.communityView,
              icon: community.icon,
              active: route === 'community',
              onPress: () => this.changeScene('community'),
              onLongPress: () => this.changeScene('community')
            },
            {
              value: lang.dribbbleView,
              icon: dribbble.icon,
              active: route === 'dribbble',
              onPress: () => this.changeScene('dribbble'),
              onLongPress: () => this.changeScene('dribbble')
            },
            {
              value: lang.cnodejsView,
              icon: cnodejs.icon,
              active: route === 'cnodejs',
              onPress: () => this.changeScene('cnodejs'),
              onLongPress: () => this.changeScene('cnodejs')
            }
          ]}
        />
      </Drawer>
    )
  }
}

const styles = {
  header: {
    paddingTop: 16
  },
  text: {
    marginTop: 20
  }
}

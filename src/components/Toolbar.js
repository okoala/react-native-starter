import React, {
  PropTypes
} from 'react-native'

import {
  Toolbar as MaterialToolbar
} from 'react-native-material-design'

import lang from '../constants/Localization'

class Toolbar extends React.Component {
  static contextTypes = {
    navigator: PropTypes.object
  };

  static propTypes = {
    onIconPress: PropTypes.func.isRequired
  };

  render () {
    const { navigator } = this.context
    const { onIconPress } = this.props

    return (
      <MaterialToolbar
        title={navigator && navigator.currentRoute ? navigator.currentRoute.title : lang.home}
        icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
        onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
        rightIconStyle={{margin: 10}}
      />
    )
  }
}

export default Toolbar

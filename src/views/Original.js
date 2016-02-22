import React, {
  StyleSheet,
  Settings,
  Platform
} from 'react-native'

import UIExplorerListBase from '../components/UIExplorerListBase'

const isIOS = Platform.OS === 'ios'

const COMPONENTS = [
  require('../components/original/Image'),
  require('../components/original/Modal'),
  require('../components/original/ListView')
]

if (isIOS) {
  [
    require('../components/original/ActivityIndicatorIOS'),
    require('../components/original/DatePickerIOS'),
    require('../components/original/NavigatorIOS')
  ].map(item => {
    COMPONENTS.push(item)
  })
} else {
  [
    require('../components/original/DatePickerAndroid')
  ].map(item => {
    COMPONENTS.push(item)
  })
}

const APIS = [
  require('../components/original/ActionSheetIOS'),
  require('../components/original/AlertIOS')
]

const STYLES = [
  require('../components/original/Layout'),
  require('../components/original/LayoutEvents'),
  require('../components/original/Border')

]

class OriginalView extends React.Component {
  renderAdditionalView (renderRow, renderTextInput) {
    return renderTextInput(styles.searchTextInput)
  }

  search (text) {
    Settings.set({searchText: text})
  }

  _openExample (example) {
    const Component = UIExplorerListBase.makeRenderable(example)
    this.props.navigator.push({
      title: example.title,
      component: Component
    })
  }

  onPressRow (example) {
    this._openExample(example)
  }

  render () {
    return (
      <UIExplorerListBase
        components={COMPONENTS}
        apis={APIS}
        styles={STYLES}
        searchText={Settings.get('searchText')}
        renderAdditionalView={this.renderAdditionalView.bind(this)}
        search={this.search.bind(this)}
        onPressRow={this.onPressRow.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  searchTextInput: {
    height: 20
  }
})

export default OriginalView

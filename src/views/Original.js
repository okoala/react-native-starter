import React, {
  StyleSheet,
  Settings,
  Text,
  View,
  Platform,
} from 'react-native'

import UIExplorerListBase from '../components/UIExplorerListBase'

const isIOS = Platform.OS === "ios"

const COMPONENTS = [
  isIOS
    ? require('../components/original/DatePickerIOSExample')
    : require('../components/original/DatePickerAndroidExample'),

  require('../components/original/ListViewExample')
]

const APIS = [
  require('../components/original/ActionSheetIOSExample'),
  require('../components/original/AlertIOSExample')
]

const STYLES = [
  require('../components/original/LayoutExample'),
  require('../components/original/LayoutEventsExample'),
  require('../components/original/BorderExample')

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

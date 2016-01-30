import React, {
  StyleSheet,
  Setting,
  Text,
  View
} from 'react-native'

import UIExplorerListBase from './UIExplorerListBase'

const COMPONENTS = [
  require('../components/original/BorderExample')
]
const APIS = []

class OriginalView extends React.Component {
  renderAdditionalView (renderRow, renderTextInput) {
    return renderTextInput(styles.searchTextInput)
  }

  search (text) {
    Settings.set({searchText: text})
  }

  _openExample (example) {
    this.props.navigator.push({
      title: example.title,
      component: example
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
        searchText={Setting.get('searchText')}
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

import React, {
  StyleSheet,
  Settings,
  Text,
  View
} from 'react-native'

import UIExplorerListBase from '../components/UIExplorerListBase'

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
    const Component = UIExplorerListBase.makeRenderable(example)
    this.props.navigator.push({
      title: Component.title,
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

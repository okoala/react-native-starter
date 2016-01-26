import React, {
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (h1, h2) => h1 !== h2
})

class UIExplorerListBase extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRowsAndSections({
        components: [],
        apis: []
      }),
      searchText: this.props.searchText || ''
    }
  }

  componentDidMount () {
    this.search(this.state.searchText)
  }

  render () {
    const topView = this.props.renderAdditionalView &&
      this.props.renderAdditionalView(this.renderRow.bind(this), this.renderTextInput.bind(this))

    return (
      <View style={styles.listContainer}>
        {topView}
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}

        />
      </View>
    )
  }
}

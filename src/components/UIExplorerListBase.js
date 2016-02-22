import React, {
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import createExamplePage from './createExamplePage'

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
        apis: [],
        styles: []
      }),
      searchText: this.props.searchText || ''
    }
  }

  componentDidMount () {
    this.search(this.state.searchText)
  }

  renderTextInput (searchTextInputStyle) {
    return (
      <View style={styles.searchRow}>
        <TextInput
          autoCapitalize='none'
          autoCorrent={false}
          clearButtonMode='always'
          onChangeText={this.search.bind(this)}
          placeholder='搜索组件...'
          style={[styles.searchTextInput]}
          testID='explorer_search'
          value={this.state.searchText}
        />
      </View>
    )
  }

  _renderSectionHeader (data, section) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          {section.toUpperCase()}
        </Text>
      </View>
    )
  }

  renderRow (example, i) {
    return (
      <View key={i}>
        <TouchableHighlight onPress={() => this.onPressRow(example)}>
          <View style={styles.row}>
            <Text style={styles.rowTitleText}>
              {example.title}
            </Text>
            <Text style={styles.rowDetailText}>
              {example.description}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator}/>
      </View>
    )
  }

  search (text) {
    this.props.search && this.props.search(text)

    const regex = new RegExp(String(text), 'i')
    const filter = (component) => regex.test(component.title)

    this.setState({
      dataSource: ds.cloneWithRowsAndSections({
        components: this.props.components.filter(filter),
        apis: this.props.apis.filter(filter),
        styles: this.props.styles.filter(filter)
      }),
      searchText: text
    })
  }

  onPressRow (example) {
    this.props.onPressRow && this.props.onPressRow(example)
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
          renderSectionHeader={this._renderSectionHeader}
          keyboardShouldPersistTaps={true}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode='on-drag'
        />
      </View>
    )
  }

  static makeRenderable (example) {
    return example.examples
      ? createExamplePage(null, example)
      : (example.default ? example.default : example)
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  list: {
    backgroundColor: '#eeeeee'
  },
  sectionHeader: {
    padding: 5
  },
  sectionHeaderText: {
    fontWeight: '500',
    fontSize: 11
  },
  group: {
    backgroundColor: 'white'
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15
  },
  rowTitleText: {
    color: '#ea4c89',
    fontSize: 17,
    fontWeight: '500'
  },
  rowDetailText: {
    fontSize: 15,
    color: '#888888',
    lineHeight: 20
  },
  searchRow: {
    backgroundColor: '#eeeeee',
    paddingTop: 75,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  searchTextInput: {
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 8,
    height: 30,
    fontSize: 12
  }
})

export default UIExplorerListBase

import React, {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import UIExplorerPage from '../UIExplorerPage'

const ExampleList = [
  require('./ListViewSimpleExample'),
  require('./ListViewGridLayoutExample')
]

export const title = '<ListView>'
export const description = 'Performat, scrollable list of data.'

export default class ListViewExample extends React.Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(ExampleList)
    }
  }

  render () {
    return (
      <UIExplorerPage
        title={this.props.navigator ? null : title}
        onSpacer={true}
        onScroll={true}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </UIExplorerPage>
    )
  }

  _renderRow (rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowData)}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {rowData.title}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  _pressRow (rowData) {
    this.props.navigator.push({
      title: rowData.title,
      component: rowData.default ? rowData.default : rowData
    })
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6'
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1
  }
})

import React, {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
  RecyclerViewBackedScrollView
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

const THUMB_URLS = [
  require('../../styles/img/Thumbnails/like.png'),
  require('../../styles/img/Thumbnails/dislike.png'),
  require('../../styles/img/Thumbnails/call.png'),
  require('../../styles/img/Thumbnails/fist.png'),
  require('../../styles/img/Thumbnails/bandaged.png'),
  require('../../styles/img/Thumbnails/flowers.png'),
  require('../../styles/img/Thumbnails/heart.png'),
  require('../../styles/img/Thumbnails/liking.png'),
  require('../../styles/img/Thumbnails/party.png'),
  require('../../styles/img/Thumbnails/poke.png'),
  require('../../styles/img/Thumbnails/superlike.png'),
  require('../../styles/img/Thumbnails/victory.png')
]

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare'

const hashCode = function (str) {
  let hash = 15
  for (let i = str.length - 1; i >= 0; i--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
  }
  return hash
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

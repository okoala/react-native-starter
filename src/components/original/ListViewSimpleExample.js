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

export const title = 'ListViewSimpleExample'
export default class ListViewSimpleExample extends React.Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(this._getRows({}))
    }
  }

  componentWillMount () {
    this._pressData = {}
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
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
      </UIExplorerPage>
    )
  }

  _renderRow (rowData, sectionID, rowID) {
    const rowHash = Math.abs(hashCode(rowData))
    const imgSource = THUMB_URLS[rowHash % THUMB_URLS.length]
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View style={styles.row}>
          <Image style={styles.thumb} source={imgSource}/>
          <Text style={styles.text}>
            {rowData + ' _ ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  _getRows (pressData) {
    const dataBlob = []
    for (let i = 0; i < 100; i++) {
      let pressedText = pressData[i] ? ' (pressed)' : ''
      dataBlob.push('Row ' + i + pressedText)
    }
    return dataBlob
  }

  _pressRow (rowID) {
    this._pressData[rowID] = !this._pressData[rowID]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(
        this._getRows(this._pressData)
      )
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

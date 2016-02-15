import React, {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native'

import UIManager from 'NativeModules'
import UIExplorerPage from '../UIExplorerPage'


export const title = 'ListViewPagingExample - Floating headers & layout animations.'
export default class ListViewSimpleExample extends React.Component {
  constructor (props) {
    super(props)
    const getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID]
    }
    const getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID]
    }
    const ds = new ListView.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
  }
  render () {
    return (

    )
  }
}

const PAGE_SIZE = 4
const NUM_SECTIONS = 100
const NUM_ROWS_PER_SECTION = 10
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

class Thumb extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      thumbIndex: this._getThumbIdx(),
      dir: 'row'
    }
  }

  componentWillMount () {
    UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  render () {
    return (
      <TouchableOpacity
        onPress={this._onPressThumb}
        style={[styles.buttonContents, {flexDirection: this.state.dir}]}>
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]}/>
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]}/>
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]}/>
        {this.state.dir === 'column'
          ? <Text>
              Oooo, look at this new text! So awesome it may just be crazy.
              Let me keep typing here so it wraps at least one line.
            </Text>
          : <Text />
        }
      </TouchableOpacity>
    )
  }

  _getThumbIdx () {
    return Math.floor(Math.random() * THUMB_URLS.length)
  }

  _onPressThumb () {
    const config = layoutAnimationConfigs[this.state.thumbIndex % layoutAnimationConfigs.length]
    LayoutAnimation.configureNext(config)
    this.setState({
      thumbIndex: this._getThumbIdx(),
      dir: this.state.dir === 'row' ? 'column': 'row'
    })
  }
}

const styles = StyleSheet.create({
  listview: {
    backgroundColor: '#B0C4DE',
  },
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
  },
  rowText: {
    color: '#888888',
  },
  thumbText: {
    fontSize: 20,
    color: '#888888',
  },
  buttonContents: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 3,
    padding: 5,
    backgroundColor: '#EAEAEA',
    borderRadius: 3,
    paddingVertical: 10,
  },
  img: {
    width: 64,
    height: 64,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#5890ff',
  },
})

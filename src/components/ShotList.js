import React, {
  ActivityIndicatorIOS,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'
import * as actions from '../store/actions'

import ShotCell from './ShotCell'
import ShotDetail from './ShotDetail'
import Loading from './Loading'

class ShotList extends React.Component {
  static defaultProps = {
    filter: ""
  };

  constructor (props) {
    super(props)

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      filter: this.props.filter,
      queryNumber: 0,
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.dribbble.shots !== nextProps.dribbble.shots) {
      this._getDataSource(nextProps.dribbble.shots)
    }
  }

  componentWillMount () {
    this.props.getDribbbleShots({type: 1})
  }

  _getDataSource (shots) {
    return this.state.dataSource.cloneWithRows(shots)
  }

  _selectShot (shot) {
    this.props.navigator.push({
      component: ShotDetail,
      passProps: { shot },
      title: shot.title
    })
  }

  _renderFooter () {
    return (
      <View style={styles.scrollSpinner}>
        <Loading />
      </View>
    )
  }

  _renderRow (shot) {
    return (
      <ShotCell
        onSelect={() => this._selectShot(shot)}
        shot={shot}
      />
    )
  }

  render () {
    const content = this.state.dataSource.getRowCount() === 0 ?
      <Loading/> :
      <ListView
        ref="listview"
        dataSource={this.state.dataSource}
        renderFooter={this._renderFooter}
        renderRow={this._renderRow}
        onEndReached={this._onEndReached}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />

    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        {content}
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {...state}
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({...actions}, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center"
  },
  separator: {
    height: 1,
    backgroundColor: "#eeeeee"
  },
  scrollSpinner: {
    marginVertical: 20
  }
})

export default connect(stateToProps, dispatchToProps)(ShotList)

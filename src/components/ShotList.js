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
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id}),
      filter: this.props.filter,
      queryNumber: 0,
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.dribbble.shots !== nextProps.dribbble.shots) {
      this.setState({dataSource: this._getDataSource(nextProps.dribbble.shots)})
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

  _onEndReached () {

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
        {content}
      </View>
    )
  }
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

const stateToProps = (state) => ({...state})
const dispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

export default connect(stateToProps, dispatchToProps)(ShotList)

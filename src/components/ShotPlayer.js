var React = require("react-native");
var {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Component,
  ActivityIndicatorIOS,
  ListView,
  Dimensions,
  Modal
} = React;

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

import Icon from "react-native-vector-icons/FontAwesome"
import HTML from "react-native-htmlview"
import ParallaxView from "react-native-parallax-view"
import { authorAvatar } from '../util'

const screen = Dimensions.get('window')

import ShotDetail from "./ShotDetail"
import ShotCell from "./ShotCell"
import Loading from "./Loading"

class ShotPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false,
      isLoading: true,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentWillReceiveProps (nextProps) {
    const id = this.props.player.id
    const shot = nextProps.dribbble.shot[id]
    if (this.props.dribbble.shot[id] !== shot) {
      this.setState({dataSource: this._getDataSource(shot)})
    }
  }

  componentDidMount () {
    this.props.getDribbbleShot(this.props.player.shots_url)
  }

  _getDataSource (data) {
    return this.state.dataSource.cloneWithRows(data)
  }

  _openModal () {
    this.setState({
      isModalOpen: true
    })
  }

  _closeModal () {
    this.setState({
      isModalOpen: false
    })
  }

  _renderShots () {
    return (
      <ListView
        renderRow={this._renderRow.bind(this)}
        dataSource={this.state.dataSource}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />
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

  _selectShot (shot) {
    this.props.navigator.push({
      component: ShotDetail,
      passProps: {shot},
      title: shot.title
    })
  }

  render () {
    return (
      <ParallaxView
        windowHeight={260}
        backgroundSource={authorAvatar(this.props.player)}
        blur={"dark"}
        header={(
          <TouchableOpacity onPress={this._openModal}>
            <View style={styles.headerContent}>
              <View style={styles.innerHeaderContent}>
                <Image source={authorAvatar(this.props.player)}
                style={styles.playerAvatar} />
                <Text style={styles.playerUsername}>{this.props.player.username}</Text>
                <Text style={styles.playerName}>{this.props.player.name}</Text>
                <View style={styles.playerDetailsRow}>
                  <View style={styles.playerCounter}>
                    <Icon name="users" size={18} color="#fff"/>
                    <Text style={styles.playerCounterValue}> {this.props.player.followers_count} </Text>
                  </View>
                  <View style={styles.playerCounter}>
                    <Icon name="camera-retro" size={18} color="#fff"/>
                    <Text style={styles.playerCounterValue}> {this.props.player.shots_count} </Text>
                  </View>
                  <View style={styles.playerCounter}>
                    <Icon name="heart-o" size={18} color="#fff"/>
                    <Text style={styles.playerCounterValue}> {this.props.player.likes_count} </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      >
      <View style={styles.shotList}>
        {this.state.dataSource.length !== 0 ? this._renderShots() : <Loading />}
      </View>
        <Modal
          visible={this.state.isModalOpen}
          onDismiss={this._closeModal}>
          <Image source={authorAvatar(this.props.player)}
                 style={styles.playerImageModal}/>
        </Modal>
      </ParallaxView>
    )
  }
}

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    backgroundColor: "red"
  },
  listView: {
    flex: 1,
    backgroundColor: "coral"
  },
  spinner: {
    width: 50,
  },
  headerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  innerHeaderContent: {
    marginTop: 30,
    alignItems: "center"
  },
  playerInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row"
  },
  playerUsername: {
    color: "#fff",
    fontWeight: "300"
  },
  playerName: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "900",
    lineHeight: 18
  },
  //Player details list
  playerDetailsRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: screen.width / 2,
    marginTop: 20
  },
  playerCounter: {
    flex: 1,
    alignItems: "center"
  },
  playerCounterValue: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 14,
    marginTop: 5,
  },
  playerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10
  },
  //Modal
  playerImageModal: {
    height: screen.height / 3,
    resizeMode: "contain"
  },
  //playerContent
  playerContent: {
    padding: 20
  }
})

const stateToProps = (state) => ({...state})
const dispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

export default connect(stateToProps, dispatchToProps)(ShotPlayer)

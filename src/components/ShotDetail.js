import React, {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHightlight,
  ActivityIndicatorIOS,
  View,
  ListView,
  Component,
  Dimensions,
  Modal
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import HTMLView from 'react-native-htmlview'
import ParallaxView from 'react-native-parallax-view'
import Loading from './Loading'
import { shotImage } from '../util'

const screen = Dimensions.get('window')

class ShotDetail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false,
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount () {
    this.props.dribbble.getDribbbleComment(this.props.dribbble.shot.comments_url)
  }

  _openModal () {
    this.setState({ isModalOpen: true })
  }

  _closeModal () {
    this.setState({ isModalOpen: false })
  }

  _selectPlayer (player) {
    this.props.navigator.push({
      component: Player,
      passProps: { player },
      title: player.name
    })
  }

  _renderCommentsList () {
    return (
      <View style={styles.sectionSpacing}>
        <View style={styles.separator} />
        <Text style={styles.heading}>Comments</Text>
        <View style={styles.separator} />
        <ListView
          ref="commentsView"
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }

  _renderRow (comment) {
    return <CommentItem onSelect={() => this._selectPlayer(comment.user)} comment={comment} />
  }

  _renderLoading () {
    return <ActivityIndicatorIOS animating={this.state.isLoading} style={styles.spinner} />
  }

  render () {
    const player = this.props.dribbble.shot.user

    return (
      <ParallaxView
        backgroundSource={shotImage(this.props.dribbble.shot)}
        windowHeight={300}
        header={(
          <TouchableOpacity onPress={this._openModal}>
            <View style={styles.invisibleView}></View>
          </TouchableOpacity>
        )}>
        <View>
          <TouchableHighlight
            style={styles.invisibleTouch}
            onPress={this.selectPlayer.bind(this, player)}
            underlayColor={"#333"}
            activeOpacity={0.95}>
            <View style={styles.headerContent}>
              <Image
                source={authorAvatar(player)}
                style={styles.playerAvatar} />
              <Text style={styles.shotTitle}>{this.props.dribbble.shot.title}</Text>
              <Text style={styles.playerContent}>by <Text style={styles.player}>{player.name}</Text></Text>
            </View>
          </TouchableHighlight>
          <View style={styles.mainSection}>
            <View style={styles.shotDetailsRow}>
              <View style={styles.shotCounter}>
                <Icon name="heart-o" size={24} color="#333"/>
                <Text style={styles.shotCounterText}> {this.props.dribbble.shot.likes_count} </Text>
              </View>
              <View style={styles.shotCounter}>
                <Icon name="comments-o" size={24} color="#333"/>
                <Text style={styles.shotCounterText}> {this.props.dribbble.shot.comments_count} </Text>
              </View>
              <View style={styles.shotCounter}>
                <Icon name="eye" size={24} color="#333"/>
                <Text style={styles.shotCounterText}> {this.props.dribbble.shot.views_count} </Text>
              </View>
            </View>
            <View style={styles.separator} />
            <Text>
              <HTML value={this.props.dribbble.shot.description}
                    stylesheet={styles}/>
            </Text>
            <View>
              {this.state.dataSource.getRowCount() === 0 ?
                <Loading /> :
                this._renderCommentsList()}
            </View>
          </View>
        </View>

        <Modal
          visible={this.state.isModalOpen}
          onDismiss={this._closeModal}>
          <Image
            source={shotImage(this.props.dribbble.shot)}
            style={styles.customModalImage}
            resizeMode="contain"/>
        </Modal>
      </ParallaxView>
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
  spinner: {
    marginTop: 20,
    width: 50
  },
  a: {
    fontWeight: "300",
    color: "#ea4c89"
  },
  p: {
    marginBottom: 0,
    flexDirection: "row",
    marginTop: 0,
  },
  invisibleView: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right:0
  },
  customModalImage: {
    height: screen.height / 2
  },
  headerContent: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 40,
    alignItems: "center",
    width: screen.width,
    backgroundColor: "#fff"
  },
  shotTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ea4c89",
    lineHeight: 18
  },
  playerContent: {
    fontSize: 12
  },
  player: {
    fontWeight: "900",
    lineHeight: 18
  },
  playerAvatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 60,
    left: screen.width / 2 - 40,
    borderWidth: 2,
    borderColor: "#fff"
  },
  rightPane: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  shotDetailsRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row"
  },
  shotCounter: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  shotCounterText: {
    color: "#333"
  },
  mainSection: {
    flex: 1,
    alignItems: "stretch",
    padding: 10,
    backgroundColor: "white"
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 1 / PixelRatio.get(),
    marginVertical: 10,
  },
  sectionSpacing: {
    marginTop: 20
  },
  heading: {
    fontWeight: "700",
    fontSize: 16
  }
})

export default connect(stateToProps, dispatchToProps)(ShotDetail)

import React, {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native'

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg=='
const fullImage = {uri: 'http://facebook.github.io/react/img/logo_og.png'}
const smallImage = {uri: 'http://facebook.github.io/react/img/logo_small_2x.png'}

export const title = '<Image>'
export const description = 'Base component for displaying different types of images.'
export const examples = [
  {
    title: '网络图片',
    description: 'source={{uri: \'http://***\'}}',
    render () {
      return (
        <Image
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
          style={styles.base}
        />
      )
    }
  },
  {
    title: '本地图片',
    description: 'source={{uri: require(\'***\')}}',
    render () {
      return (
        <View style={styles.horizontal}>
          <Image source={require('../../styles/img/uie_thumb_normal.png')} style={styles.icon}/>
          <Image source={require('../../styles/img/uie_thumb_selected.png')} style={styles.icon}/>
          <Image source={require('../../styles/img/uie_comment_normal.png')} style={styles.icon}/>
          <Image source={require('../../styles/img/uie_comment_highlighted.png')} style={styles.icon}/>
        </View>
      )
    }
  },
  {
    title: '图片Loading事件',
    description: 'onLoadStart、onLoad、onLoadEnd',
    render () {
      return (
        <NetworkImageCallbackExample source={{uri: 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1'}}/>
      )
    }
  },
  {
    title: '错误处理',
    platform: 'ios',
    description: 'onError',
    render () {
      return (
        <NetworkImageExample source={{uri: 'http://TYPO_ERROR_facebook.github.io/react/img/logo_og.png'}}/>
      )
    }
  },
  {
    title: '下载进度',
    platform: 'ios',
    description: 'onProgress',
    render () {
      return (
        <NetworkImageExample source={{uri: 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1'}}/>
      )
    }
  },
  {
    title: '默认资源',
    platform: 'ios',
    description: 'defaultSource={require(\'./bunny.png\')}',
    render () {
      return (
        <Image
          style={styles.base}
          defaultSource={require('../../styles/img/bunny.png')}
          source={{uri: 'http://facebook.github.io/origami/public/images/birds.jpg'}}
        />
      )
    }
  },
  {
    title: '边框',
    description: 'style={borderColor, borderWidth, borderRadius}',
    render () {
      return (
        <View style={styles.horizontal}>
          <Image
            source={smallImage}
            style={[
              styles.base,
              styles.background,
              {borderWidth: 3, borderColor: '#f099f0', borderRadius: 5}
            ]}
          />
        </View>
      )
    }
  },
  {
    title: '背景颜色',
    description: 'style={backgroundColor}',
    render () {
      return (
        <View style={styles.horizontal}>
          <Image source={smallImage} style={styles.base} />
          <Image
            style={[
              styles.base,
              styles.leftMargin,
              {backgroundColor: 'rgba(0, 0, 100, 0.25)'}
            ]}
            source={smallImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, {backgroundColor: 'red'}]}
            source={smallImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, {backgroundColor: 'black'}]}
            source={smallImage}
          />
        </View>
      )
    }
  },
  {
    title: '透明度',
    description: 'style={opacity}',
    render () {
      return (
        <View style={styles.horizontal}>
          <Image
            style={[styles.base, {opacity: 1}]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, {opacity: 0.8}]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, {opacity: 0.6}]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, {opacity: 0.4}]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, {opacity: 0.2}]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, {opacity: 0}]}
            source={fullImage}
          />
        </View>
      )
    }
  },
  {
    title: '嵌套',
    description: '<Image><Text>React</Text></Image>',
    render () {
      return (
        <Image
          style={{width: 60, height: 60, backgroundColor: 'transparent'}}
          source={fullImage}>
          <Text style={styles.nestedText}>
            React
          </Text>
        </Image>
      )
    }
  },
  {
    title: '着色',
    description: '通过设置 `tintColor` 将所有非透明像素都被转化成自指定颜色.',
    render () {
      return (
        <View>
          <View style={styles.horizontal}>
            <Image
              source={require('../../styles/img/uie_thumb_normal.png')}
              style={[styles.icon, {borderRadius: 5, tintColor: '#5ac8fa'}]}
            />
            <Image
              source={require('../../styles/img/uie_thumb_normal.png')}
              style={[styles.icon, styles.leftMargin, {borderRadius: 5, tintColor: '#4cd964'}]}
            />
            <Image
              source={require('../../styles/img/uie_thumb_normal.png')}
              style={[styles.icon, styles.leftMargin, {borderRadius: 5, tintColor: '#ff2d55'}]}
            />
            <Image
              source={require('../../styles/img/uie_thumb_normal.png')}
              style={[styles.icon, styles.leftMargin, {borderRadius: 5, tintColor: '#8e8e93'}]}
            />
          </View>
          <Text style={styles.sectionText}>
            It also works with downloaded images:
          </Text>
          <View style={styles.horizontal}>
            <Image
              source={smallImage}
              style={[styles.base, {borderRadius: 5, tintColor: '#5ac8fa'}]}
            />
            <Image
              source={smallImage}
              style={[styles.base, styles.leftMargin, {borderRadius: 5, tintColor: '#4cd964'}]}
            />
            <Image
              source={smallImage}
              style={[styles.base, styles.leftMargin, {borderRadius: 5, tintColor: '#ff2d55'}]}
            />
            <Image
              source={smallImage}
              style={[styles.base, styles.leftMargin, {borderRadius: 5, tintColor: '#8e8e93'}]}
            />
          </View>
        </View>
      )
    }
  },
  {
    title: 'Resize Mode',
    description: '通过设置 `resizeMode` 控制图片在frame中的显示方式.\n' +
                 'resizeMode={Image.resizeMode.contain}\n' +
                 'resizeMode={Image.resizeMode.cover}\n' +
                 'resizeMode={Image.resizeMode.stretch}',
    render () {
      return (
        <View style={styles.horizontal}>
          <View>
            <Text style={[styles.resizeModeText]}>
              Contain
            </Text>
            <Image
              style={styles.resizeMode}
              resizeMode={Image.resizeMode.contain}
              source={fullImage}
            />
          </View>
          <View style={styles.leftMargin}>
            <Text style={[styles.resizeModeText]}>
              Cover
            </Text>
            <Image
              style={styles.resizeMode}
              resizeMode={Image.resizeMode.cover}
              source={fullImage}
            />
          </View>
          <View style={styles.leftMargin}>
            <Text style={[styles.resizeModeText]}>
              Stretch
            </Text>
            <Image
              style={styles.resizeMode}
              resizeMode={Image.resizeMode.stretch}
              source={fullImage}
            />
          </View>
        </View>
      )
    }
  },
  {
    title: 'GIF动画',
    render () {
      return (
        <Image
          style={styles.gif}
          source={{uri: 'http://38.media.tumblr.com/9e9bd08c6e2d10561dd1fb4197df4c4e/tumblr_mfqekpMktw1rn90umo1_500.gif'}}
        />
      )
    },
    platform: 'ios'
  },
  {
    title: 'Base64图片',
    render () {
      return (
        <Image
          style={styles.base64}
          source={{uri: base64Icon, scale: 3}}
        />
      )
    },
    platform: 'ios'
  },
  {
    title: '图片大小',
    description: '获取图片的原始大小',
    render () {
      return <ImageSizeExample source={fullImage} />
    },
    platform: 'ios'
  },
  {
    title: 'Cap Insets',
    description:
      'When the image is resized, the corners of the size specified ' +
      'by capInsets will stay a fixed size, but the center content and ' +
      'borders of the image will be stretched. This is useful for creating ' +
      'resizable rounded buttons, shadows, and other resizable assets.',
    render () {
      return <ImageCapInsetsExample />
    },
    platform: 'ios'
  }
]

class NetworkImageCallbackExample extends React.Component {
  constructor () {
    super()
    this.state = {
      events: [],
      mountTime: new Date()
    }
  }

  componentWillMount () {
    this.setState({ mountTime: new Date() })
  }

  render () {
    const { mountTime } = this.state

    return (
      <View>
        <Image
          source={this.props.source}
          style={[styles.base, {overflow: 'visible'}]}
          onLoadStart={() => this._loadEventFired(`✔ onLoadStart (+${new Date() - mountTime}ms)`)}
          onLoad={() => this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms)`)}
          onLoadEnd={() => this._loadEventFired(`✔ onLoadEnd (+${new Date() - mountTime}ms)`)}
        />

        <Text style={{marginTop: 20}}>
          {this.state.events.join('\n')}
        </Text>
      </View>
    )
  }

  _loadEventFired (e) {
    this.setState(state => {
      state.events = [...state.events, e]
      return state
    })
  }
}

class NetworkImageExample extends React.Component {
  constructor () {
    super()
    this.state = {
      error: false,
      loading: false,
      progress: 0
    }
  }

  render () {
    const loader = this.state.loading
      ? <View style={styles.progress}>
          <Text>{this.state.progress}%</Text>
          <ActivityIndicatorIOS style={{marginLeft: 5}} />
        </View>
      : null

    return this.state.error
      ? <Text>{this.state.error}</Text>
      : <Image
          source={this.props.source}
          style={[styles.base, {overflow: 'visible'}]}
          onLoadStart={(e) => this.setState({loading: true})}
          onError={(e) => this.setState({error: e.nativeEvent.error, loading: false})}
          onProgress={(e) => this.setState({progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total)})}
          onLoad={() => this.setState({loading: false, error: false})}>
          {loader}
        </Image>
  }
}

class ImageCapInsetsExample extends React.Component {
  render () {
    return (
      <View>
        <View style={styles.capInsetBackground}>
          <Text>
            capInsets: none
          </Text>
          <Image
            source={require('image!story-background')}
            style={styles.storyBackground}
            resizeMode={Image.resizeMode.stretch}
            capInsets={{left: 0, right: 0, bottom: 0, top: 0}}
          />
        </View>
        <View style={[styles.capInsetBackground, {paddingTop: 10}]}>
          <Text>
            capInsets: 15
          </Text>
          <Image
            source={require('image!story-background')}
            style={styles.storyBackground}
            resizeMode={Image.resizeMode.stretch}
            capInsets={{left: 15, right: 15, bottom: 15, top: 15}}
          />
        </View>
      </View>
    )
  }
}

class ImageSizeExample extends React.Component {
  constructor () {
    super()
    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount () {
    Image.getSize(this.props.source.uri, (width, height) => {
      this.setState({width, height})
    })
  }

  render () {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 60, height: 60, backgroundColor: 'transparent', marginRight: 10}}
          source={this.props.source}
        />
        <Text>
          Actual dimensions:{'\n'}
          Width: {this.state.width}, Height: {this.state.height}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  base: {
    width: 38,
    height: 38
  },
  progress: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: 100
  },
  leftMargin: {
    marginLeft: 10
  },
  background: {
    backgroundColor: '#222222'
  },
  sectionText: {
    marginVertical: 6
  },
  nestedText: {
    marginLeft: 12,
    marginTop: 20,
    backgroundColor: 'transparent',
    color: 'white'
  },
  resizeMode: {
    width: 90,
    height: 60,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  resizeModeText: {
    fontSize: 11,
    marginBottom: 3
  },
  icon: {
    width: 15,
    height: 15
  },
  horizontal: {
    flexDirection: 'row'
  },
  gif: {
    flex: 1,
    height: 200
  },
  base64: {
    flex: 1,
    height: 50,
    resizeMode: 'contain'
  },
  capInsetBackground: {
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storyBackground: {
    width: 250,
    height: 150,
    borderWidth: 1
  }
})

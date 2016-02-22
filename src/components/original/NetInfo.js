import React, {
  NetInfo,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native'

export const title = 'NetInfo'
export const description = 'Monitor network status'
export const examples = [
  {
    title: '当前状态',
    description: 'NetInfo.isConnected.addEventListener',
    render () { return <IsConnected/> }
  },
  {
    title: '当前环境',
    description: 'NetInfo.addEventListener\n' +
      'none - 设备处于离线状态\n' +
      'wifi - 设备处于联网状态且通过wifi链接，或者是一个iOS的模拟器\n' +
      'cell - 设备是通过Edge、3G、WiMax或是LTE网络联网的\n' +
      'unknown - 发生错误，网络状况不可知',
    render () { return <ConnectionInfoCurrent/> }
  },
  {
    title: '历史记录',
    description: 'Observed updates to connectionInfo',
    render () { return <ConnectionInfoSubscription/> }
  },
  {
    title: '计费连接',
    description: '断当前活动的连接是否计费',
    render () { return <IsConnectionExpensive/> },
    platform: 'android'
  }
]

class IsConnected extends React.Component {
  constructor () {
    super()
    this.state = {
      isConnected: null
    }
  }

  componentDidMount () {
    NetInfo.isConnected.addEventListener(
      'change',
      this._handleConnectivityChange
    )
    NetInfo.isConnected.fetch().done(
      (isConnected) => this.setState({isConnected})
    )
  }

  componentWillMount () {
    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectivityChange
    )
  }

  render () {
    return (
      <View>
        <Text>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
      </View>
    )
  }

  _handleConnectivityChange (isConnected) {
    this.setState({isConnected})
  }
}

class ConnectionInfoCurrent extends React.Component {
  constructor () {
    super()
    this.state = {
      connectionInfo: null
    }
  }

  componentDidMount () {
    NetInfo.addEventListener(
      'change',
      this._handleConnectivityChange
    )
    NetInfo.fetch().done(
      (connectionInfo) => this.setState({connectionInfo})
    )
  }

  componentWillMount () {
    NetInfo.removeEventListener(
      'change',
      this._handleConnectionInfoChange
    )
  }

  render () {
    return (
      <View>
        <Text>{this.state.connectionInfo}</Text>
      </View>
    )
  }

  _handleConnectionInfoChange (connectionInfo) {
    this.setState({connectionInfo})
  }
}

class ConnectionInfoSubscription extends React.Component {
  constructor () {
    super()
    this.state = {
      connectionInfoHistory: []
    }
  }

  componentDidMount () {
    NetInfo.addEventListener(
      'change',
      this._handleConnectivityChange
    )
  }

  componentWillMount () {
    NetInfo.removeEventListener(
      'change',
      this._handleConnectionInfoChange
    )
  }

  render () {
    return (
      <View>
        <Text>{JSON.stringify(this.state.connectionInfoHistory)}</Text>
      </View>
    )
  }

  _handleConnectionInfoChange (connectionInfo) {
    const connectionInfoHistory = this.state.connectionInfoHistory.slice()
    connectionInfoHistory.push(connectionInfo)
    this.setState({connectionInfoHistory})
  }
}

class IsConnectionExpensive extends React.Component {
  constructor () {
    super()
    this.state = {
      isConnectionExpensive: null
    }
  }

  render () {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this._checkIfExpensive}>
          <View>
            <Text>Click to see if connection is expensive:
              {this.state.isConnectionExpensive === true
                ? 'Expensive'
                : this.state.isConnectionExpensive === false
                  ? 'Not expensive'
                  : 'Unknown'
              }
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  _checkIfExpensive () {
    NetInfo.isConnectionExpensive().then(
       isConnectionExpensive => { this.setState({isConnectionExpensive}) }
   )
  }
}

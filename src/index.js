/**
 * RNStarter
 *
 */
import React, { AppRegistry } from 'react-native'
import { Provider } from 'react-redux/native'
import App from './views/App'
import store from './store'

const VERSION = '0.1.0'

/**
 * 触发一些默认的Actions
 *
 */
import { setPlatform, setVersion } from './store/actions'

export default function native (platform) {
  const RNStarter = React.createClass({
    render() {
      store.dispatch(setPlatform(platform))
      store.dispatch(setVersion(VERSION))
      // store.dispatch(setStore(store))

      return (
        <Provider store={store}>
          {() => <App store={store}/>}
        </Provider>
      )
    }
  })

  /**
   *
   */
  AppRegistry.registerComponent('RNStarter', () => RNStarter)
}

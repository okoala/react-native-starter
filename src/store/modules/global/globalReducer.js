import { createReducer } from '../../../util'
import InitialState from './globalInitState'
import types from '../../types'

const initialState = new InitialState

export default createReducer(initialState, {
  [types.SET_SESSION_TOKEN]: (state, data) => {
    return state.set('sessionToken', data)
  },

  [types.SET_STORE]: (state, data) => {
    return state.set('store', data)
  },

  [types.GET_STATE]: (state, data) => {
    let _state = state.store.getState()

    if (data) {
      let newState = {}
      newState['cnode'] = _state.cnode.toJS()
      newState['device'] = _state.device.toJS()
      newState['dribbble'] = _state.dribbble.toJS()
      newState['global'] = _state.global.set('store',null).toJS()

      return state.set('showState', data)
        .set('currentState',newState)
    } else {
      return state.set('showState', data)
    }
  },

  [types.SET_STATE]: (state, data) => {
    var global = JSON.parse(data).global
    var next = state.set('currentUser', global.currentUser)
          .set('showState', false)
          .set('currentState', null)
    return next
  }
})

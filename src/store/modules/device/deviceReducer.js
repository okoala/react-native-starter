import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './deviceInitState'

const initialState = new InitialState

export default createReducer(initialState, {
  [types.SET_PLATFORM]: (state, platform) => {
    return state.set('platform', platform)
  },

  [types.SET_VERSION]: (state, version) => {
    return state.set('version', version)
  }
})

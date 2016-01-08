import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './dribbbleInitialState'

const initialState = new InitialState

export default createReducer(initialState, {
  [types.SET_PLATFORM]: (state, list) => {
    return state.set('hotList', list)
  }
})

import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './dribbbleInitialState'

const initialState = new InitialState

export default createReducer(initialState, {
  [`${types.GET_DRIBBBLE_ALL_SHOTS}_FULFILLED`]: (state, data) => {
    return state.set('shots', data)
  },

  [`${types.GET_DRIBBBLE_SHOT_COMMENT}_FULFILLED`]: (state, data) => {
    const id = data.id
    data.data.isLoaded = false
    return state.setIn(['shotComments', id], data.data)
  },

  [`${types.GET_DRIBBBLE_SHOT}_FULFILLED`]: (state, data) => {
    const id = data.id
    return state.setIn(['shot', id], data.data)
  }
})

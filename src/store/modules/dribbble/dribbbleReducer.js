import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './dribbbleInitState'

const initialState = new InitialState

export default createReducer(initialState, {
  [`${types.GET_DRIBBBLE_ALL_SHOTS}_SUCCESS`]: (state, data) => {
    return state.set('shots', data)
  },

  [`${types.GET_DRIBBBLE_SHOT_COMMENT}_SUCCESS`]: (state, data, params) => {
    const id = params.id
    return state.setIn(['shotComments', id], data)
  },

  [`${types.GET_DRIBBBLE_SHOT}_SUCCESS`]: (state, data, params) => {
    const id = params.id
    return state.setIn(['shot', id], data)
  }
})

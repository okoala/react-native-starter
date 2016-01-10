import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './dribbbleInitialState'

const initialState = new InitialState

export default createReducer(initialState, {
  [`${types.GET_DRIBBBLE_ALL_SHOTS}_FULFILLED`]: (state, data) => {
    return state.set('shotList', data)
  },

  [`${types.GET_DRIBBBLE_SHOT_DETAIL}_FULFILLED`]: (state, data) => {
    const id = data.id
    data.data.isLoaded = false
    return state.setIn(['shotDetail', id], data.data)
  }
})

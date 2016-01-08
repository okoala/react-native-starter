import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './dribbbleInitialState'

const initialState = new InitialState

export default createReducer(initialState, {
  [types.GET_DRIBBBLE_ALL_SHOTS]: (state, list) => {
    return state.set('shotList', list)
  },
  [types.GET_DRIBBBLE_SHOT_DETAIL]: (state, data) => {
    const id = data.id
    data.data.isLoaded = false

    return state.setIn(['shotDetail', id], data.data)
  }
})

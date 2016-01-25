import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './cnodeInitState'

const initialState = new InitialState

export default createReducer(initialState, {
  [types.GET_CNODE_ALL_TOPICS]: (state, topics) => {
    return state.set('allTopics', topics)
  }
})

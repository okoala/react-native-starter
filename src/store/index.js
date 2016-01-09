import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

/**
 * 默认的reducer
 *
 */
import cnode from './modules/cnode/cnodeReducer'
import dribbble from './modules/dribbble/dribbbleReducer'
import device from './modules/device/deviceReducer'

/**
 * States
 *
 */
import cnodeInitialState from './modules/cnode/cnodeInitialState'
import dribbbleInitialState from './modules/dribbble/dribbbleInitialState'
import deviceInitialState from './modules/device/deviceInitialState'

/**
 * 初始化states
 *
 * @return {[type]} [description]
 */
const initialState = {
  cnode: new cnodeInitialState,
  dribbble: new dribbbleInitialState,
  device: (new deviceInitialState).set('isMobile',true)
}

/**
 * 合并Reducer
 *
 */
const rootReducer = combineReducers({
  cnode,
  dribbble,
  device
})

/**
 * 创建store中间件
 *
 */
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
)(createStore)

const store = createStoreWithMiddleware(rootReducer, initialState)

export default store

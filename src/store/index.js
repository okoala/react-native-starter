import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

/**
 * 默认的reducer
 *
 */
// import authReducer from './auth/authReducer'
import deviceReducer from './modules/device/deviceReducer'
// import globalReducer from './global/globalReducer'
// import profileReducer from './profile/profileReducer'

/**
 * States
 *
 */
// import authInitialState from './store/auth/authInitialState'
import deviceInitialState from './modules/device/deviceInitialState'
// import globalInitialState from './store/global/globalInitialState'
// import profileInitialState from './store/profile/profileInitialState'

/**
 * 初始化states
 *
 * @return {[type]} [description]
 */
const initialState = {
  // auth: new authInitialState,
  device: (new deviceInitialState).set('isMobile',true)
  // global: (new globalInitialState),
  // profile: new profileInitialState
}

/**
 * 合并Reducer
 *
 */
const rootReducer = combineReducers({
  // authReducer,
  deviceReducer
  // globalReducer,
  // profileReducer
})

/**
 * 创建store中间件
 *
 */
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const store = createStoreWithMiddleware(rootReducer, initialState)

export default store

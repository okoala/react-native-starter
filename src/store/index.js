import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './middlewares/promiseMiddleware'
import rootReducer from './reducers'
import initState from './initState'

/**
 * 创建store中间件
 *
 */
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']})
)(createStore)

const store = createStoreWithMiddleware(rootReducer, initState)

export default store

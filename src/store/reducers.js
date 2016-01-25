import { combineReducers } from 'redux'
/**
 * 默认的reducer
 *
 */
import cnode from './modules/cnode/cnodeReducer'
import dribbble from './modules/dribbble/dribbbleReducer'
import device from './modules/device/deviceReducer'
import global from './modules/global/globalReducer'

/**
 * 合并Reducer
 *
 */
const rootReducer = combineReducers({
  cnode,
  dribbble,
  device,
  global
})

export default rootReducer

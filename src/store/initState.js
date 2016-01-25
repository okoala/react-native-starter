/**
 * States
 *
 */
import cnodeInitState from './modules/cnode/cnodeInitState'
import dribbbleInitState from './modules/dribbble/dribbbleInitState'
import deviceInitState from './modules/device/deviceInitState'
import globalInitState from './modules/global/globalInitState'

/**
 * 初始化states
 *
 * @return {[type]} [description]
 */
const initState = {
  cnode: new cnodeInitState,
  dribbble: new dribbbleInitState,
  device: (new deviceInitState).set('isMobile',true),
  global: new globalInitState
}

export default initState

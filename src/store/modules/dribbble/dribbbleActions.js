import types from '../../types'
import api from '../../../api'

export function getAllList () {
  return api.getDribbbleShots().then(res => {
    return {
      type: types.GET_CNODE_ALL_TOPICS,
      payload: res.data
    }
  })
}

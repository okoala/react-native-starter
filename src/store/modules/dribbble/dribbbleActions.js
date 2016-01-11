import types from '../../types'
import api from '../../../api'

export function getDribbbleShots (params) {
  return {
    type: types.GET_DRIBBBLE_ALL_SHOTS,
    payload: {
      promise: api.getDribbbleShots.get(params)
    }
  }
}

export function getDribbbleComment (url) {
  return {
    type: types.GET_DRIBBBLE_SHOT_DETAIL,
    payload: {
      promise: api.getDribbbleResources.get(url)
    }
  }
}

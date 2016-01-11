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

export function getDribbbleComment (id, url) {
  return {
    type: types.GET_DRIBBBLE_SHOT_COMMENT,
    payload: {
      id,
      promise: api.getDribbbleResources(url)
    }
  }
}

export function getDribbbleShot (id, url) {
  return {
    type: types.GET_DRIBBBLE_SHOT,
    payload: {
      id,
      promise: api.getDribbbleResources(url)
    }
  }
}

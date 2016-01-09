import types from '../../types'
import api from '../../../api'

export function getDribbbleShots () {
  return {
    type: types.GET_DRIBBBLE_ALL_SHOTS,
    payload: {
      promise: api.getDribbbleShots.get()
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

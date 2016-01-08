import types from '../../types'
import api from '../../../api'

export function getDribbbleShots () {
  return api.getDribbbleShots().then(res => {
    return {
      type: types.GET_DRIBBBLE_ALL_SHOTS,
      payload: res.data
    }
  }).done()
}

export function getDribbbleComment (url) {
  return api.getDribbbleResources(url).then(res => {
    return {
      type: types.GET_DRIBBBLE_SHOT_DETAIL,
      payload: res.data
    }
  }).done()
}

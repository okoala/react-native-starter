import types from '../../types'

export function setPlatform (platform) {
  return {
    type: types.SET_PLATFORM,
    payload: platform
  }
}

export function setVersion (version) {
  return {
    type: types.SET_VERSION,
    payload: version
  }
}

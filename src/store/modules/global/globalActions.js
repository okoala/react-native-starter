import types from '../../types'

export function setSessionToken(sessionToken) {
  return {
    type: types.SET_SESSION_TOKEN,
    payload: sessionToken
  };
}

export function setStore(store) {
  return {
    type: types.SET_STORE,
    payload: store
  };
}

export function setState(newState) {
  return {
    type: types.SET_STATE,
    payload: newState
  };
}

export function getState(toggle) {
  return {
    type: types.GET_STATE,
    payload: toggle
  };
}

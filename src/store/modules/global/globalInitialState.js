import { Record } from 'immutable'

const InitialState = Record({
  sessionToken: null,
  currentUser: null,
  showState: false,
  currentState: null,
  store: null
})

export default InitialState

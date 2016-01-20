import { Record } from 'immutable'

const InitialState = Record({
  shot: new Record({}),
  shots: new Record({}),
  shotComments: new Record({}),
  shotDetail: new Record({})
})

export default InitialState

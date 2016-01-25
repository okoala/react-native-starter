import { Record, OrderedMap, Map } from 'immutable'

const InitialState = Record({
  shot: new Record({}),
  shots: new Record({}),
  shotComments: Map(),
  shotDetail: new Record({})
})

export default InitialState

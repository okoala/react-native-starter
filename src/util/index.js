
export * from './image'
export * from './lang'
export * from './system'

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]
    return reducer ? reducer(state, action.payload, action.params) : state
  }
}

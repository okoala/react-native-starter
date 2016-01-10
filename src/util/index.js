
export * from './image'

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]
    console.log(action)
    return reducer ? reducer(state, action.payload) : state
  }
}

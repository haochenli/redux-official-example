const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log('state is in filter', state)
  console.log('action is in filter', action)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter

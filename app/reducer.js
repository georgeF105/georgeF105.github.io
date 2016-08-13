import { fromJS } from 'immutable'

const INITAL_STATE = fromJS({
  projects: [],
  fetchingProjects: false
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PROJECTS':
      // console.log('REQUEST_PROJECTS')
      return state.setIn(['fetchingProjects'], true)
    case 'RECEIVE_PROJECTS':
      // console.log('RECEIVE_PROJECTS', action.list)
      return state.setIn(['projects'], fromJS(action.list)).set('fetchingProjects', false)
    case 'ERROR':
      console.log('ERROR', action.list)
      return state
    default:
      console.log('action.type not known', action.type)
      return state
  }
}

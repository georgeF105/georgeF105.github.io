import { fromJS } from 'immutable'

const INITAL_STATE = fromJS({
  projects: [],
  fetchingProjects: false
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PROJECTS':
      console.log('REQUEST_PROJECTS')
      return state
    case 'RECEIVE_PROJECTS':
      console.log('RECEIVE_PROJECTS', action.list)
      return state.set('projects', fromJS(action.list))
    case 'ERROR':
      console.log('ERROR', action.list)
      return state
    default:
      console.log('action.type not known', action.type)
      return state
  }
}

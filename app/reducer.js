import { fromJS } from 'immutable'

const INITAL_STATE = fromJS({
  projects: [
    {name: 'test project 1'},
    {name: 'test project 2'}
  ]
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PROJECTS':
      console.log('REQUEST_PROJECTS')
      return state
    case 'RECEIVE_PROJECTS':
      console.log('RECEIVE_PROJECTS', action.list)
      return state
    case 'ERROR':
      console.log('ERROR', action.list)
      return state
    default:
      console.log('action.type not known', action.type)
      return state
  }
}

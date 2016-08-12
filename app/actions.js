
export function requestProjects () {
  return {
    type: 'REQUEST_PROJECTS'
  }
}

export function reciveProjects (projectsObj) {
  return {
    type: 'RECEIVE_PROJECTS',
    list: projectsObj,
    receivedAt: Date.now()
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}

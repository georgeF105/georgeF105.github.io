import Firebase from 'firebase'

const firebase = Firebase.initializeApp({
  apiKey: "AIzaSyDQDoX9xq72czKS5Dj0lV1aOzjyGB6D7eU",
  authDomain: "homepage-b1191.firebaseapp.com",
  databaseURL: "https://homepage-b1191.firebaseio.com",
  storageBucket: "homepage-b1191.appspot.com",
})

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

export function fetchProjects () {
  return (dispatch) => {
    console.log('HEERRE')
    dispatch(requestProjects())
    firebase.database().ref('projects')
      .on('value', (projects) => {dispatch(reciveProjects(projects.val()))})
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}

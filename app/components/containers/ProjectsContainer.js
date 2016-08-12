import { connect } from 'react-redux'

import Projects from '../Projects'

const mapStateToProps = (state) => {
  return {
    projects: state.get('projects').toJS()
  }
}

const ProjectsContainer = connect(mapStateToProps)(Projects)

export default ProjectsContainer

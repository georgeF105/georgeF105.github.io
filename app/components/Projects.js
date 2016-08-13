import React from 'react'

import ProjectCard from './ProjectCard'

class Projects extends React.Component {
  componentDidMount () {
    console.log('fetching projects')
    this.props.fetchProjects()
  }

  render () {
    const projects = this.props.projects
    const isFetching = this.props.fetchingProjects
    return (
      <div className='container content projects'>
        <h3>Projects</h3>
        {isFetching
          ? <h4>Loading... from firebase</h4>
          : projects.length
          ? projects.map((project, key) => <ProjectCard key={key} project={project} />)
          : <h4>No Projects Found</h4>
        }
      </div>
    )
  }
}

export default Projects

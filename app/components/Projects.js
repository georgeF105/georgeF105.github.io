import React from 'react'

import ProjectCard from './ProjectCard'

export default (props) => {
  console.log('props', props)
  const projects = props.projects
  console.log('projects', projects)
  return (
    <div className='container content projects'>
      <h3>Projects</h3>
      {projects
        ? projects.map((project, key) => <ProjectCard key={key} project={project} />)
        : <h4>No Projects Found</h4>
      }
    </div>
  )
}

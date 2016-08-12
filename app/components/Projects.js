import React from 'react'

export default (props) => {
  console.log('props', props)
  const projects = props.projects
  console.log('projects', projects)
  return (
    <div className='container content projects'>
      <h3>Projects</h3>
      {projects
        ? projects.map((project, key) => <h4 key={key}>Project Name: {project.name}</h4>)
        : <h4>No Projects Found</h4>
      }
    </div>
  )
}

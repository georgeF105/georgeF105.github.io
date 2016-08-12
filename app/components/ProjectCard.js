import React from 'react'

export default (props) => {
  const project = props.project
  return (
    <div className='project-card'>
      <h3>Project {project.name}</h3>
      <p>{project.description}</p>
    </div>
  )
}

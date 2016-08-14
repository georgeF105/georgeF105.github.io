import React from 'react'

export default (props) => {
  const project = props.project
  return (
    <div className='project-card card'>
      <h3>Project {project.name}</h3>
      <div className='card-links'>
        {project.url ? <a href={project.url} className='fa fa-desktop' /> : null}
        {project.github_url ? <a href={project.github_url} className='fa fa-github' /> : null}
      </div>
      <p>{project.description}</p>
    </div>
  )
}

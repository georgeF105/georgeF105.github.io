import React from 'react'

export default (props) => {
  return (
    <div className='container contacts'>
      <a href='malto:georgefrancis105@gmail.com' className='contact-card card'>
        <h4>Email</h4>
        <p>georgefrancis105@gmail.com</p>
      </a>
      <div className='contact-card card'>
        <h4>Phone</h4>
        <p>027 635 2933</p>
      </div>
      <a href='https://github.com/georgeF105' className='contact-card card'>
        <h4>GitHub</h4>
        <p>georgeF105</p>
      </a>
    </div>
  )
}

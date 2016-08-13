import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <h1 className='title'>George Francis</h1>
        </div>
        <div className='header-links'>
          <Link to='/about' activeClassName='active-link'>About</Link>
          <Link to='/projects' activeClassName='active-link'>Projects</Link>
          <Link to='/contact' activeClassName='active-link'>Contact</Link>
        </div>
      </div>
      <hr />
    </div>
  )
}

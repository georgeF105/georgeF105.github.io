import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className='header'>
      <div className='container'>
        <h1 className='title'>George Francis</h1>
        <div className='header-links'>
          <Link to='/projects' activeClassName='active-link'>Projects</Link>
          <Link to='/about' activeClassName='active-link'>About</Link>
          <Link to='/contact' activeClassName='active-link'>Contact</Link>
        </div>
      </div>
      <hr />
    </div>
  )
}

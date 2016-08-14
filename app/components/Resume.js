import React from 'react'

export default (props) => {
  return (
    <div className='container resume'>
      <object className='resume-pdf' data='/CVGeorgeFrancis.doc.pdf'>
      <p>This browser does not support PDFs. Please download to view resume<a href='/CVGeorgeFrancis.doc.pdf'>Download PDF</a></p>
      </object>
    </div>
  )
}

import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className='first' style={{width:"550px"}}>
    <a className="navbar-brand" href="#">
    Start Bootstrap</a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <button type="button" className="btn btn-primary">Signup</button>
      </ul>
      
    </div> 
  </div>
</nav>

  )
}

export default Navbar
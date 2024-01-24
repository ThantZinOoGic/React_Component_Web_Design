import React from 'react'

export default function NavSection() {
  return (
    <div className='container sticky-top'>
      <div className='row my-2'>
        <nav className="navbar navbar-expand-lg" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand fs-3 fw-bolder" href="#">Lanuch</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href='#feature'>Feature</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                <div className="d-flex" role="search">
                  <a href='#' className='btn rounded-pill btn-outline-secondary'>Sign In</a>
                  <a href='#' className='btn rounded-pill btn-primary mx-3'>Register</a>
                </div>
                </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

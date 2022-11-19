import React from 'react'
import MediaQuery from 'react-responsive'
import './Component.css'

function NavbarD() {
  return (
    <div>      
      <MediaQuery minWidth={1025}>
        <nav className='navbar navbar-expand-lg fixed-top nav-foot-color'>
          <div className='container-fluid'>
            <a className='navbar-brand nav_header mt-3 ms-5' href='/'>In The Mood of Winter |<p className='nav_date'> December 21st </p> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collaps navbar-collaps' id='navbarSupportedContent'>
              <ul className='navbar-nav me-5 mt-3 nav_body'>
                <li className='nav-item pe-5'>
                  <a className='nav-link' href="/">Artist</a>
                </li>
                <li className='nav-item pe-5'>
                  <a className='nav-link' href="/">Schedule</a>
                </li>
                <li className='nav-item pe-5'>
                  <a className='nav-link' href="#Location">Location</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="/">Ticket</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <nav class="navbar stickey-top nav-foot-color">
          <div class="container-fluid">
            <a class="navbar-brand nav_header_m ms-3" href="/">In the Mood of Winter</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title nav_header" id="offcanvasNavbarLabel">In the Mood of Winter</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ms-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Artist</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Schedule</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Rule</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Ticket</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </MediaQuery>
    </div>
  )
}

export default NavbarD
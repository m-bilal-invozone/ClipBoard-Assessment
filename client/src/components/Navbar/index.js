import React from 'react';
import './styles.scss'

const Navbar = () => {
  return (
      <div>
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center nav-wrap">
          <a href="/" className="navbar-brand d-flex w-50 mr-auto">HEALTH EXPLORE</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul className="navbar-nav w-100 justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="/">PROFILE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">JOBS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">PROFESSIONAL NETWORK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">LOUNGE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">SALARY</a>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              <button type="button" className="btn btn-outline-primary">Create Job</button>
              <li className="nav-item">
                <div className='profile-wrap'>
                  JO
                  <div className='badge'>
                    2
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;

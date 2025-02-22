import React from 'react'

import PropTypes from 'prop-types'//use impt for this line
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.About}</Link>
        </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label class="form-check-label" for="flexSwitchCheckDefault" style={props.textcolor}>{props.text}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes ={
  title : PropTypes.string.isRequired,
  About :PropTypes.string.isRequired,
}

Navbar.defaultProps={
  title : "Set Title",
  About : "Set About text",
}

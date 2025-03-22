import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {props.searchBar? <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
       
      </ul>
    </div>
  </div>
</nav>
  )
}

Header.defaultProps ={
    title: "Your title Here",
    searchBar: true
}

Header.propTypes={
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}

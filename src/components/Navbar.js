import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Counter Application</Link>
      <div>
        <Link className="btn btn-outline-primary me-2" to="/">Home</Link>
        <Link className="btn btn-outline-primary" to="/counter">Counter</Link>
      </div>
    </div>
  </nav>
  )
}

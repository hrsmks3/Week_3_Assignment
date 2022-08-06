import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><span>InVeNtOrY</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/music">Music Inventory</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports Inventory</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tech">Tech Inventory</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

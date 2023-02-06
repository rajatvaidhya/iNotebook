import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {

  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push("/login");
  }

  let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link style={{color:'white'}} className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white'}} className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<div className="d-flex" style={{zIndex:"1"}}>
       <Link className="btn btn-primary mx-2 hyper-btn" to="/signup" role="button">SignUp</Link>
       <Link className="btn btn-primary mx-2 hyper-btn" to="/login" role="button">Login</Link>
      </div> : <button style={{marginLeft:'1rem', width:"5rem", marginTop:'0rem'}} onClick={handleLogout} className="btn btn-primary hyper-btn">Logout </button>}
    </div>
  </div>
  {/* <p style={{fontSize:'0.8rem',marginLeft:'2%', color:'white'}}>Your notebook on the cloud.</p> */}
</nav>
)
}

export default Navbar

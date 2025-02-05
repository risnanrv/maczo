import React from 'react'
import './Navbar.css'
import Logo from '../../Assets/Logo.jpeg'
function Navbar() {
  return (
    <nav class="navbar  navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img className='nav-logo' src={Logo} alt='MACZO'/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Products
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Iphone</a></li>
              <li><a class="dropdown-item" href="#">Mac</a></li>
              <li><a class="dropdown-item" href="#">Ipad</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href='/contact'>Contact</a>
          </li>
        </ul>
        <form class=" d-none d-md-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  )
}

export default Navbar

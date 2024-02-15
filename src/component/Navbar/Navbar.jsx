import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <nav
      className="navbar navbar-expand-sm navbar-light bg-light"
     >
      <div className="container">
        <a className="navbar-brand" href="#"><i className='fa-solid fa-cart-shopping text-main'></i><span className='fw-bold'>FreshCart</span></a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="home" aria-current="page"
                >Home
               </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="category">Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="brands">Brands</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cart">Cart</Link>
            </li>
            </ul>


            <ul className="navbar-nav me-0 mt-2 mt-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className='fa-brands fa-facebook mx-2'></i>
              <i className='fa-brands fa-twitter mx-2'></i>
              <i className='fa-brands fa-instagram mx-2'></i>
              <i className='fa-brands fa-linkedin mx-2'></i>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="signup">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="signin">Signin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" >Logout</Link>
            </li>
            
          </ul>
        
        </div>
      </div>
     </nav>
     
     
      
    </>
  )
}

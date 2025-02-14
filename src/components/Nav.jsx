import React from 'react'
import {Link} from 'react-router-dom'


function Nav({Cartarry}) {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
    <i class="fa-brands fa-java text-danger pe-1 h1 fw-bold"></i>
    <a class="navbar-brand fs-3 fw-bold" href="#">Spicy spot</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
            <Link to={"/E-commerce-in-React.js-and-Boostrap/"} class="nav-link active"  href="#">Home</Link>

        </li>
        <li class="nav-item">
           <Link to={"/Menu"} class="nav-link "  href="#">Menu</Link>
        </li>
        <li class="nav-item">
           <Link to={"/About"} class="nav-link "  href="#">About</Link>
        </li> <li class="nav-item">
           <Link to={"/Contact"} class="nav-link "  href="#">Contact</Link>
        </li> <li class="nav-item">
           <Link to={"/Cart"} class="nav-link "  href="#">Cart <span className='text-warning'>{Cartarry.length}</span></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        
      
           <Link to={"/Bookatable"}class="nav-link mx-auto btn btn-outline-danger p-2 rounded-pill"  href="#">Book a table</Link>
        
      </form>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Nav

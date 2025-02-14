import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="conatiner bg-body  home-main  dflex ">
        <div className="row home-heading     justify-content-center align-items-center">
          <div className="col-12  col-md-5 d-flex align-items-center justify-content-center flex-column  ">
            <h1 className='fs-1 fw-bold'>Enjoy Your Healthy <br />
            Delicious Food</h1>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <Link to={"/Bookatable"} class=" btn btn-danger fs-4 rounded-pill"  href="#">Book a table</Link>


          </div>
          <div className="col-12  col-md-5 d-flex align-items-center justify-content-center">
            <img className='w-75' src="https://bootstrapmade.com/content/demo/Yummy/assets/img/hero-img.png" alt="" />
          
            
            

          </div>



        </div>
          
        
        


        

      </div>
      
      
    </>
  )
}

export default Home

import React from 'react'

function About() {
  return (
    <>
    <div className="container about-main  ">
      <div className="container d-flex align-items-center justify-content-center flex-column">
       <h1 className='h5'>About Us</h1>
       <h1 className='fs-2'>Learn more <span className='text-danger fw-bold'>About Us</span></h1>
      </div>
      <div className="container-fluid   grid_box my-3">
        <div className="row   ">
          <div className="col-12 col-md-6  ">
             <div className="container h-75">
             <img className='h-100 w-100' src="https://bootstrapmade.com/content/demo/Yummy/assets/img/about.jpg" alt="" />
             </div>
             <div className="conatainer  my-2 d-flex align-items-center justify-content-center flex-column  book-box ">
                <h1 className='h2 fw-bold '>Book a Table </h1>
                <h1 className='h2 fw-bold text-danger '>+91 98765 43210</h1>

             </div>
          </div>
          <div className="col-12 col-md-6 ">
            <ul className='ms-2 about-ul'>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident </li>

              </ul>
              <div className="contaniner ms-2  h-50">
                <img className='w-75 h-100  ms-3' src="https://bootstrapmade.com/content/demo/Yummy/assets/img/about-2.jpg" alt="" />


              </div>
            

          </div>



        </div>
      </div>
      
    </div>


     
    </>
  )
}

export default About

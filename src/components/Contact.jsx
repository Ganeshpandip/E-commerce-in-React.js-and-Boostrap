import React from 'react'

function Contact() {
  return (
    <>

      <div className="container-fluid contact-main  ">
          <div className="container-fluid d-flex align-items-center justify-content-center flex-column bg-body-tertiary">
              <p>contact</p>
              <h1 className='fs-3 fw-bold'>Need Help? <span className='text-danger fs-3 fw-bold'>contact Us</span></h1>
          </div>
          <div className="row bg-body-tertiary" data-aos="fade-right"
            data-aos-duration="2000">
            <div className="col-12 col-md-5 ms-md-5 ">
              <div className="container d-flex align-items-center justify-content-center my-3 bg-body">
                 <i class="fa-solid fa-location-dot fs-2 text-danger"></i>
                 <div className="container">
                      <h1 className='h4'>Address </h1>
                      <h1 className='h5'>A108 Adam Street, New York, NY 535022</h1>
                 </div>
              </div>
              <div className="container d-flex align-items-center             justify-content-center my-5 bg-body">
                  <i class="fa-solid fa-envelope fs-3 text-danger"></i>
                  <div className="container">
                      <h1 className='h4'>Email Us </h1>
                      <h1 className='h5'>info@example.com</h1>
                 </div>
              </div>


            </div>
            <div className="col-12 col-md-5 ">

            <div className="container d-flex align-items-center justify-content-center my-3 bg-body">
              <i class="fa-solid fa-square-phone fs-3 text-danger "></i>
                 <div className="container">
                      <h1 className='h4'>Call Us  </h1>
                      <h1 className='h5'>+1 5589 55488 55</h1>
                 </div>
              </div>
              <div className="container d-flex align-items-center             justify-content-center my-5 bg-body">
                  <i class="fa-solid fa-hourglass fs-3 text-danger"></i>
                  <div className="container">
                      <h1 className='h4'> Opening Hours  </h1>
                      <h1 className='h5'>Mon-sat:11Am to 23PM <br /> Sunday : Closed</h1>
                 </div>
              </div>
            </div>

          </div>
          <div className="container  d-flex align-items-center justify-content-center flex-column my-4 "
          data-aos="fade-left"
          data-aos-duration="2000">
           <div class="mb-3 w-50">
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="your name"/>
            </div>
            <div class="mb-3 w-50">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email"/>
            </div>
            <div class="mb-3 w-50">
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="subject"/>
            </div>
            <div class="mb-3 w-50">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='message'></textarea>
            </div>
            <button className='btn btn-outline-danger'>Send Message</button>


          </div>



      </div>
     
      
    </>
  )
}

export default Contact

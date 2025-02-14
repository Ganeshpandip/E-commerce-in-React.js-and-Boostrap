import React from 'react'

function Bookatable() {
  return (
    <>
      <div className="container book-mainbox my-5 ">
        <div className="row ">
          <div className="col-12 col-md-6">
             <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"/>
                    
            </div>


          </div>
          <div className="col-12 col-md-6">
            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">last Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"/>
                    
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-12 ">
             <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter Email </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"/>            
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-12 ">
             <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"/>            
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5">
             <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Date&Time</label>
                    <input type="datetime-local" class="form-control" id="exampleFormControlInput1"/>            
            </div>
          </div>
          <div className="col-12 col-md-4">
             <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Reservation Type</label>
                    <select class="form-select" aria-label="Default select example">
                      
                      <option value="1">Dinner</option>
                      <option value="2">Breakfast</option>
                      <option value="3">Lunch</option>
                    </select>           
            </div>
          </div>
          <div className="col-12 col-md-3">
             <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Any Special Request</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"/> 
                              
            </div>
          </div>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <button className='btn btn-outline-danger '>submit</button>
        </div>
        


      </div>

       
      
    </>
  )
}

export default Bookatable

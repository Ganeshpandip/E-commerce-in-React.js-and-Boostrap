import React, { useEffect, useState } from 'react'

function Cart({Cartarry}) {

  const [total,settotal]=useState(0);

  useEffect(()=>{
    settotal(Cartarry.reduce((acc,item)=> acc+parseInt(item.price),0))
  },[Cartarry])

  





   


  return (
    <>
    
    <div className="container d-flex justify-content-center py-3">

    <h1 className='fs-2 text-danger'>Total Amount ${total}</h1>

    </div>

    <div className="conatiner">
      <div className="row g-3">
     {Cartarry.map((cart_item)=>(
         <div className="col-12 col-md-4  ">

         <div class="card cart-box" data-aos="fade-up"
         data-aos-duration="1000" >
           <img src={cart_item.img} class="card-img-top" alt="..."/>
           <div class="card-body  d-flex justify-content-center   flex-column align-items-center  " id={cart_item.id}>
             <h5 class="card-title">{cart_item.title}</h5>
             <p class="card-text text-center">{cart_item.desc}</p>
             <h1 className='h2 text-danger'> <span className='text-danger'>$</span>{cart_item.price}</h1>
                <div className="btn-group">
                <button className='btn btn-outline-primary '>Add <span><i class="fa-solid fa-plus"></i></span></button>
                <button className='btn btn-outline-primary '>minus<span><i class="fa-solid fa-minus"></i></span></button>
             </div>
            
             <h1 className='h4 py-2'>count: <span className='h4'>1</span></h1>
           </div>
         </div>

         </div>
   
     ))}


      </div>
    </div>
    </>
  )
}

export default Cart

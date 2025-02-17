import React, { useEffect, useState } from 'react'
import Data from '../Data.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Menu({Cartarry,setCartarry}) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [food,setfood] =useState(Data);
  

  let categorys = [...new Set(Data.map((obj)=>obj.category))]

  const filtered_cetegory = (c)=>{

    let new_list = [... new Set(Data.filter((item)=>item.category==c))];

    setfood(new_list)

    console.log(new_list);
    

  }

  const Addcart = (Item)=>{

    setCartarry([...Cartarry,Item]);

    
    
  }
  
  const Remove_cart = (Item_id)=>{

    setCartarry(Cartarry.filter((cartitem)=>cartitem.id!==Item_id))

  }
   






  return (

    <>
      <div className="container menu-main d-flex  flex-column">
        <div    className="container  d-flex justify-content-center mt-lg-2 flex-column align-items-center ">
          <p>OUR MENU </p>
          <h1 className='h2'>check our <span className='text-danger fw-bold '>Spicy Spot Menu</span></h1>
        </div>
        <div className="conatiner ">
          <div className="container btn-box  d-flex justify-content-center py-4">
          <div className="btn-group   ">{categorys.map((category)=>(
            <button className='btn btn-outline-primary ' onClick={()=>{filtered_cetegory(category)}}>{category}</button>
          ))}
          <div className="btn btn-outline-primary" onClick={()=>{setfood(Data)}}>All</div>
          </div>
          </div>
        

          <div className="container mt-2">
            <div className="row g-3">
              {food.map((item)=>(
                      <div className="col-12 col-md-4">
                      <div class="card  " data-aos="fade-up"data-aos-duration="1000"  id={item.id}>
                            <img src={item.img} class="card-img-top img-box" alt="..." />
                            <div class="card-body d-flex justify-content-center   flex-column align-items-center ">
                              <h5 class="card-title">{item.title}</h5>
                              <p class="card-text text-center
                              ">{item.desc}</p>
                              <h1 className='text-danger '>${item.price}</h1>
                              {Cartarry.includes(item)?<button className='btn btn-outline-danger fw-bold' onClick={()=>{Remove_cart(item.id)}}>Remove</button>:
                              <button className='btn btn-outline-primary fw-bold' onClick={()=>{Addcart(item)}}>Add To Cart</button>}
                           
                            </div>
                          </div>
                      </div>
              ))}
        
            </div>
          </div>

          


        </div>

         


      </div>

   
      
      
      
    </>
  )
}

export default Menu

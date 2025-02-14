import { useState } from 'react'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';
import Bookatable from './components/Bookatable.jsx';

function App() {
  const [Cartarry,setCartarry] =useState([]);

  return (
    <>
      <BrowserRouter> 
      <Nav Cartarry={Cartarry}/>
        <div className="conatiner-fluid mainbox bg-body">
          <Routes>
            <Route path='/E-commerce-in-React.js-and-Boostrap/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu Cartarry={Cartarry} setCartarry={setCartarry} />}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/Cart' element={<Cart Cartarry={Cartarry} />}></Route>
            <Route path='/Bookatable' element={<Bookatable/>}></Route>
          </Routes>
        </div>


      </BrowserRouter>
      
    </>
  )
}

export default App

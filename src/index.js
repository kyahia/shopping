import Rend from "./test.render";

import React, { useState, useEffect } from 'react';
import {createRoot} from "react-dom/client";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from './App';
import Catalogue from './routes/catalogue';
import Home from './routes/home';
import Invoice from './routes/invoice';


const Display = () => {
  const [cart, setCart] = useState([])
   
   useEffect(() => {
      async function getProds(){
         const res = await fetch('data.json')
         const data = await res.json()
         
         setCart(data.map(el => {
           el.quantity = 0
           return el;
         }));
      }
      getProds()
   }, [])
  
  const addEl = (id, quantity) => {
    setCart(prev => {
      return prev.map(el => {
        if ( el.id === id ) el.quantity = quantity
        return el;
      })
    })
  }
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App data={cart}/>}>
        <Route index element={<Home />} />
        <Route path="catalogue" element={<Catalogue onAdd={addEl} data={cart} />} />
        <Route path="invoice" element={<Invoice data={cart} onAdd={addEl} />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )

}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display />
  </React.StrictMode>
)

// root.render(<Rend />);
import React, { useState, useEffect } from "react";
import "./routes.css";

export default function Catalogue(props){
   return (
      <React.Fragment>
         <h1>Catalogue</h1>
         {props.data.map(prod => <Card data={prod} key={"cata" + prod.id} onAdd={props.onAdd} />)}
      </React.Fragment>
   )
}

function Card(props){
   const [preOrder, setPreOrder] = useState(props.data.quantity);
   
   const submit = e => {
      e.preventDefault();
      e.stopPropagation()
      props.onAdd(props.data.id, preOrder)
   }

   const reset = () => {
      setPreOrder(0);
      props.onAdd(props.data.id, 0)
   }

   const decrement = () => setPreOrder(preOrder - 1)
   const encrement = () => setPreOrder(preOrder + 1)

   return (
      <div className="card">
         <h2>Article: {props.data.name}</h2>
         <h3>Price: {props.data.price}$</h3>

         <form onSubmit={submit}>
            <label>
               <button onClick={decrement} disabled={(preOrder < 1)} className="signs" type="button" >-</button>
               <input type="number" min={1} value={preOrder} required onChange={e => setPreOrder(e.target.value)} />
               <button onClick={encrement} disabled={(preOrder > 10)} className="signs" type="button" >+</button>
            </label>
            <button type="submit" id="add-to-cart">Add</button>
            {(props.data.quantity > 0) ? <button type="button" id="remove-from-cart" onClick={reset}>Clear</button> : null}
         </form>
      </ div>
   )
}
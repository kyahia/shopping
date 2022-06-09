import React, { useState, useEffect } from "react";

export default function Invoice(props) {
   return (
      <React.Fragment>
         <h1>Invoice</h1>
         {
            props.data.filter( el => el.quantity > 0 ).length < 1 ? null : 
               <table>
                  <thead>
                     <tr>
                        <th></th>
                        <th>Article</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                     </tr>
                  </thead>
                  <tbody>
                     {props.data
                        .filter(prod => prod.quantity > 0)
                        .map(prod =>
                           <tr><Card data={prod} key={"inv" + prod.id} onAdd={props.onAdd} /></tr>
                        )
                     }
                  </tbody>
               </table>
         }
         <h1 id="total">Total: {props.data.reduce((prev, act) => prev + act.quantity * act.price, 0)} $</h1>
      </React.Fragment>
   )
}

function Card(props) {
   const [preOrder, setPreOrder] = useState(props.data.quantity);

   const style = {
      color: "white",
      backgroundColor: "red",
      borderRadius: "2ch"
   }

   useEffect(() => {
      props.onAdd(props.data.id, preOrder)
   }, [preOrder])

   const reset = () => setPreOrder(0);
   const decrement = () => setPreOrder(preOrder - 1)
   const encrement = () => setPreOrder(preOrder + 1)

   return (
      <React.Fragment>
         <td><button type="button" onClick={reset} style={style} >x</button></td>
         <td>{props.data.name}</td>
         <td>{props.data.price}$</td>
         <td>
            <button onClick={decrement} disabled={(preOrder < 2)} className="signs" type="button" >-</button>
            <input min={1} value={preOrder} required onChange={e => setPreOrder(e.target.value)} style={{"width": "3ch", "textAlign": "center"}} />
            <button onClick={encrement} disabled={(preOrder > 10)} className="signs" type="button" >+</button>
         </td>
         <td>{preOrder*props.data.price}</td>
      </ React.Fragment>
   )
}
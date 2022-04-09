import { useEffect } from "react";
export default function Rend(){
   let prods;
   
   useEffect(() => {
      async function go (){
         const res = await fetch('data.json')
         const data = await res.json();
   
         prods = data;
         console.log(prods)
      }
      go()
   }, [])

   function no(){
      console.log(prods);
      console.log(prods[0]);
   }

   return (<h1>test<button onClick={no}>-</button></h1>);
}
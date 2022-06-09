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


// import { useState, useEffect } from 'react';

// const animalPics = [
//    { name: "cat", path: require('../assets/cat.jpg') },
//    { name: "cats", path: require('../assets/sets/cats.jpg') },
//    { name: "dog", path: require('../assets/sets/dog.jpg') },
//    { name: "dogs", path: require('../assets/sets/dogs.jpg') },
//    { name: "rabbit", path: require('../assets/sets/rabbit.jpg') }
// ]

// export default function Home(){
//    const [img, setImg] = useState(cat);

//    useEffect(function refreshImg(){
//       setInterval(() => {
//          setImg(animalPics[Math.floor(Math.random() * animalPics.length)])
//       }, 1000);
//    }, [])
   
//    return (
//       <h1>Welcome to animals shop
//          <img src={img.path} alt={img.name}></img>
//       </h1>
//    )
// }
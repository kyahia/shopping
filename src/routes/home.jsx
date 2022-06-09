import { useState, useEffect } from 'react';

const animalPics = {
   filesNames: [ 'cat', 'cats', 'dog', 'rabbit' ]
}

export default function Home(){
   const [img, setImg] = useState(animalPics.filesNames[0]);

   function refreshImg(){
      setImg(animalPics.filesNames[Math.floor(Math.random() * animalPics.filesNames.length)]);
   }

   useEffect(() => {
      const interval = setInterval(refreshImg, 2000);
      return (() => clearInterval(interval));
   }, [])
   
   return (
      <section className='home-display'>
         <h1>Welcome to animals shop</h1>
         <img alt={img} src={require('../assets/' + img + '.jpg')}></img>
      </section>
   )
}
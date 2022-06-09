export function capitalize(txt){
   return txt[0].toUpperCase() + txt.slice(1);
}

export default function getProds(){
   let data = require("./data.json");
   data = data.sort((prev, next) => ( next.name < prev.name ) ? 1 : -1 ); // sort alphabetically
   return data.map(el => {
      el.name = capitalize(el.name);
      el.quantity = 0;
      return el;
   });
}
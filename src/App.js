import { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom";
import "./App.css";

function App(props) {
  const [style, setStyle] = useState({})

  // useEffect(() => {
  //   setStyle({ backgroundColor: "green" })
  //   setTimeout(() => {
  //     setStyle({ backgroundColor: "lightgray" })
  //   }, 1000);
  // })

  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/invoice">Purchase</Link>
        </ul>
        <button style={style}>Articles: {props.data.filter( el => el.quantity > 0 ).length}</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

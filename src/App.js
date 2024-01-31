
import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Ship from "./components/Ship"
function App() {
  const [ships, setShips] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch ('https://swapi.dev/api/starships')
        const data = await res.json();
        console.log(data.results[0].name);
        setShips(data.results);
    };

    fetchData()
    }, []
  );

  return (
    <div className="App">

      <div>
      <h1> Star Wars Ships Names </h1>
      </div>
      
      <div className = "display">
      {ships.map((ship) =>{
        return(
          <Ship ship={ship} />
        )
      
      })}
      </div>
    </div>
  );
}

export default App;

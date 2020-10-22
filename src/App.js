import React from 'react';
import './App.css';
import '../src/bootstrap.css'
import Navbar  from "./navbar/Navbar";
import Body from "./body/Body";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
    </div >
  );
}

export default App;

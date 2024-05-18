import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
         <h1 className={"text-5xl text-red-500"}>This is App.js</h1>

        <div style={{backgroundColor:"red", padding:10, textAlign:"center"}}>Inline CSS Box</div>
          <br/>
          <div className={"box"}>External CSS Box</div>
          <br/>
          <div className={"bg-red-500 p-3 text-center"}> Utility Box</div>
      </div>

  );
}

export default App;

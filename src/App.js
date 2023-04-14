import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Stocks from './Pages/Stocks'


function App()
{

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stocks" element={<Stocks />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

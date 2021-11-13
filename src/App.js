import React from 'react';
import Navi from './components/Navi';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="logo">

   
    <div>
      <Navi></Navi>
      <main>
        <Home></Home>
        <About></About>
      </main>
    </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navi from './components/Navi';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route,  } from "react-router-dom";


function App() {

  return (   
         
    <div className="logo">    
    <BrowserRouter>
    <header>
    <Navi/>
 
   
        <div className='content'>
          <Route exact path='/home' component={Home} />              
             <Route exact path='/about' component={About}/>  
             <Route path='/Contact' component={Contact}/>               
             <Route path='/Resume' component={Resume}/>       
          </div>
    </header>
          
   
        </BrowserRouter>
    </div>
    
);
}

export default App;

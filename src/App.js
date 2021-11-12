import React from 'react';
import Navi from './components/Navi';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navi></Navi>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

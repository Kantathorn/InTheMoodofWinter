import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Location from './Page/Location';

import Home from './Page/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;

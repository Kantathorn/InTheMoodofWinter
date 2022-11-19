import './App.css';
import React from 'react'
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

import Home from './Page/Home'

function App() {
  return (
    <Browser>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Browser>
  );
}

export default App;

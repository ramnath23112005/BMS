import logo from './logo.svg';
import './App.css';
import './responsive.css';
import Layout from './Layout';
import Home from './pages/Home';
import Bloom from './components/Bloom';
import About from './components/About';
import Supportgroup from './components/Supportgroup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <Routes >
        
      <Route  path="/" element={<Layout />}>

      <Route  index element={<Home />} />
      
      <Route path="bloom" element={<Bloom />} />

      {/* <Route path="support" element={<Support />} />  */}
      <Route path="supportgroup" element={< Supportgroup/>} /> 

      {/* <Route path="bloom" element={<Bloom />} /> */}
    
     </Route>
    {/* <Route exact path='/' element={<Home/>} /> */}
  </Routes> 
  );
}

export default App;

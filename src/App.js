import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Param from './components/Param';
import Color from './components/Color';
import Colors from './components/Colors';


function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/:param' element={<Param />} />
        <Route path='/:param/:color' element={<Color />} />
        <Route path='/:param/:color/:bgColor' element={<Colors />} />
      </Routes>
    </div>
  );
}

export default App;

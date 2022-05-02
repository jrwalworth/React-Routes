import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const Home = (props) => {
  return (
    <div>
      <h1 style={{color:'red'}}>Home Page</h1>
      <Link to={'/about'}>About</Link>
    </div>
  )};

const About = (props) => {
  return (
    <div>
      <h1 style={{color:'blue'}}>About Page</h1>
      <Link to={'/'}>Go Home</Link>
    </div>
    
  )};
  

function App() {

  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

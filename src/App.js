import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import ProductImage from './NikeShoe.png'
import NikeOfficialLogo from './Nike Official Logo 2.png'
import Home from './Components/Home.js'
import TopNavBar from './Components/TopNavBar.js'
import BottomNavBar from './Components/BottomNavBar.js'
import MensWear from './Components/MensWear.js';
// import WomensWear from './Components/WomensWear.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import WomensWear from './Components/WomensWear';

function App() {
  return (

    <div >
     
      <Router>
    
        <TopNavBar />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menswear' element={<MensWear />}/>
          <Route path='/Womenswear' element={<WomensWear />} />
          <Route path='Kidsfashion' />
        </Routes>
        
        <BottomNavBar />
      
      </Router>
    
    </div>
  )
}

export default App;

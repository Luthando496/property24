import React from 'react'
import BelowNav from './Components/BelowNav';
import Featured from './Components/Featured';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Search from './Components/Search';
import SingleHouse from './Components/SingleHouse';


const App=()=> {



  return (
    <>
    {/* <Navbar />
    <BelowNav /> 
    <Featured />
    <Main/>
    <Footer /> */}
    <Router>
    <Routes>
    <Route path='/' element={<Featured />}/>

    <Route path='/search/:house' element={<Search/>}/>
    <Route path='/property/:id' element={<SingleHouse/>}/>
    </Routes>
    <Footer/>

    </Router>
    </>
    
  );
}

export default App;

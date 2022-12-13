
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Results from './Components/Results';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {

  return (
    <div className="App">
       <Navbar/>
       
       <Router>
        <Routes>
        <Route exact path="/" element={<Main/>} />
          <Route exact path="/results" element={<Results/>}/>
        </Routes>
       </Router>

      
    
    </div>
  );
}

export default App;

import './App.css';
import Home from './Home';
import Hourly from './Hourly'
import React from 'react';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Hourly" element={<Hourly/>}/>
      </Routes>
    </Router>
  );
}

export default App;

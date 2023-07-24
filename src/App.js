import './App.css';
import Home from './Home';
import React from 'react';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

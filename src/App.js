import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Description from './components/pages/Description';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
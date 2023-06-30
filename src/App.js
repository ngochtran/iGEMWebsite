import React from 'react'
import Navbar from "./components/Navbar";
import { Link } from 'react-router-dom';

const App = () => {
    return (
      <header className="App-header">
        <div className='nav-area'>
          <Link to="/" className="logo">Stanford</Link>
          <Navbar /> 
        </div>
      </header>
    )
}

export default App;
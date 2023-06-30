import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <div className="nav-area">
          <Link to="/" className="logo">Stanford</Link>
          <Navbar />
        </div>
      </header>
    </BrowserRouter>
  );
};

export default App;
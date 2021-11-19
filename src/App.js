import { Routes, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import { Home, Login, Register } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div style={{ display: 'inline-block', paddingRight: '1rem' }}>
          <Link to="/home">Home</Link>
        </div>
        <div style={{ display: 'inline-block', paddingRight: '1rem' }}>
          <Link to="/login">Login</Link>
        </div>
        <div style={{ display: 'inline-block', paddingRight: '1rem' }}>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

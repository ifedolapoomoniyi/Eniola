import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
    </div>
  );
}

export default App;

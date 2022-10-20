import './App.css';
import Homepage from './pages/Homepage';
import Writing from './pages/Writing/Writing';
import Project from './pages/Project/Project';
import Content from './pages/Content/Content';
import Marketing from './pages/Marketing/Marketing';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route exact={true} path="/" 
      element={<div className="App">
                <Homepage/>
              </div>
        }
      />

      <Route path="/writing" element={
        <div className='App'>
          <Writing/>
        </div>
      }
      />

      <Route path="/Project" element={
        <div className='App'>
          <Project/>
        </div>
      }
      />

      <Route path='/Content' element={
        <div className='App'>
          <Content/>
        </div>
      }
      />

      <Route path='/Marketing' element={
        <div className="App">
          <Marketing/>
        </div>
      }
      />

      <Route path='/Contact' element={
        <div className='App'>
          <Contact/>
        </div>
      }
      />
    </Routes>

  );
}

export default App;

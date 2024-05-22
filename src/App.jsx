import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from './components/Login.jsx';
import ShowImage from './components/ShowImage.jsx';

function App() {
 
  return (
    <>
      <div>
      <Router>
        <div>

          {/* <nav>
            <ul>
              <li><Link to="/">Login</Link></li>
              <li><Link to="/ShowDogImage">ShowDogImage</Link></li>
            </ul>
          </nav> */}
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/ShowImage" element={<ShowImage />} />
          </Routes>
        </div>
      </Router>
      </div>
    </>
  )
}

export default App

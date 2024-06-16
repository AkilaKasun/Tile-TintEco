import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import ColorImage from './pages/ColorImage';
import Location from './pages/Location';
import Calculation from './pages/Calculation';
import LayoutWithNavFooter from './components/Crads/LayoutWithNavFooter ';
import About from './pages/About';
import Contact from './pages/Contact';
import LocationData from './pages/LocationData';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LayoutWithNavFooter />}>
           
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
          </Route>

          <Route path="/colorimage" element={<ColorImage />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<LocationData />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculation" element={<Calculation />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Videos from './pages/Videos';
import Live from './pages/Live';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/live" element={<Live />} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;

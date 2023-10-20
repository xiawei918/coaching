import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <div>
          <Routes>
              <Route 
              path="/"
              element={<Home/>}
              />
              <Route 
              path="/about" 
              element={<About/>}
              />
              <Route 
              path="/contact" 
              element={<Contact/>}
              />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import './App.css';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer className="text-white p-4 text-center"  style={{ 
          backgroundColor: "#2e4d1a", 
        }} >

        &copy; {new Date().getFullYear()} Samantha Saak
      </footer>
    </div>
  </Router>
);

export default App;

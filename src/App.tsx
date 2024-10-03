import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ApiExample from './components/ApiExample';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/api-example" element={<ApiExample />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

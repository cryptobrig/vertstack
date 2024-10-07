import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const ApiExample = React.lazy(() => import('./components/ApiExample'));

const TitleComponent: React.FC = () => {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home - VERT Stack Template';
      case '/about':
        return 'About - VERT Stack Template';
      case '/contact':
        return 'Contact - VERT Stack Template';
      case '/api-example':
        return 'API Example - VERT Stack Template';
      default:
        return 'VERT Stack Template';
    }
  };

  return (
    <Helmet>
      <title>{getTitle()}</title>
    </Helmet>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary
      fallback={
        <div role="alert">
          Something went wrong. Please try refreshing the page.
        </div>
      }
    >
      <Router>
        <div lang="en">
          <TitleComponent />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="container">
            <Suspense fallback={<div aria-live="polite">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/api-example" element={<ApiExample />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

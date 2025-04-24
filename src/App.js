import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import TechnicalCV from './components/TechnicalCV'; // Import TechnicalCV component
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Banner />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/technicalcv" element={<TechnicalCV />} />{' '}
          {/* New Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;

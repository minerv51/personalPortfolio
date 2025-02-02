import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Project from './pages/projects';
import Contact from './pages/contact';
import PortfolioSiteInfo from './pages/portfolioSiteInfo';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolioSiteInfo" element={<PortfolioSiteInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


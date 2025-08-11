// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Global/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import NewsPage from './Pages/NewsPage';
import InvestmentOpportunitiesPage from './Pages/InvestmentOpportunitiesPage';
import ContactPage from './Pages/ContactPage';
import CopyRight from './components/Global/CopyRight';
import NewNavbar from './components/Global/NewNavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NewNavbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/news" element={<NewsPage />} /> {/* Updated NewsPage route */}
          <Route path="/investment-opportunities" element={<InvestmentOpportunitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <CopyRight />
      </div>
    </Router>
  );
}

export default App;

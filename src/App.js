import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // MDB UI Kit for styling
import Nav from './components/Nav'; // Import Nav component
import Home from './components/Home'; // Import Home component
import About from './components/About';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from  './components/Footer';

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app with BrowserRouter here */}
      <Nav />  {/* Display the Navbar */}
      <Routes>
        <Route path="/" element={<Home/>} /> {/* Define route for home page */}
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

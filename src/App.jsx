import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import SideBar from './components/Sidebar';
import Main from './components/Main';
// import Map from './components/Map';
// import Background from './components/Background';


export default function App() {

  return (
    // <Background/>
    <Main/>
    // <Map/>
  );
}




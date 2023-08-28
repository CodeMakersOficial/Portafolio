import './App.css';
import React from 'react';


import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import StaffPage from './pages/StaffPage';

function App(){
  return(
    <div className='App'>
      <BrowserRouter>
      <Header>
      <Nav/>
      </Header>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/staff' element={<StaffPage/>} />
        <Route path='/contacto' element={<ContactoPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

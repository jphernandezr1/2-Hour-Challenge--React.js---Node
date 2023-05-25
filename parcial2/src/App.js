import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './paginas/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './paginas/navbar';
import LandingPage from './paginas/Landing';
import BookPage from './paginas/BookPage';
import BookPageInfo from './paginas/BookPageInfo';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BookPage/>} />
        <Route exact path="/:bookId" element={<BookPageInfo/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route path="*" element="Not Found" />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

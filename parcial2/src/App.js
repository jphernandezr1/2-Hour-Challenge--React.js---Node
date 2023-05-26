import React from 'react';
import './App.css';
import LoginPage from './paginas/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from './paginas/BookPage';
import BookPageInfo from './paginas/BookPageInfo';
import {IntlProvider} from 'react-intl';
import { useState } from "react";
import en from './locales/en.json'
import es from './locales/es.json'
import LandingPage from './paginas/Landing';

function App() {
  const [messages, setMessages] = useState(navigator.language === 'en'? en : es)
  return (
    <IntlProvider locale={navigator.language} messages={messages}>
      <BrowserRouter>
        <Routes>
          <Route exact path="home" element={<LandingPage/>} />
          <Route exact path="home/:bookId" element={<LandingPage/>} />
          <Route exact path="/" element={<LoginPage/>} />
          <Route path="*" element="Not Found" />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;

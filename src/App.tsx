import React from 'react';
import Router from './Router';
import Header from './component/Header';
import { BrowserRouter } from 'react-router-dom';
import './AppStyled.ts';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/global.css';

import Routes from './components/Routes/routes';
import Footer from './components/Footer/index';


function App() {
  return (
    <>

        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <Footer />

    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import ClientsControl from './pages/clientes';
import CarsControl from './pages/carros';
import Location from './pages/locacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientsControl' element={<ClientsControl/>}/>
        <Route path='/carcontrol' element={<CarsControl/>}/>
        <Route path='/location' element={<Location/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


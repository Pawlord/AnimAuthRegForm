import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form, HomePage } from './Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Стили
import './main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/home-page' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

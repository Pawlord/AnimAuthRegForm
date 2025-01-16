import React from 'react';
import ReactDOM from 'react-dom/client';

//Компоненты
import { Form, Home } from './Pages';
import { MainPage, AboutPage, AccountPage } from './components/for-homePage/ui';

//Работа с react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Стили
import './main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/home-page/*' element={<Home />}>
          <Route index element={<MainPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='account' element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

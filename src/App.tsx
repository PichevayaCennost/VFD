import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { Layout } from './layouts/Layout'

import './scss/app.scss';

function App() {
  return (
    <div className='app'>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route >
          <Route path='/register' element={<RegisterPage />}></Route >
          <Route path='/login' element={<LoginPage />}></Route >
        </Routes >
      </Layout>
    </div>
  );
}

export default App;

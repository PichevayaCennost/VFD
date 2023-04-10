import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import { StartPage } from './pages/StartPage/StartPage'
import { Layout } from './layouts/Layout'

import './scss/App.scss'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<StartPage data="bulat" />}></Route>
        <Route path='/home-page' element={<HomePage data="bulat" />}></Route >
      </Routes >
    </Layout>
  );
}

export default App;

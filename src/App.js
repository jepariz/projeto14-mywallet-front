import React from 'react'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/registro' element={ <Register/>}/>
    </Routes>
    </BrowserRouter>
    <GlobalStyle />
    </>
  )
}

export default App

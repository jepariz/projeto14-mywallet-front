import React from 'react'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Wallet from "./pages/Wallet"


function App() {

  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      {/* <Route path='/' element={<Login />}/>
      <Route path='/registro' element={ <Register/>}/> */}
      <Route path='/carteira' element={ <Wallet/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

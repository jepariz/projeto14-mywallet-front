import React from 'react'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Wallet from "./pages/Wallet"
import NewEntry from './pages/NewEntry';


function App() {

  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/registro' element={ <Register/>}/>
      <Route path='/carteira' element={ <Wallet/>}/>
      <Route path='/movimentacao' element={ <NewEntry/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

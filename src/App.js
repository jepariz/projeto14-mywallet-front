import React from 'react'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import MyContext from "./contexts/MyContext";
import Login from './pages/Login'
import Register from './pages/Register'
import Wallet from "./pages/Wallet"
import NewEntry from './pages/NewEntry';


function App() {

  const [token, setToken] = useState("");

  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
    <MyContext.Provider
          value={{
            token,
            setToken,
          }}
        >
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/registro' element={ <Register/>}/>
      <Route path='/carteira' element={ <Wallet/>}/>
      <Route path='/movimentacao' element={ <NewEntry/>}/>
    </Routes>
    </MyContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App

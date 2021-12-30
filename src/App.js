import React from 'react';
import './App.css';
import Main from "./components/Main"
import Footer from "./components/Footer"
import Popup from "./components/Popup"
import { createContext, useState } from "react"

export const PopupContext = createContext()


function App() {
  const popupState = useState('')
  //const [popup,setPopup] = useState('start')
  return <div className='App'>
    <PopupContext.Provider value={popupState}>
      <Main />
      <Popup />
      <Footer />
    </PopupContext.Provider>
  </div>
}

export default App

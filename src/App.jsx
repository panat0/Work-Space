import { React } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Component/Nav'
import Header from './Component/Header'
import WorkSpace from './Component/WorkSpace'
import Start from './Component/Start'
import Category from './Component/Category'
import Long from './Component/Long'
import Footer from './Component/Footer'


function App() {
  
  return (
    <>
      <Nav/>
      <Header/>
      <WorkSpace/>
      <Start/>
      <Category/>
      <Long/>
      <Footer/>
    </>
  )
}

export default App

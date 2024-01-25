import React from "react"
import {BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
export default function App()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
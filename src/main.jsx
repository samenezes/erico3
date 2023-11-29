import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Home from './pages/home'
import Add from './pages/temperaturasAdd'
import Del from './pages/temperaturasDel'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Add" element={<Add/>} />
      <Route path="/Del" element={<Del/>} />
    </Routes>
  )
}
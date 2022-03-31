import React from 'react';
import { Outlet, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css'

const App = () => {
  
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
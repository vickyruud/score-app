import React from 'react';
import { Outlet, Link } from "react-router-dom";

const App = () => {
  
  return (
    <div>
      <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <Link to="/">Home</Link> 
        <Link to="/getData">Seasons</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
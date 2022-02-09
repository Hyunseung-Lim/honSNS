import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPage'
import { ProfilePage } from './Pages/ProfilePage';

function App() {
  return (
    <Router>
      {/* <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: #FAFAFA;
        }
      `}</style> */}
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </div>      
    </Router>
  )
}

export default App
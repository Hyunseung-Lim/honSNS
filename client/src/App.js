import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

import useToken from './Components/useToken';
import { Navbar } from './Components/Navbar/navbar'
import { HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPage'
import { UploadPage } from './Pages/UploadPage';
import { ProfilePage } from './Pages/ProfilePage';

function App() {
  const { token, removeToken, setToken } = useToken();

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
        {!token && token!=="" &&token!== undefined?
          <LoginPage setToken={setToken}/>
          :
          <>
            <Navbar token={removeToken}/>
            <Routes>
              <Route path="/" element={<HomePage token={token} setToken={setToken}/>}/>
              <Route path="/profile" element={<ProfilePage token={token} setToken={setToken}/>}/>
              <Route path="/upload" element={<UploadPage token={token} setToken={setToken}/>}/>
            </Routes>
          </>
        }
      </div>
    </Router>
  )
}

export default App
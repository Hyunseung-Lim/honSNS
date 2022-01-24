import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import { HomePage } from './Pages/HomePage'

function App() {

  // const [data, setData] = useState("Hello from client")

  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //     }
  //   )
  // }, [])

  return (
    <Router>
      <div>
        {/* {(typeof data.members === 'undefined') ? (
          <p>loading...</p>
        ) : (
            data.members.map((member, i) => (
              <p key={i}>{member}</p>
            ))
        )} */}
        
        <HomePage/>
      </div>      
    </Router>
  )
}

export default App
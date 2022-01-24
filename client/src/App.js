import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState("Hello from client")

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  return (
    <div>
      
      {(typeof data.members === 'undefined') ? (
        <p>loading...</p>
      ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
      )}

    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import { Navbar } from '../Components/Navbar/navbar'

export const ProfilePage = () => {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/profile").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  return(
      <>
          <Navbar/>
          {(typeof data.name === 'undefined') ? (
          <p>loading...</p>
          ) : (
              <>
                <p key={1}>{data.name}</p>
                <p key={2}>{data.users}</p>
                <p key={3}>{data.num}</p>
              </>
          )}
      </>
  )
}
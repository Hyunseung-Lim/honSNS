import React, { useState, useEffect } from 'react';
import axios from "axios";

export const ProfilePage = (props) => {

  const [profileData, setProfileData] = useState({'names':null})
  function getData() {
    axios({
      method: "GET",
      url:"/profile",
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
    .then((response) => {
      const res =response.data
      res.access_token && props.setToken(res.access_token)
      setProfileData(({
        name: res.name
      }))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  useEffect(() => {
    getData()
  }, []);


  return(
      <>
          {(profileData.name == null) ? (
          <p>loading...</p>
          ) : (
              <>
                <p key={1}>{profileData.name}님</p>
              </>
          )}
      </>
  )
}
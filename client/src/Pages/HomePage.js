import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Timeline } from '../Components/Timeline/timeline'

export const HomePage = (props) => {

    const [postsData, setPostsData] = useState({'posts':null})
  
    function getPostsData() {
      axios({
        method: "GET",
        url:"/home",
        headers: {
          Authorization: 'Bearer ' + props.token
        }
      })
      .then((response) => {
        const res =response.data
        res.access_token && props.setToken(res.access_token)
        setPostsData(({
          posts: res.posts
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
        getPostsData()
    }, []);


    return(
        <>
            <Timeline/>
            {(postsData.posts == null) ? (
            <p>loading...</p>
            ) : (
                <>
                    <p key={1}>{postsData.posts}님</p>
                </>
            )}
        </>
    )
}
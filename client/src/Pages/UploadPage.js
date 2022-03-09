import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './page.css'

export const UploadPage = (props) => {

    //values
    const [postImage, setPostImage] = useState("");
    const [postText, setPostText] = useState("");

    const navigate = useNavigate();

    const postImageHandler = (e) => {
        e.preventDefault();
        setPostImage(e.target.files[0]);
    }

    const postTextHandler = (e) => {
        e.preventDefault();
        setPostText(e.target.value);
    }

    const submitHander = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('post_image', postImage)
        formData.append('post_text', postText)

        axios({
            method: 'post',
            url: '/upload',
            headers: {
                Authorization: 'Bearer ' + props.token
              },
            data: formData
        });
        navigate('/');
    }


    return(
        <>
            <div className='uploadpage'>
                <form onSubmit={submitHander}>
                    <input type='file' 
                        accept='image/*'
                        onChange={postImageHandler}>
                    </input>
                    <input type="text" onChange={postTextHandler}></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    )
}
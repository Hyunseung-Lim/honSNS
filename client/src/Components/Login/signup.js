import React, { useState } from 'react';
import axios from 'axios';

import './login.css';

export const Signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);        
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const submitHander = (e) => {
        e.preventDefault();
        
        // let body = {
        //     email: email,
        //     name: name,
        //     password: password
        // }

        // axios.post("http://localhost:5000/login", body)
        //     .then((response) => { console.log(response.data); }) 
        //     .catch((response) => { console.log("Error!") });
        axios({
            method: 'post',
            url: 'http://localhost:5000/login',
            data: {
                email: email,
                name: name,
                password: password
            }
          });
    }


    return(
        <>
            <div className='signupbox'>
                <form
                    onSubmit={submitHander}   
                >
                    <input type="email" value={email} onChange={emailHandler}></input>
                    <input type="name" value={name} onChange={nameHandler}></input>
                    <input type="password" value={password} onChange={passwordHandler} autoComplete="on"></input>
                    <button type="submit">create account</button>                    
                </form>
            </div>   
        </>
    )
}
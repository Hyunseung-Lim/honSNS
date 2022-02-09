import React from 'react';
import { Signin } from '../Components/Login/signin'
import { Signup } from '../Components/Login/signup'

import './page.css'

export const LoginPage = () => {
    return(
        <>
            <div className='loginpage'>
                <Signin/>
                <Signup/>
            </div>

        </>
    )
}
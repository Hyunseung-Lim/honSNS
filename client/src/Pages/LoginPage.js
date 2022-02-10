import React, { useState } from 'react';
import { Signin } from '../Components/Login/signin'
import { Signup } from '../Components/Login/signup'

import './page.css'

export const LoginPage = () => {

    const [isSignup, setIsSignup ] = useState(false);

    return(
        <>
            <div className='loginpage'>
                {
                    isSignup === false
                    ? <Signin setIsSignup = { () => setIsSignup(true) }/>
                    : <Signup setIsSignin = { () => setIsSignup(false) }/>
                }
            </div>

        </>
    )
}
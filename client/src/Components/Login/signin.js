import React from 'react';

import './login.css';

export const Signin = (props) => {

    return(
        <>
            <div className='signinholder'>
                <div className='signinbox'>
                    <input>
                    </input>
                    <input>
                    </input>
                    <button>
                        login
                    </button>  
                </div>
                <div className='signupbox'>
                    <button onClick={() => props.setIsSignup()}>
                        sign up
                    </button>
                </div>   
            </div>
        </>
    )
}
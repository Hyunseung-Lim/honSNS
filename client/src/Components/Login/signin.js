import React from 'react';

import './login.css';

export const Signin = () => {
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
                    sign up
                </div>   
            </div>
        </>
    )
}
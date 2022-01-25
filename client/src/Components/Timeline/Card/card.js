import React from 'react';
import './card.css';

export const Card = () => {
    return(
        <>
        <div className='card'>
            <div className='topbar'>
                <div className='userInfo'>
                    <div>
                        <img className="userImage" src="img/img1.jpg"/>
                    </div>
                    <div className='userName'>
                        user_name
                    </div>                    
                </div>
                <div>
                    menu
                </div>
            </div>
            <div>
                <img className="cardImage" src="img/img2.jpg"/>
            </div>
            <div className='cardState'>
                <div className='like'>
                    <img className="cardIcon" src="img/heart.png"/>
                    <div className='cardNum'>
                        100
                    </div>
                </div>
                <div className='comment'>
                    <img className="cardIcon" src="img/comment.png"/>
                    <div className='cardNum'>
                        10
                    </div>
                </div>
            </div>
            <div>
                and My Name is comment!
            </div>
        </div>
        </>
    )
}
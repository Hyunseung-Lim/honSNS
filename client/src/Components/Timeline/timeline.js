import React from 'react';
import { Card } from './Card/card'

import './timeline.css';

export const Timeline = () => {
    return(
        <>
            <div className='timeline'>
                <Card/>

                <Card/>

                <Card/>             
            </div>
        </>
    )
}
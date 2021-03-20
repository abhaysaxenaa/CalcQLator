import React from 'react';
import ScreenRow from './screenRow';

const Screen = props => {
    return (
        <div>
            <ScreenRow value={props.answer} textSize={{fontSize: '20px'}}/>
            <ScreenRow value={props.user} textSize={{fontSize: '40px'}}/>
        </div>
    )
}

export default Screen
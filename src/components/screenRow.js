import React from 'react';
import './screenRow.css';

const ScreenRow = props => {
    return (
        <div>
            <input type='text' readOnly className="result" style={props.textSize} value={props.value}></input>
        </div>
    )
}

export default ScreenRow
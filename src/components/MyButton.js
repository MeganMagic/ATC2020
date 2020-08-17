import React from 'react';
import '../css/MyButton.css';

function MyButton (props) {
    return (
        <div 
            className="Button" 
            onClick = {props.onClickEvent}
        >
            {props.message}
        </div>
    );
}

export default MyButton;
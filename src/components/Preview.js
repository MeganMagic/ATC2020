import React from 'react';
import '../css/Preview.css';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function Preview({ contentId, title, artist, genre }){
    return(
        <div
            className="preview" 
            id={`preview${contentId}`} 
        >
            <ScrollAnimation
                animateIn="fadeIn"
                duration={2}
            >
                <h2>{title}</h2>
                <ul>
                    {artist.map( a => (
                        <li>{a} </li>
                    ))}
                </ul>
                <h5>{genre}</h5>

            </ScrollAnimation>
            
        </div>
    );
}

export default Preview;
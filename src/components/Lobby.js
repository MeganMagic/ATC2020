import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
import '../css/Lobby.css';

import GNB from './GNB';
import Navigation from './Navigation';


function Lobby(props){    
    
    const myRef = useRef(null);

    const scrollChanger = (e) => {
        const diffY = e.deltaY;
        const diffX = e.deltaX;

        //velocity control
        if ( Math.abs(diffY) > Math.abs(diffX) ) {
            myRef.current.scrollLeft -= (diffY*0.3);
        }
        else {
            myRef.current.scrollLeft += (diffX*0.5);
        }

        //현재좌측위치 / (전체길이 - 화면길이) * 100
        // const percentage = myRef.current.scrollLeft / (myRef.current.scrollWidth - document.documentElement.clientWidth);
        // console.log(parseInt(pos));
    }
    
    const levelIndex = [6, '치즈', '투영', '이 게임은 처음부터 내가 졌어', 'DreamCatcher', 7];

    return(
        <div className="mainFrame" style={{color:props.color}}>
            <ul className="content" ref={myRef} onWheel={scrollChanger}>
                {props.children}
            </ul>
            
            <GNB color = {props.color}/>
            <Navigation color = {props.color}/>

            <div className="level-guide">
                <div className="index">
                    {levelIndex.map( (title, index) => <div key={index}>{title}</div>)}
                </div>
                <div className="bar" style={{backgroundColor:props.color}}></div>
                <div className="slider" 
                    style={{left: `400px`}}></div>
            </div>
        </div>
    );
}
export default Lobby;
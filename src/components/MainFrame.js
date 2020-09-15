import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
import '../css/MainFrame.css';

import GNB from './GNB';
import Navigation from './Navigation';


function MainFrame(props){    
    
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
        <div className="mainFrame">
            <ul className="content" ref={myRef} onWheel={scrollChanger}>
                {props.children}
                <li className="item-img next">대충 내려가는 길 이미지</li>
            </ul>
            
            <GNB />
            <Navigation />

            <div className="level-guide">
                <div className="index">
                    {levelIndex.map( (title, index) => <div key={index}>{title}</div>)}
                </div>
                <div className="bar"></div>
                <div className="slider" 
                    style={{left: `400px`}}></div>
            </div>
        </div>
    );
}
export default MainFrame;
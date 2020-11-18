import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GNB from './GNB';
import Item from './Item';
import Navigation from './Navigation';

import useScrollChange from './useScrollChange';
import levelObject from './levelObject';



const Lobby3 = (props) => {
    const { level, color, data, img } = props;
    const { comps, works } = data;
    const [ element, setElement ] = useState();
    const scrollChanger = useScrollChange();
    const history = useHistory();
    const frame = useRef();

    useEffect(()=>{
        console.log("child cdm");
        document.body.style.overflow = "hidden";
        setElement(levelObject[level-2](comps, works))

        //fade in
        frame.current.style.transition = `opacity 1s ease-in-out 0s`;
        frame.current.style.opacity = 1;
    }, [])

    const nextLevel =(
        level > 2 ?
        <li onClick={() => moveNextLevel(`/level/${level-1}`)}>
            move next level
        </li> :
        <li onClick={() => moveNextLevel('/level1')} >
            move Level 1
        </li>
    );
    const moveNextLevel = (nextPath) => {
        //fade out
        frame.current.style.opacity = 0;
        setTimeout(()=>{
            history.push(nextPath)
        }, 1000)
    }

    const mainFrame = (
        <div className="mainFrame" style={{color: color, opacity : 0}} ref={frame}>
            <ul className="content" {...scrollChanger}>
                <li className="item-intro">
                    <div className="flex-vertical-wrapper">
                        <img className="intro-img" alt={comps[0][1].v} src={img} />
                    </div>
                </li>
                {element}
                {nextLevel}
            </ul>
            <GNB />
            <Navigation />
        </div>
    );
    return(mainFrame);
}

export default Lobby3;
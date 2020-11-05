import React, {useState, useRef, Fragment} from 'react';
import GNB from '../components/GNB';
import Navigation from '../components/Navigation';
import Item from '../components/Item';
import '../css/Lobby.css';

import axios from 'axios';

const useGaroScroll = () => {
    const ref = useRef(null);
    const onWheel = (e) => {
        const diffY = e.deltaY;
        const diffX = e.deltaX;
        //velocity control
        if ( Math.abs(diffY) > Math.abs(diffX) ) {
            ref.current.scrollLeft -= (diffY*0.3);
        }
        else {
            ref.current.scrollLeft += (diffX*0.5);
        }
    }
    return {ref, onWheel}
}
const parsingData = (jsonData) => {
    const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
    const myData = JSON.parse( queryFrame.exec( jsonData.split('\n')[1] )['1'] ).table.rows.map((x)=>x.c);
    return myData;
}

const colorArray = [ null, null, "#161616", "#CC6865", "#4386B7", "#518C31", "#C0653E"];

const Lobby2 = (props) => {
    const [level, setLevel] = useState(6);
    const [data, setData] = useState();

    const getData = async () => {
        const keyOfLevelData = '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4';
        const keyOfWorksData = '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI';
        
        const getComps = await axios.get(`https://docs.google.com/spreadsheets/d/${keyOfLevelData}/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d${level}`);
        const comps = parsingData(getComps.data);
        const getWorks = await axios.get(`https://docs.google.com/spreadsheets/d/${keyOfWorksData}/gviz/tq?tq=SELECT+B%2c+C%2c+D%2c+H+WHERE+A%3d${level}`);
        const works = parsingData(getWorks.data)
    }

    console.log(getData());


    const scrollChanger = useGaroScroll();
    const nextLevel = () => {
        const curr = level;
        level > 2 ? setLevel(curr-1) : setLevel(curr);
    }
    return(
        <div className="mainFrame" style={{color:colorArray[level]}}>
            <ul className="content" {...scrollChanger}>
                <li>
                    hello level is {level}!
                </li>

                <li onClick={nextLevel}>
                    next Level
                </li>
            </ul>
            <GNB />
            <Navigation />

        </div>
    );
}

export default Lobby2;
import React, {useState, useRef, useEffect, Fragment} from 'react';
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
    const myData = JSON.parse( queryFrame.exec( jsonData.toString() )['1'] ).table.rows.map((x)=>x.c);
    console.log(myData);
    return myData;
}

const colorArray = [ null, null, "#161616", "#CC6865", "#4386B7", "#518C31", "#C0653E"];



const Lobby2 = (props) => {
    const scrollChanger = useGaroScroll();

    const [level, setLevel] = useState(6);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const keyOfLevelData = '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4';
    const fetchUsers = async () => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get(
                `https://docs.google.com/spreadsheets/d/${keyOfLevelData}/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d${level}`
            );
            setData(parsingData(response.data));
        } catch (e) { setError(e); }
        setLoading(false);
    };

    useEffect( () => { fetchUsers(); }, []);

    if (loading) return <div>loading...</div>;
    if (error) return <div>error!</div>;
    if (!data) return null;


    const nextLevel = () => {
        const curr = level;
        level > 2 ? setLevel(curr-1) : setLevel(curr);
        fetchUsers();
    }
    return(
        <div className="mainFrame" style={{color:colorArray[level]}}>
            <h1>{level}층</h1>
            <ul className="content" {...scrollChanger}>
                {data.map( (x, i) => (
                    <li key={i}> 
                        {x[0].v}
                    </li>
                ))}

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
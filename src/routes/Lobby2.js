import React, {useState, useRef, useEffect, Fragment} from 'react';
import GNB from '../components/GNB';
import Navigation from '../components/Navigation';
import Item from '../components/Item';
import ScrollChanger from '../components/ScrollChanger';
import '../css/Lobby.css';

import axios from 'axios';
import { delay } from 'lodash';


const parsingData = (jsonData) => {
    const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
    const myData = JSON.parse( queryFrame.exec( jsonData.toString() )['1'] ).table.rows.map((x)=>x.c);
    return myData;
}

const colorArray = [ null, null, "#161616", "#CC6865", "#4386B7", "#518C31", "#C0653E"];

const levelArray = (comps, works) => [ null, 
    //level 2
    <Fragment>
        <li>2층</li>
    </Fragment>,

    //level 3
    <Fragment>
        <li>3층</li>
    </Fragment>,

    //level 4
    <Fragment>
        <li>4층</li>
    </Fragment>,

    //level 5
    <Fragment>
        <li>5층</li>
    </Fragment>,
    //level 6
    <Fragment>
        <li>6층</li>
    </Fragment>
]


const Lobby2 = (props) => {
    const [level, setLevel] = useState(6);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [comps, setComps] = useState(null);
    const [works, setWorks] = useState(null);

    const keyOfLevelData = '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4';
    const keyOfWorksData = '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI';

    const fetchComps = async () => {
        try {
            setComps(null);
            setError(null);
            setLoading(true);
            const currLevel = level;
            const responseComps = await axios.get( `https://docs.google.com/spreadsheets/d/${keyOfLevelData}/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d${currLevel}`);
            setComps(parsingData(responseComps.data));
            const responseWorks = await axios.get( `https://docs.google.com/spreadsheets/d/${keyOfWorksData}/gviz/tq?tq=SELECT+B%2c+C%2c+D%2c+H+WHERE+A%3d${currLevel}`);
            setWorks(parsingData(responseWorks.data));
        } catch (e) { setError(e); }
        setLoading(false);

    };

    useEffect( () => { fetchComps(); }, []);

    if (loading) return <div>loading...</div>;
    if (error) return <div>error!</div>;
    if (!comps) return null;


    const nextLevel = () => {
        const curr = level - 1;
        setLevel(curr);
        fetchComps();
        console.log(`now level is ${level}`);
    }

    return(
        <div className="mainFrame" style={{color:colorArray[level]}}>
            <ScrollChanger>
                <li>{level}</li>
                <li className="item-intro">
                    <div className="flex-vertical-wrapper">
                        <img className="intro-img" alt="독립적인" src={require(`../data/level${level}.png`)} />
                    </div>
                </li>

                {levelArray(comps, works)[level]}
                {comps.map(x => <li>{x[1].v}</li>)}

                <li onClick={nextLevel}>
                    next Level
                </li>
            </ScrollChanger>

            <GNB />
            <Navigation />

        </div>
    );
}

export default Lobby2;
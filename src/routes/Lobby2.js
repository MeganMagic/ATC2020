import React, {useState, useRef, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import GNB from '../components/GNB';
import Navigation from '../components/Navigation';
import Item from '../components/Item';
import '../css/Lobby.css';

import useScrollChange from '../components/useScrollChange';
import useAxiosTwice from '../components/useAxiosTwice';
import levelObject from '../components/levelObject';

import axios from 'axios';
import queryStirng from 'query-string'


const keyOfLevelData = '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4';
const keyOfWorksData = '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI';
const compsUrl = (level) => `https://docs.google.com/spreadsheets/d/${keyOfLevelData}/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d${level}`;
const worksUrl = (level) => `https://docs.google.com/spreadsheets/d/${keyOfWorksData}/gviz/tq?tq=SELECT+B%2c+C%2c+D%2c+H+WHERE+A%3d${level}`;
    
const colorArray = [ null, null, "#161616", "#CC6865", "#4386B7", "#518C31", "#C0653E"];


const Lobby2 = (props) => {
    //level
    const {search} = props.location;
    const [level, setLevel] = useState(
        search && queryStirng.parse(search).level ? 
        queryStirng.parse(search).level
        : 6
    );

    //Hooks call
    const scrollChanger = useScrollChange();
    const { comps, works, loading, error, refetch } = useAxiosTwice({compsUrl : compsUrl(level), worksUrl : worksUrl(level)}, axios);

    const moveNextLevel = async() => {
        setLevel(level => level - 1);
        refetch();
    }
    const nextElement = () => (
        level > 2 ?
        <li onClick={moveNextLevel}>
            next Level
        </li> 
        : 
        <Link to="/Level1">
            <li>go to level 1</li>
        </Link>
    );

    if(loading) { return( <div>loading...</div>)}
    if(error) { return( <div>error!</div>)}
    console.log(comps);
    return(
        <div className="mainFrame" style={{color:colorArray[level]}}>
            <ul className="content" {...scrollChanger} >
                <li>{level}</li>
                <li className="item-intro">
                    <div className="flex-vertical-wrapper">
                        <img className="intro-img" alt="독립적인" src={require(`../data/level${level}.png`)} />
                    </div>
                </li>


                {levelObject[level - 2](level, comps, works)}

                {nextElement()}
            </ul>

            <GNB />
            <Navigation />

        </div>
    );
}

export default Lobby2;
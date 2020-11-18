import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';
import Lobby3 from '../components/Lobby3';
import levelObject from '../components/levelObject';
import useAxiosTwice from '../components/useAxiosTwice';

import axios from 'axios';


const keyOfLevelData = '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4';
const keyOfWorksData = '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI';
const compsUrl = (level) => `https://docs.google.com/spreadsheets/d/${keyOfLevelData}/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d${level}`;
const worksUrl = (level) => `https://docs.google.com/spreadsheets/d/${keyOfWorksData}/gviz/tq?tq=SELECT+B%2c+C%2c+D%2c+H+WHERE+A%3d${level}`;
const colorArray = [ null, null, "#161616", "#CC6865", "#4386B7", "#518C31", "#C0653E"];


const Level = (props) => {
    const level = props.match.params.level;
    const location = useLocation();
    const [element, setElement] = useState();
    const { works, comps, loading, error, refetch } = useAxiosTwice({compsUrl : compsUrl(level), worksUrl : worksUrl(level)});
    //cdm
    useEffect(()=>{
        console.log("parent cdm");
    }, [])
    //cdu
    useEffect(()=>{
        console.log("parent cdu");
        refetch();
    }, [level]);

    //early exit. loading Page
    if(loading){
        console.log('loading...');
        return(<div>loading...</div>)
    }
    
    console.log(comps);
    console.log(works);
    return(
        <Lobby3 level={level} color={colorArray[level]} data={{comps, works}} img={require(`../data/level${level}.png`)}/>
    )
    
}

export default Level;
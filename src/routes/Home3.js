import React, { useEffect } from 'react';
import {Link, Route} from 'react-router-dom';
import Level  from './Level';
import '../css/Home3.css';

import axios from 'axios'

function Home3(props){
    const holder = require('../data/poster-temp.png');

    return(
        <div id="home-wrapper">
            <div className="home3">
                <div className="logo">ATC2020:AND</div>
                <div className="line"></div>

                <Link to="/level/6">
                    <div className="section enter">
                        <div>관람하기</div>
                    </div>
                </Link>
                <div className="section gnb3">
                    <div className="item">ATC2020 소개</div>
                    <div className="item">STAFF</div>
                    <div className="item">ARTISTS</div>
                    <div className="item">연혁</div>
                </div>
                <div className="designFrame">
                    <img src={holder}/>
                </div>
            </div>
        </div>
    );
}

export default Home3;
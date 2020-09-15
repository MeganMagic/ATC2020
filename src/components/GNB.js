import React from 'react';
import { Link } from 'react-router-dom';
import '../css/GNB.css';

function GNB(props){
    return (
        <div className="gnb">
            <div className="item logo">&and</div>
            <div className="item"><Link to="/introduction">소개</Link></div>
            <div className="item"><Link to="/level/7">관람</Link></div>
            <div className="item"><Link to="/store">스토어</Link></div>
            <div className="item"><Link to="/staffsAndArtists">만든 사람들</Link></div>
            <div className="item">
                <input type="text"/>
                <button >검색</button>
            </div>
        </div>
    );
}

export default GNB
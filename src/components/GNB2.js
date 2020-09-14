import React from 'react';
import { Link } from 'react-router-dom';
import "../css/GNB2.css";

function GNB2 (props) {
    return(
        <div className="GNB2">
            <div className="gnb-item logo">&and</div>
            <div className="gnb-item"><Link to="/introduction">소개</Link></div>
            <div className="gnb-item"><Link to="/level/7">관람</Link></div>
            <div className="gnb-item"><Link to="/store">스토어</Link></div>
            <div className="gnb-item"><Link to="/staffsAndArtists">만든 사람들</Link></div>
            <div className="gnb-item">
                <input type="text"/>
                <button >검색</button>
            </div>
        </div>
    );
}

export default GNB2;
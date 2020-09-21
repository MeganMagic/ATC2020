import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import '../css/GNB.css';

function GNB(props){
    let w = document.documentElement.clientWidth;
    const debounceFunc = _.debounce(()=>{
        w = document.documentElement.clientWidth;
        console.log("new width : "+ w);
    }, 200);
    window.onresize = (e) => debounceFunc();
    //추후 class형 component로 변경할 것 

    let element = w < 768 ? 
        <React.Fragment>
            <div className="item menu">=</div>
            <div className="item logo">&and</div>
            <div className="blank"> </div>

            <div className="menu-hide">
                <div className="item"><Link to="/introduction">소개</Link></div>
                <div className="item"><Link to="/level/7">관람</Link></div>
                <div className="item"><Link to="/store">스토어</Link></div>
                <div className="item"><Link to="/staffsAndArtists">만든 사람들</Link></div>
                <div className="item">
                    <input type="text"/>
                    <button >검색</button>
                </div>
            </div>
        </React.Fragment>
    :  
        <React.Fragment>
            <div className="item logo">&and</div>
            <div className="item"><Link to="/introduction">소개</Link></div>
            <div className="item"><Link to="/level/7">관람</Link></div>
            <div className="item"><Link to="/store">스토어</Link></div>
            <div className="item"><Link to="/staffsAndArtists">만든 사람들</Link></div>
            <div className="item">
                <input type="text"/>
                <button >검색</button>
            </div>
        </React.Fragment>
    ;
    
    return (
        <div className="gnb">
            {element}
        </div>
    );
}

export default GNB
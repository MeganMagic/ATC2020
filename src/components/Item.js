import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Item.css';

function Item({title, desc, head, sub, entrance, detailHead, detailImg, artists, imgSrc, entranceLevel, entranceId}){
    const subTitleLine = require('../data/sub-title-line.png');

    const headFrame = (
        <li className="item-text item-title">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
        </li>
    );
    const subFrame = (
        <li className="item-text">
            <img className="sub-title-line" src={subTitleLine} alt="line" />
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
        </li>
    )
    const entranceFrame = (
        <li className="item-entrance">
            <div className="flex-row-wrapper">
                <Link to={`/detail?level=${entranceLevel}&id=${entranceId}`}>
                    <img className="thumbnail" alt="thumbnail" src={imgSrc}></img>
                </Link>
                <div className="info">
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </div>
            </div>
        </li>
    );

    const defaultFrame = (
        <li className="item-text item-title">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
        </li>
    );

    
    return(
        head? headFrame : 
        sub? subFrame :
        entrance? entranceFrame:
        defaultFrame
    );
}

export default Item;
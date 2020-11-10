import React, {Fragment, useState, useEffect, useRef} from 'react';
import GNB from '../components/GNB'
import '../css/Gallery.css';

import axios from 'axios';

const color = "#4386B7";
const ipsum = `우리는 무언가를 구분할 때 흔히 경계를 짓습니다. 그어진 경계는 보통 고유한 특성을 가지고 있지만 때론 그 벽에 틈새가 생겨 경계가 허물어지기도 합니다. 우리가 선을 긋거나 지우면 세상은 변화합니다. 옳고 그른 것을 가르는 경계가 사회를 만들고, 각자가 만든 생각의 선이 ‘나’를 만들며, 무너진 장벽이 세계를 하나로 이어주는 것처럼 말이죠. 과거의 벽을 무너뜨리는 동시에 새로운 벽을 세우는 세상 속, 어느새 어제의 상상은 오늘이 되어 미래와 치열한 접점을 이룹니다.`;

const artist = (key, name) => (
    <div className="item" key={key}>
        <div className="profile" style={{backgroundImage:"url(https://i1.sndcdn.com/avatars-000356327339-k426jj-t500x500.jpg)"}} ></div>
        <div className="name">{name}</div>
        <div className="contact">atstaff@sogang.ac.kr</div>
    </div>
)
const Gallery = (props) => {
    //call one
    useEffect(()=>{
        document.body.style.overflow = "auto";
    }, [])

    const width = 800;
    const element = (
        <div className="mainFrame" style={{color}}>

            <div className="Gallery" >
                <div className="section intro">
                    <div className="wrapper">
                        <div className="title">이글루 만들기 대작전</div>
                        <div className="genre">게임</div>
                        <iframe className="video" width={width} height={width*0.5625} src="https://www.youtube.com/embed/qZGwRz8wnSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="desc">{ipsum}</div>
                    </div>
                    
                </div>
                <div className="line" style={{backgroundColor:color}}></div>

                <div className="section detail">
                    <div className="title">
                        <div className="text">작품 상세</div>
                    </div>
                    <div className="wrapper">
                        <img  alt="detail image1" src="https://images.nintendolife.com/3c19a9e55873f/kirbynormal.original.jpg"/>
                        <img  alt="detail image2" src="https://images.nintendolife.com/3c19a9e55873f/kirbynormal.original.jpg"/>
                        <img  alt="detail image3" src="https://images.nintendolife.com/3c19a9e55873f/kirbynormal.original.jpg"/>
                        <div className="desc">{ipsum}<br/><br/>{ipsum}<br/><br/>{ipsum}</div>
                        <div>작품 영상</div>
                        <div>작품 링크</div>
                    </div>
                </div>
                <div className="line" style={{backgroundColor:color}}></div>

                <div className="section artist">
                    <div className="title">
                        <div className="text">아티스트</div>
                    </div>
                    <div className="wrapper">
                        <div className="teamName">미네랄 성지수</div>
                        <div className="list">
                            {artist(0, "황진이")}
                            {artist(1, "광진이")}
                            {artist(2, "팡진이")}
                            {artist(3, "명진이")}
                            {artist(4, "경진이")}
                        </div>
                    </div>
                </div>

                <div className="goBack">
                    <div className="text">로비로 나가기</div>
                </div>
            </div>

            <GNB />
        </div>
    );
    return(element)
}

export default Gallery
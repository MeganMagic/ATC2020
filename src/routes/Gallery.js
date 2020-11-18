import React, {Fragment, useState, useEffect, useRef} from 'react';
import GNB from '../components/GNB'
import parsingData from '../components/parsingData';
import '../css/Gallery.css';

import axios from 'axios';

const ipsum = `우리는 무언가를 구분할 때 흔히 경계를 짓습니다. 그어진 경계는 보통 고유한 특성을 가지고 있지만 때론 그 벽에 틈새가 생겨 경계가 허물어지기도 합니다. 우리가 선을 긋거나 지우면 세상은 변화합니다. 옳고 그른 것을 가르는 경계가 사회를 만들고, 각자가 만든 생각의 선이 ‘나’를 만들며, 무너진 장벽이 세계를 하나로 이어주는 것처럼 말이죠. 과거의 벽을 무너뜨리는 동시에 새로운 벽을 세우는 세상 속, 어느새 어제의 상상은 오늘이 되어 미래와 치열한 접점을 이룹니다.`;
const colorArray = [ null, null, "#161616", "#CC6865", "#4386B7", "#518C31", "#C0653E"];
const width = 800;
const url = (workID) => `https://docs.google.com/spreadsheets/d/1pyAsDTCxzieDew0aZLHhIQpAgG6smwTqhGy3kcvE5n4/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d%22${workID}%22`;

const item = {
    text : (key, content) => (
        <div className="item desc" key={key} >{content}</div>
    ),
    image : (key, src) => (
        <div className="item image" key={key}>
            <img alt="detail imgae" src={src} />
        </div>
    ),
    video : (key,src) => (
        <iframe className="item video" key={key} width={width} height={width*0.5625} src={src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    ),
    link : (key, src, href) => (
        <a className="item link" key={key} href={href} target="_blank">
            <img alt="link" src={src} key={key} />
        </a>
    ) 
};
const makeItems = (workDetailData) => {
    let returnItems = [];
    workDetailData.map((d, index) => {
        if(d.type === "text") returnItems.push( item.text(index, d.content1) );
        else if(d.type === "image") returnItems.push( item.image(index, d.content1) );
        else if(d.type === "video") returnItems.push( item.video(index, d.content1) );
        else if(d.type ===  "link") returnItems.push( item.link(index, d.content1, d.content2) );
    });
    return(returnItems);
}

const useGalleryData = (workID) => {
    const workInfoUrl = `https://docs.google.com/spreadsheets/d/1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI/gviz/tq?tq=SELECT+A%2c+C%2c+F%2c+G%2c+I%2c+J+WHERE+B%3d%22${workID}%22`;
    const workDetailUrl = `https://docs.google.com/spreadsheets/d/1pyAsDTCxzieDew0aZLHhIQpAgG6smwTqhGy3kcvE5n4/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d%22${workID}%22`;

    const [state, setState] = useState({
        loading : true,
        error : null,
        workInfo : { title:null, level:null, artist:[], genre:null, archivingVideoLink:null, detailDescription:null},
        workDetail : null
    })
    useEffect( () => {
        axios.all([
            axios.get(workInfoUrl),
            axios.get(workDetailUrl)
        ])
        .then(axios.spread( (data1, data2) => {
            const workInfo = parsingData(data1.data, "workInformation")[0];
            const workDetail = parsingData(data2.data, "workDetail");
            setState({
                ...state,
                loading : false,
                workInfo,
                workDetail
            })
        }))
        .catch(error => {
            setState({
                ...state,
                loading : false,
                error
            })
        })
    }, [])
    return { ...state }
}


const artist = (key, name) => (
    <div className="item" key={key}>
        <div className="profile" style={{backgroundImage:"url(https://i1.sndcdn.com/avatars-000356327339-k426jj-t500x500.jpg)"}} ></div>
        <div className="name">{name}</div>
        <div className="contact">atstaff@sogang.ac.kr</div>
    </div>
)


const Gallery = (props) => {
    const { level, workID } = props.match.params;
    const color = colorArray[level];

    const { loading, error, workInfo, workDetail } = useGalleryData(workID);
    const [ detailItems, setDetailItems ] = useState([]);
    //cdm
    useEffect(()=>{
        console.log("Gallery cdm");
        document.body.style.overflow = "auto";
    }, [])
    //cdu
    useEffect(()=>{
        console.log("Gallery cdu (by workDetail)")
        if(workDetail){
            setDetailItems(makeItems(workDetail));
        }
    }, [workDetail])


    const element = (
        <div className="mainFrame" style={{color}}>

            <div className="Gallery" >
                <div className="section intro">
                    <div className="wrapper">
                        <div className="title">{workInfo.title}</div>
                        <div className="genre">{workInfo.genre}</div>
                        <iframe className="video" width={width} height={width*0.5625} src={workInfo.archivingVideoLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="desc">{workInfo.detailDescription}</div>
                    </div>
                    
                </div>
                <div className="line" style={{backgroundColor:color}}></div>

                <div className="section detail">
                    <div className="title">
                        <div className="text">작품 상세</div>
                    </div>
                    <div className="wrapper"> {detailItems} </div>
                </div>
                <div className="line" style={{backgroundColor:color}}></div>

                <div className="section artist">
                    <div className="title">
                        <div className="text">아티스트</div>
                    </div>
                    <div className="wrapper">
                        <div className="teamName">미네랄 성지수</div>
                        <div className="list">
                            {workInfo.artist.map((data, index) => artist(index, data))}
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

    if(loading) return(<div>Loading...</div>)
    if(error) return(<div>error!</div>)

    console.log(workInfo);
    console.log(workDetail);
    return(element)
}

export default Gallery
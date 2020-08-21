import React from 'react';
import DATA from '../data.json';
import GNB from '../components/GNB';
import '../css/Detail.css';

import withStyles, {css} from '../withStyles';
import queryString from 'query-string';

class Detail extends React.Component{
    constructor(props){
        super(props);
        const queryID = queryString.parse(this.props.location.search).id * 1;
        this.state = {
            contentID : queryID,
        };
    }

    render(){
        const data = DATA.filter( 
            ({ id }) => id === this.state.contentID 
        )[0];

        const width = document.documentElement.clientWidth;
        const iframe = (url) => (
            <iframe 
                title={data.title} 
                width={width} height={width*0.5625}
                src={url} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>    
            </iframe>
        );
        console.log(data);
        console.log(this.state);

        return(
            <div {...css(this.props.styles.light)}>
                <GNB />
                <h1>{this.state.contentID}</h1>
                <h1>detail page</h1>
                <h2>제목 - {data.title}</h2>
                <h6>장르 - {data.genre}</h6>
                <h6>작가 - {data.artist}</h6>
                <h2>소개영상 </h2>
                {iframe(data.introVideo)}
                
                <h5>작품 내용</h5>
                {data.desc.split('<br/>').map((line) => {
                    return (<span>{line}<br/><br/></span>)
                } )}
            </div>
        );
    }

}

export default withStyles( ({color, size}) => ({
    light : {
        backgroundColor : color.backgroundLight,
        color : color.primaryLight,
        size : size.md,
    },
    dark : {
        backgroundColor : color.backgroundDark,
        color : color.primaryDark,
        size : size.md,
    }
}) ) (Detail);
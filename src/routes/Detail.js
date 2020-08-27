import React from 'react';
import DATA from '../data.json';
import GNB from '../components/GNB';
import '../css/Detail.css';

import withStyles, {css} from '../withStyles';
import {Link} from 'react-router-dom';

class Detail extends React.Component{
    constructor(props){
        super(props);
        const queryID = this.props.match.params.key * 1;
        const data = DATA.filter( ({id}) => id === queryID )[0];
        this.state = {
            contentID : queryID,
            data : data,
        };

        window.scrollTo(0,0);
    }



    render(){
        const width = document.documentElement.clientWidth;
        const iframe = (url) => (
            <iframe title={data.title} width={width} height={width*0.5625}
                src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>    
            </iframe>
        );        

        const { data } = this.state;
        console.log(this.props.match.params);
        return(
            <div className="detail" >
                <GNB />

                <div className="wrapper">
                    <div className="detail-info">
                        <h1>{this.state.contentID}</h1>
                        <h1>{data.title}<br/></h1>
                        <ul>{data.artist.map((a, i) => <li key={i}>{a}</li> )}</ul>
                        <span>{data.genre}</span>
                    </div>
                    <div className="detail-content">
                        {iframe(data.introVideo)}

                        {data.desc.split('<br/>').map((line) => {
                        return (<span>{line}<br/><br/></span>)
                        })}
                    </div>
                </div>

                
                <div>
                    <Link to="/detail/3">다음 작품으로</Link>
                </div>
                
                
                
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
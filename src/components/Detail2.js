import React from 'react';
import DATA from '../data.json';
import GNB from '../components/GNB';

class Detail2 extends React.Component{

    
    render(){
        const contentID = this.props.contentID;
        const data = DATA.filter( ({id}) => id === contentID )[0];

        const width = document.documentElement.clientWidth;
        const iframe = (url) => (
            <iframe title={data.title} width={width} height={width*0.5625}
                src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>    
            </iframe>
        );  

        return(
            <div>
                <GNB />

                <div className="wrapper">
                    <div className="detail-info">
                        <h1>{this.props.contentID}</h1>
                        <h1>{data.title}<br/></h1>
                        <ul>{data.artist.map((a, i) => <li key={i}>{a}</li> )}</ul>
                        <span>{data.genre}</span>
                    </div>

                    <div className="detail-content">
                        {iframe(data.introVideo)}
                        
                        {data.desc.split('<br/>').map((line, i) => {
                        return (<span key={i}>{line}<br/><br/></span>)
                        })}
                    </div>
                </div>


            </div>
        );
    }
}

export default Detail2
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import MainFrame from '../components/Lobby';
import Item from '../components/Item';

const parsingData = (jsonData) => {
    const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
    const myData = JSON.parse( queryFrame.exec( jsonData.split('\n')[1] )['1'] ).table.rows.map((x)=>x.c);
    return myData;
}

class Level5 extends React.Component{
    state = {
        isLoading : true,
        isError : false,
        keyOfLevelData : '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4',
        keyOfWorksData : '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI',
        level : 5
    }

    getComps = async () => {
        const level = await axios.get(`https://docs.google.com/spreadsheets/d/${this.state.keyOfLevelData}/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d${this.state.level}`);
        const parsedLevelData = parsingData(level.data);
        const works = await axios.get(`https://docs.google.com/spreadsheets/d/${this.state.keyOfWorksData}/gviz/tq?tq=SELECT+B%2c+C%2c+D%2c+H+WHERE+A%3d${this.state.level}`);
        const parsedWorksData = parsingData(works.data)
        this.setState({
            isLoading : false,
            levelData : parsedLevelData,
            worksData : parsedWorksData
        })
    }

    componentDidMount(){
        this.getComps();
    }


    returnLoadingPage(){
        return(
            <div>{`${this.state.level}층`}</div>
        );
    }
    
    returnElement(){
        const comps = this.state.levelData;
        const works = this.state.worksData;
        return(
            <Fragment>
                <li className="item-intro">
                    <div className="flex-vertical-wrapper">
                        <img className="intro-img" alt="독립적인" src={require('../data/level5.png')} />
                    </div>
                </li>

                <Item head  title={comps[0][1].v} desc={comps[0][2].v} />

                <Item sub title={comps[1][1].v} desc={comps[1][2].v} />

                <Item entrance 
                    entranceID = {comps[2][1].v} entranceLevel = {this.state.level}
                    title={works[0][1].v} desc={works[0][2].v} imgSrc={works[0][3].v}
                />

                <Item entrance 
                    entranceID = {comps[3][1].v} entranceLevel = {this.state.level}
                    title={works[1][1].v} desc={works[1][2].v} imgSrc={works[1][3].v}
                />

                <Item entrance 
                    entranceID = {comps[4][1].v} entranceLevel = {this.state.level}
                    title={works[2][1].v} desc={works[2][2].v} imgSrc={works[2][3].v}
                />

                <Item entrance 
                    entranceID = {comps[5][1].v} entranceLevel = {this.state.level}
                    title={works[3][1].v} desc={works[3][2].v} imgSrc={works[3][3].v}
                />

                <li className="item">
                    <Link to={{
                        pathname : "./level5",
                        state : {level:4}
                    }}>
                        다음 층으로
                    </Link>
                </li>


            </Fragment>
        );
    }


    render(){
        console.log(this.state);
        return(
            <MainFrame color="#518C31">
                {this.state.isLoading ? this.returnLoadingPage() 
                    : this.returnElement()
                }
            </MainFrame>
        );
    };

}

export default Level5;
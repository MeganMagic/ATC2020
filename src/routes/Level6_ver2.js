import React, { Fragment } from 'react';
import axios from 'axios';

import MainFrame from '../components/MainFrame';
import Item from '../components/Item';

const parsingData = (jsonData) => {
    const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
    const myData = JSON.parse( queryFrame.exec( jsonData.split('\n')[1] )['1'] ).table.rows.map((x)=>x.c);
    return myData;
}

const getWorkData = (workID, key) => {
    const urlQuery = `SELECT+B%2c+C%2c+D%2c+H+WHERE+B%3d%22${workID}%22`;
    const url = `https://docs.google.com/spreadsheets/d/${key}/gviz/tq?tq=${urlQuery}`;
    const promise = axios.get(url).then( (res) => 
        parsingData(res.data)
    )
    .catch( (error) => { console.log(error); })

    promise.then( x =>  {
        return( {
            title : x[0][1].v,
            desc : x[0][2].v,
            imgSrc : x[0][3].v
        } )
    })
    // const fineData = {
    //     title : mydata[0][1].v,
    //     desc : mydata[0][2].v,
    //     imgSrc : mydata[0][3].v
    // }

    // return(fineData);
}

class Level6 extends React.Component{
    constructor(props){
        super(props);
        const keyOfLevelData = '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4';
        const keyOfItemData = '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI';
        const level = 6;

        this.state = {
            keyOfLevelData,
            keyOfItemData,
            level,
            isLoading : true,
            isError : false
        };
    }

    componentDidMount(){
        axios.get(`https://docs.google.com/spreadsheets/d/${this.state.keyOfLevelData}/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d6`)
        .then( (result) => {
            const { data } = result;
            const levelData = parsingData(data);
            this.setState({
                isLoading : false,
                levelData : levelData
            });
        })
        .catch( (error) => {
            console.log(error);
            this.setState({
                isLoading : false,
                isError : true
            });
        })
    }

    
    entranceElement(workID){
        const urlQuery = `SELECT+B%2c+C%2c+D%2c+H+WHERE+B%3d%22${workID}%22`;
        const url = `https://docs.google.com/spreadsheets/d/${this.state.keyOfItemData}/gviz/tq?tq=${urlQuery}`;
        let mydata = [];
        axios.get(url).then( (result) => {
            const {data} = result;
            const itemData = parsingData(data);
            mydata.push(itemData[0]);
        })
        .catch( (error) => { console.log(error); })
        
        return( 
            <Item entrance 
                entranceId={workID} entranceLevel={this.state.level}
                title={mydata[0][1].v} desc={mydata[0][2].v} imgSrc={mydata[0][3].v}
            />
        );

    }

    returnLoadingPage(){
        return(
            <div>Loading...</div>
        );
    }
    
    returnElement(){
        const temp = getWorkData("work-1", this.state.keyOfItemData);
        console.log(temp);
        return(
            <Fragment>
                <li className="item-intro">
                    <div className="flex-vertical-wrapper">
                        <img className="intro-img" alt="독립적인" src={require('../data/level6.png')} />
                    </div>
                </li>

                <Item head 
                    title={this.state.levelData[0][1].v} 
                    desc={this.state.levelData[0][2].v} />

                <Item entrance 
                    entranceID = {this.state.levelData[2][1].v} entranceLevel = {this.state.level}
                />

                {this.state.levelData.map((data, i) => {
                    return(
                        data[0].v === "head" ?
                            <Item head title={data[1].v} desc={data[2].v} key={i}/>
                        : data[0].v === "sub" ?
                            <Item sub title={data[1].v} desc={data[2].v} key={i}/>
                        : data[0].v ==="entrance" ? 
                            <Item entrance entranceId={data[0].v} entranceLevel={this.state.level}    
                                {...getWorkData(data[1].v, this.state.keyOfItemData)}
                            />
                        : <li></li>
                    )
                })}
            </Fragment>
        );
    }


    render(){
        console.log(this.state);
        return(
            <MainFrame color="#ce5e32">
                {this.state.isLoading ? this.returnLoadingPage() 
                    : this.returnElement()
                }
            </MainFrame>
        );
    };

}

export default Level6;
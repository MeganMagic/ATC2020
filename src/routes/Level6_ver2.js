import React, { Fragment } from 'react';
import axios from 'axios';

import MainFrame from '../components/MainFrame';
import Item from '../components/Item';

const parsingData = (jsonData) => {
    const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
    const myData = JSON.parse( queryFrame.exec( jsonData.split('\n')[1] )['1'] ).table.rows.map((x)=>x.c);
    return myData;
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


    returnLoadingPage(){
        return(
            <div>Loading...</div>
        );
    }
    
    render(){
        const element = (
            <Fragment>
                <li className="item-intro">
                    <div className="flex-vertical-wrapper">
                        <img className="intro-img" alt="독립적인" src={require('../data/level6.png')} />
                    </div>
                </li>

                <Item head title="조화" desc="입숨" />
            </Fragment>
        );

        console.log(this.state);
        return(
            <MainFrame color="#ce5e32">
                {this.state.isLoading ? this.returnLoadingPage() 
                    : element
                }
            </MainFrame>
        );
    };

}

export default Level6;
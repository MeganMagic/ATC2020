import React, {Component} from 'react';
import Data from '../data.json';
//import './css/Tour.css';

import Navigation from '../components/Navigation';
import Content from '../components/Content';

class Tour extends Component{
    constructor(props){
        super(props);
        this.state = {curr: 0};
    }
    
    getData(idnum) {
        return ( Data[idnum] );
    };

    getIndex(data) {
        return data.map( x => x.title );
    }



    render(){
        const indexList = Data.map(x => ({id: x.id, title: x.title}) );
        return(
            <div className="container">
                <div>NOW ID : {this.state.curr} </div>
                <Navigation  indexList={indexList} curr={this.state.curr}/>
                <Content />
            </div>
        );
        //1. navigation

        //2. Content
    }
}

export default Tour;
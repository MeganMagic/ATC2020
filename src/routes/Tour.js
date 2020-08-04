import React, {Component} from 'react';
import Data from '../data.json';
//import './css/Tour.css';

class Tour extends Component{
    constructor(props){
        super(props);
        this.state.curr = 0;
    }
    
    getData(idnum) {
        return ( Data[idnum] );
    };

    getIndex(data) {
        return data.map( x => x.title );
    }

    render(){
        return(
            <div className="container">
                <Navigation  />
                <Content />
            </div>
        );
        //1. navigation

        //2. Content
    }
}

export default Tour;
import React from 'react';
import Detail2 from "../components/Detail2";
import  '../css/View.css';

import Axios from 'axios';

class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transition : false,
            contentID : 1,
        };
        this.moveNext = this.moveNext.bind(this);
    }

    moveNext(nextID){
        this.setState({contentID : nextID})
    }

    componentDidUpdate(prevState){
        if(prevState.contentID !== this.state.contentID) {
            window.scrollTo(0,0);
        }
    }

    render(){
        const next = this.state.contentID + 1;

        return(
            <div className="View">
                <div className="Detail animationBox">
                    <Detail2 contentID={this.state.contentID} />
                </div>

                <div value={10} onClick={() => this.moveNext(next)}>
                    test button
                </div>
                {/* <div onClick={transition}>
                    transition test
                </div> */}
            </div>
        );
    }

}

export default View;
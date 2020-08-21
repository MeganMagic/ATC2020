import React from 'react';
import '../css/ScrollTester.css';

import _ from 'lodash';


class ScrollTester extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrollTop : 0,
            delayScrollTop : 0,
            scrollDir : null,
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            this.onScroll();
            this.checkScrollDir();
            }
        );
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', () => {
            this.onScroll();
            this.checkScrollDir();
        });
    }

    render(){
        
        return(
            <div id="scroll-tester" >
                <h1>SCROLL TEST</h1>
                <br/>
                <h4>현재 스크롤 위치(상단) : {this.state.scrollTop}</h4>
                <h4>스크롤 방향 : {this.state.scrollDir}</h4>
            </div>
        );
    }

    onScroll = (e) => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop !== this.state.scrollTop){
            this.setState({scrollTop});
        }
    }
    checkScrollDir = _.throttle( () => {
        const newScrollTop = document.documentElement.scrollTop;
        const scrollDiff = this.state.delayScrollTop - newScrollTop;

        if (scrollDiff > 0 && this.state.scrollDir !== 'UP'){
            this.setState({scrollDir : 'UP'});
        }
        else if (scrollDiff < 0 && this.state.scrollDir !== 'DOWN'){
            this.setState({scrollDir : 'DOWN'});
        }
        this.setState({delayScrollTop : newScrollTop});
    }, 500 )
}

export default ScrollTester;
import React from 'react';
import '../css/ScrollTester.css';


class ScrollTester extends React.Component{

    render(){
        return(
            <div id="scroll-tester" >
                <h1>SCROLL TEST</h1>
                <br/>
                <h4>현재 스크롤 위치(상단) : {this.props.scrollTop}</h4>
                <h4>현재 보고있는 콘텐츠 번호 : {this.props.currContent}</h4>
            </div>
        );
    }
}

export default ScrollTester;
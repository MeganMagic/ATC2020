import React, {Component} from 'react';
import Data from '../data.json';
import '../css/Tour.css';
import 'animate.css';


//import Navigation from '../components/Navigation';
import ScrollTester from '../components/ScrollTester';
//import Content from '../components/Content';

class Tour extends Component{
    constructor(props){
        super(props);
        this.state = {
            currContent: 0        
        };
        this.getScrollPosition = this.getScrollPosition.bind(this);
    }
    
    getScrollPosition(event){
        const getContentID = event.target.getAttribute('data_to_pass');

        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const elementPosition = document.querySelector(getContentID).offsetTop;
        const clientHeight = document.documentElement.clientHeight;

        console.log(scrollPosition, getContentID, elementPosition);
        console.log("바닥 위치 :", elementPosition + clientHeight);

        window.scrollTo({top:elementPosition + clientHeight, behavior:'smooth'});
    }

    // componentDidMount(){
    //     window.addEventListener('scroll', this.onScroll);
    // }
    // onScroll = (e) => {
    //     const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    //     this.setState({ scrollTop });

    //     const nthContent = parseInt( (scrollTop + 100) / document.documentElement.clientHeight);
    //     if( this.state.currContent !== nthContent){
    //         console.log(nthContent);
    //         this.setState({currContent : nthContent});
    //     }
    // }
    // componentWillUnmount(){
    //     window.removeEventListener(this.onScroll);
    // }


    render(){
        return(
            <div className="container">
                
                <ScrollTester 
                    scrollTop = {this.state.scrollTop}  
                    currContent = {this.state.currContent}              
                />


                {Data.map((d, index) => (
                    <div 
                        className="content 
                            animate__animated 
                            animate__fadeIn" 
                        id={`content${index}`}
                    >
                        {d.title} <br/>
                        {d.genre} <br/>
                        {d.desc} <br/>
                        {d.artist.map(a => <span>{`${a}  `}</span>)} <br/><br/>

                        <button 
                            onClick={this.getScrollPosition} 
                            data_to_pass={`#content${index}`}
                        >
                                scroll position
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Tour;
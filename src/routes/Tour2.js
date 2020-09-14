import React from 'react';
import '../css/Tour.css';
import ScrollTester from '../components/ScrollTester';
import Data from '../data.json';

//module
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';





class Tour2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        window.addEventListener('scroll', this.getScrollTop);
    }
    getScrollTop = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        this.setState({scrollTop});
    }

    render(){
        return(
            <div className="container" >
                <ScrollTester 
                    scrollTop = {this.state.scrollTop}

                />
                {Data.map( (data) => (
                    <ScrollAnimation
                        animateIn="fadeIn"
                        duration={1}    
                    >
                        <div
                            contentId = {data.id}
                            title = {data.title}
                            artist = {data.artist}
                            genre = {data.genre}
                        />
                    </ScrollAnimation>
                ))}

            </div>
        );
    }
}

export default Tour2;
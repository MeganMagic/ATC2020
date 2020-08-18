import React from 'react';

import _ from 'lodash';
import {Row, Col} from 'react-bootstrap';
import withStyles, {css} from '../withStyles';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';


class GNB extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrollTop : 0,
            show : true,
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.checkScrollDir);
    }
    checkScrollDir = _.throttle( () => {
        const newScrollTop = document.documentElement.scrollTop;
        //1. 아주 상단 부분에서는 gnb를 무조건 보여준다.
        if ( newScrollTop < 200) {
            this.setState({show : true});
        }
        else if ( this.state.scrollTop - newScrollTop > 0 && this.state.show === false){
            this.setState({show : true});
        }
        //3. 다시 내리기 시작하면, 사라진다. 두 값의 차가 0인 경우는 제외
        else if ( this.state.scrollTop - newScrollTop < 0 && this.state.show === true){
            this.setState({show : false});
        }
        this.setState({scrollTop : newScrollTop});
    }, 500)

    render(){
        const comp = (
            <Row className="gnb" >
                <Col lg {...css(this.props.styles.gnb)}>
                    <h1>GNB</h1>
                </Col> 
            </Row>
        );

        return(
            this.state.show === true ? comp : false
        )
    }
    
}

export default withStyles(({color, size}) => ({
    gnb : {
        backgroundColor : color.primaryLight,
        color : color.backgroundLight,
        textAlign : "center",
        position : "fixed",
        zIndex : 5,
    }

}))(GNB);
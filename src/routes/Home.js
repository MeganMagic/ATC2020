import React from 'react';
import {Link} from 'react-router-dom';
import withStyles, { css } from '../withStyles';

import MyButton from '../components/MyButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import './Home.css';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={value:'ko'};
        this.languageChange = this.languageChange.bind(this);
    }

    languageChange(event){
        this.setState({value : event.target.value});
    }

    render(){
        const ko = {
            intro : `전시 소개가 들어가는 자리입니다. 대충 아무말 ATC 2020은 2020년도에 열리는 Art and Technology Conference의 줄임말로, 매해 아텍에서 개최되는 큰 행사입니다. 많은 아텍인들의 열정과 창의력을 엿볼 수 있습니다. 많은 관심 부탁드립니다.`,
            about : `전시 소개 더보기`,
            exhibit : '전시 관람하기'
        }
        const en = {
            intro : `Here is short introduction of ATC2020. Amumal party, and ATC means Art and Technology Conference. There are many works of A&T students. Welcome Thankyou ByeBye Eat Kimch Gamsahapnida.`,
            about : `view more`,
            exhibit : `Exhibit`,
        }
        return(
            <Container fluid {...css(this.props.styles.container)}>
                <Row style={{marginBottom:"20px"}}>
                    <Col {...css(this.props.styles.title)}>
                        <div style={{fontSize:"20px"}}>ATC 2020</div>
                        <div>AND</div>
                    </Col>

                </Row>

                <Row className="justify-content-md-center" 
                    style={{marginBottom:"80px"}}
                >
                    <Col lg = {6} >
                        <p className='about-summary'>
                            {this.state.value === "ko" ? ko.intro : en.intro}
                        </p>
                        <Link to="/about">
                            {this.state.value === "ko" ? ko.about : en.about}
                        </Link>
                    </Col>
                </Row>

                <Row style={{marginBottom:"30px"}}>
                    <Col>

                        <select value={this.state.value} onChange={this.languageChange}>
                            <option value="ko">한국어</option>
                            <option value="en">English</option>
                        </select>


                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col lg={4} >
                        {/* 언어에 따라 Link path 다르게 하기 */}
                        <Link to="/tour3">
                            <MyButton message={this.state.value==="ko" ? ko.exhibit : en.exhibit}/>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default withStyles(({color, size, lineHeight, unit, font, fontWeight}) => ({
    default : {
        color : color.primaryLight,
        size : size.lg,
    },
    container : {
        color : color.primaryLight,
        backgroundColor : color.backgroundLight,

        textAlign: "center",
        height : "100vh",

        display : "flex",
        flexDirection:"column",
        justifyContent : "center",

        fontFamily : font.main,
    },
    title : {
        fontFamily : 'Arial Black',
        fontSize : size.xg * 2,
        lineHeight : lineHeight.xg * 2,
        fontWeight : fontWeight.bold,
    },
}))(Home);
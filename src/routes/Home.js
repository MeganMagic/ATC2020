import React from 'react';
import {Link} from 'react-router-dom';
import withStyles, { css } from '../withStyles';
import { Container, Row, Col } from 'react-bootstrap';
//import './Home.css';


function Home(props){
    return(
        <Container fluid {...css(props.styles.default)}>
            <Row>
                <Col>
                    <div >
                        ATC 2020
                    </div>
                    <div>AND</div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p className='about-summary'>전시 소개가 들어가는 자리입니다. 대충 아무말 ATC 2020은 2020년도에 열리는 Art & Technology Conference의 줄임말로, 매해 아텍에서 개최되는 큰 행사입니다. 많은 아텍인들의 열정과 창의력을 엿볼 수 있습니다. 많은 관심 부탁드립니다.</p>
                    <Link to="/about">전시 소개 더보기</Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        <Link to="/tour">관람하기</Link>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}
export default withStyles(({color, size, backgroundColor}) => ({
    default: {
        color : color.primaryOrange,
        fontSize : size.xg,
        backgroundColor : color.white,
    },
    
}))(Home);
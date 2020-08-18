import React from 'react';
import Data from '../data.json'
import withStyles, { css } from '../withStyles';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ScrollTester from '../components/ScrollTester';
import GNB from '../components/GNB';

import _ from 'lodash';

class Tour3 extends React.Component{


    render(){
        return(
            <Container fluid>
                <ScrollTester />

                <GNB />

                {Data.map( (data, index) => (
                    <Row>
                        <Col>
                            {data.id}<br/>
                            {data.title}<br/>
                            {data.artist}<br/>
                            {data.genre}<br/>
                        </Col>
                    </Row>
                ) )}

            </Container>

        );
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

}))(Tour3);
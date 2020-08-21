import React from 'react';
import {Link} from 'react-router-dom'
import Data from '../data.json'
import withStyles, { css } from '../withStyles';

import ScrollTester from '../components/ScrollTester';
import GNB from '../components/GNB';

class Tour3 extends React.Component{
    render(){
        const style = this.props.styles;
        return(
            <div id="Tour3" >
                <ScrollTester />

                <GNB />

                {Data.map( (data, index) => (
                    <div className="preview" key={index} {...css(style.preview)} >
                        <div>{data.id}</div>
                        <div>{data.title}</div>
                        <div>
                            {data.artist}<br/>
                            {data.genre}<br/>
                        </div>
                        <div>
                            <Link to={`/detail?id=${data.id}`}>Detail</Link>
                        </div>
                    </div>
                ) )}

            </div>

        );
    }
}

export default withStyles(({color, size}) => ({
    gnbSpace : {
        height : "100px",
    },
    preview : {
        backgroundColor : color.backgroundLight,
        fontSize : size.xg,
        textAlign : "left",
        padding : "30px",
        borderBottom : "solid black 3px",
    }

}))(Tour3);
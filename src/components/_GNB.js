import React from 'react';
import '../css/_GNB.css';

import _ from 'lodash';
import withStyles, {css} from '../withStyles';
import 'animate.css/animate.min.css';


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
        //2. 올리기 시작하면 나타난다.
        else if ( this.state.scrollTop - newScrollTop > 0 && this.state.show === false){
            this.setState({show : true});
        }
        //3. 다시 내리기 시작하면, 사라진다. 두 값의 차가 0인 경우는 제외
        else if ( this.state.scrollTop - newScrollTop < 0 && this.state.show === true){
            this.setState({show : false});
        }
        this.setState({scrollTop : newScrollTop});
    }, 400)

    componentWillUnmount(){
        window.removeEventListener('scroll', this.checkScrollDir );
    }

    render(){

        return(
            <div className={['gnb', !this.state.show && 'gnbShow'].join(' ')}>
                <div  {...css(this.props.styles.gnb)} >
                    <h1>GNB</h1>
                </div>
            </div>
        );
    }
    
}

export default withStyles(({color, size}) => ({
    gnb : {
        width : "100%",
        height : "100%",

        backgroundColor : color.primaryLight,
        color : color.backgroundLight,
    }

}))(GNB);
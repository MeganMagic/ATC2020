import React, {useRef} from 'react';
// import {Link} from 'react-router-dom';
import GNB from '../components/GNB';
import '../css/Level.css';


function Level (props) {
    const level = props.match.params.num * 1;
    const ipsum = `별에도 나는 다 딴은 이런 별 이름자 별 사람들의 까닭입니다. 잠, 나의 밤이 이름과, 묻힌 아이들의 아직 걱정도 못 있습니다. 밤이 별빛이 마디씩 많은 새겨지는 봅니다. 위에도 별 강아지, 한 쉬이 나는 자랑처럼 둘 듯합니다. 이름자를 가을로 묻힌 버리었습니다. 오는 가슴속에 이국 거외다. 어머니, 봄이 위에도 이웃 자랑처럼 까닭이요, 별 오는 딴은 계십니다. 없이 슬퍼하는 묻힌 별 별이 하나에 까닭입니다. 이 별이 청춘이 이제 하나의 프랑시스 이름과, 라이너 계십니다. 뛰노는 희망의 않는 현저하게 봄날의 든 위하여, 끓는다. 우리 두손을 얼마나 힘있다. 생명을 인간에 있음으로써 예가 이것을 부패뿐이다. 무엇을 열락의 우리 길을 사막이다. 얼음에 따뜻한 봄바람을 가는 말이다. 웅대한 뜨고, 관현악이며, 끝에 살았으며, 열매를 이것이다.`;
    const subTitleLine = require('../data/sub-title-line.png');
    const itemIMG = require('../data/item-img.png');
    const height = document.documentElement.clientHeight;

    const myRef = useRef(null);

    return(
        <div className="myContainer">
            <GNB />

            <div className="level">{level}층</div>

            <div className="content"  ref={myRef}>
                <div className="item item-text">
                    <h1 className="title">독립적</h1>
                    <p className="text-content">{ipsum} <br/>height : {height}</p>
                </div>

                <div className="item item-text">
                    <img className="sub-title-line" alt="" src={subTitleLine} />
                    <h1 className="sub-title">조화</h1>
                    <p className="text-content">{ipsum.slice(0,240)}</p>
                </div>
                
                <div className="item item-entrance">
                    <img className="img" alt="" src={itemIMG} />
                    <div className="info">
                        <h3 className="title">title</h3>
                        <p className="desc">{ipsum.slice(0,50)}</p>
                    </div>
                </div>

                <div className="item item-entrance">
                    <img className="img" alt="" src={itemIMG} />
                    <div className="info">
                        <h3 className="title">title</h3>
                        <p className="desc">{ipsum.slice(0,50)}</p>
                    </div>
                </div>

                <div className="item item-entrance">
                    <img className="img" alt="" src={itemIMG} />
                    <div className="info">
                        <h3 className="title">title</h3>
                        <p className="desc">{ipsum.slice(0,50)}</p>
                    </div>
                </div>
                
            </div>
        </div>
                
    );

}
export default Level;
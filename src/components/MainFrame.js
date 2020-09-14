import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/MainFrame.css';


function MainFrame(props){    
    const ipsum1 = `별에도 나는 다 딴은 이런 별 이름자 별 사람들의 까닭입니다. 잠, 나의 밤이 이름과, 묻힌 아이들의 아직 걱정도 못 있습니다. 밤이 별빛이 마디씩 많은 새겨지는 봅니다. 위에도 별 강아지, 한 쉬이 나는 자랑처럼 둘 듯합니다.\n\n이름자를 가을로 묻힌 버리었습니다. 오는 가슴속에 이국 거외다. 어머니, 봄이 위에도 이웃 자랑처럼 까닭이요, 별 오는 딴은 계십니다. 없이 슬퍼하는 묻힌 별 별이 하나에 까닭입니다. 이 별이 청춘이 이제 하나의 프랑시스 이름과, 라이너 계십니다. 뛰노는 희망의 않는 현저하게 봄날의 든 위하여, 끓는다. 우리 두손을 얼마나 힘있다. 생명을 인간에 있음으로써 예가 이것을 부패뿐이다.`;
    const ipsum2 = `어머니, 봄이 위에도 이웃 자랑처럼 까닭이요, 별 오는 딴은 계십니다.  별에도 나는 다 딴은 이런 별 이름자 별 사람들의 까닭입니다. 잠, 나의 밤이 이름과, 묻힌 아이들의 아직 걱정도 못 있습니다. 밤이 별빛이 마디씩 많은 새겨지는 봅니다. 위에도 별 강아지, 한 쉬이 나는 자랑처럼 둘 듯합니다.`;
    const subTitleLine = require('../data/sub-title-line.png');
    const entranceImg = require('../data/item-img.png');

    let pos = 0;
    const myRef = useRef(null);

    const scrollChanger = (e) => {
        const diffY = e.deltaY;
        const diffX = e.deltaX;

        //velocity control
        if ( Math.abs(diffY) > Math.abs(diffX) ) {
            myRef.current.scrollLeft -= (diffY*0.3);
        }
        else {
            myRef.current.scrollLeft += (diffX*0.5);
        }

        //현재좌측위치 / (전체길이 - 화면길이) * 100
        // const percentage = myRef.current.scrollLeft / (myRef.current.scrollWidth - document.documentElement.clientWidth);
        // console.log(parseInt(pos));
    }
    

    const levelIndex = [6, '치즈', '투영', '이 게임은 처음부터 내가 졌어', 'DreamCatcher', 7];

    const [navToggle, setNavToggle] = useState(false);
    const toggleNav = () => {
        setNavToggle(!navToggle);
        console.log(navToggle);
    }

    return(
        <div className="mainFrame">
            <ul className="content" ref={myRef} onWheel={scrollChanger}>
                <li className="item-text">
                    <div className="title">독립적</div>
                    <div className="desc">{ipsum1}</div>
                </li>
              
                <li className="item-text">
                    <img className="sub-title-line" src={subTitleLine} />
                    <div className="title">조화</div>
                    <div className="desc">{ipsum2}</div>
                </li>

                <li className="item-img">
                    <div className="entrance">
                        <img className="thumbnail" alt="thumbnail" src={entranceImg}></img>
                        <div className="info">
                            <div className="title">이 게임은<br />처음부터 내가 졌어</div>
                            <div className="desc">{ipsum1.slice(0,100)}</div>
                        </div>
                    </div>
                </li>

                <li className="item-img">
                    <div className="entrance">
                        <img className="thumbnail" alt="thumbnail" src={entranceImg}></img>
                        <div className="info">
                            <div className="title">이 게임은<br />처음부터 내가 졌어</div>
                            <div className="desc">{ipsum1.slice(0,100)}</div>
                        </div>
                    </div>
                </li>

                <li className="item-img">
                    <div className="entrance">
                        <img className="thumbnail" alt="thumbnail" src={entranceImg}></img>
                        <div className="info">
                            <div className="title">이 게임은<br />처음부터 내가 졌어</div>
                            <div className="desc">{ipsum1.slice(0,100)}</div>
                        </div>
                    </div>
                </li>

                <li className="item-img">
                    <div className="entrance">
                        <img className="thumbnail" alt="thumbnail" src={entranceImg}></img>
                        <div className="info">
                            <div className="title">이 게임은<br />처음부터 내가 졌어</div>
                            <div className="desc">{ipsum1.slice(0,100)}</div>
                        </div>
                    </div>
                </li>

                <li className="item-img">대충 내려가는 길 이미지</li>
            </ul>
            
            <div className="gnb">
                <div className="item logo">&and</div>
                <div className="item"><Link to="/introduction">소개</Link></div>
                <div className="item"><Link to="/level/7">관람</Link></div>
                <div className="item"><Link to="/store">스토어</Link></div>
                <div className="item"><Link to="/staffsAndArtists">만든 사람들</Link></div>
                <div className="item">
                    <input type="text"/>
                    <button >검색</button>
                </div>
            </div>

            <div className="level-guide">
                <div className="index">
                    {levelIndex.map( (title, index) => <div key={index}>{title}</div>)}
                </div>
                <div className="bar"></div>
                <div className="slider" 
                    style={{left: `400px`}}></div>
            </div>

            <div className={['navigation', navToggle ? 'navShow' : ''].join(' ')}>
                <div className="title" onClick={toggleNav}>
                    <div>층별안내</div>
                    <div>{navToggle ? '닫기' : '열기'}</div>
                </div>
                <div className='item'>F6</div>
                <div className="item">F5</div>
                <div className="item">F4</div>
                <div className="item">F3</div>
                <div className="item">F2</div>
                <div className="item">F1</div>

            </div>
        </div>
    );
}
export default MainFrame;
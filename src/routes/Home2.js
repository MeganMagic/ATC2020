import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import { map } from 'lodash';

const useSelect = (initialValue) => { // validator 추가하기
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target : {value}
        } = event;
        setValue(value);
    }
    return {value, onChange}
}
const windowHoverd = (e) => {
    console.log(e);
}


function Home2(props){
    const windowRef = useRef(null);
    const lang = useSelect("ko");
    const pillarNum = Array.from(Array(40).keys());
    const window = (animation, color) => { return(
        <div className={animation? `window windowActive` : `window`} >
            <div className={`curtain ${color}`}></div>
            <div className="shutter"></div>
        </div>
    )};

    return(
        <div id='home'>
            <div className="frame">
                <div className="title">
                    <div className="title-text">ATC 2020 : AND</div>
                </div>
                <div className="pillar">
                    {pillarNum.map((x, i)=> 
                        <div className="item" key={i}></div> 
                    )}
                </div>
                <div className="divider"></div>

                <div className="floor floor-top">
                    <div className='window window-top' >
                        <div className='curtain green'></div>
                        <div className='shutter'></div>
                    </div>
                    <div className="wall"></div>
                    <div className='window window-top' >
                        <div className='curtain black'></div>
                        <div className='shutter'></div>
                    </div>
                    <div className="wall"></div>
                    <div className='window window-top' >
                        <div className='curtain green'></div>
                        <div className='shutter'></div>
                    </div>
                    <div className="wall"></div>
                    <div className='window window-top' >
                        <div className='curtain black'></div>
                        <div className='shutter'></div>
                    </div>
                </div>


                <div className="divider"></div>
                <div className="floor">
                    {window(true, 'black')}
                    {window(true, 'green')}
                    {window(true, 'black')}
                    {window(true, 'green')}
                </div>

                <div className="divider"></div>

                
            </div>




            <div>
                <h3>언어 선택</h3>
                <h4>
                    {lang.value === "ko" ?
                    "~한국어입니당~" : "~English mode~"}
                </h4>
                <select {...lang}>
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                </select>
            </div>


        </div>
    );
}

export default Home2;
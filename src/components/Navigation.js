import React, {useState} from 'react';
import '../css/Navigation.css';


function Navigation(props){
    const [navToggle, setNavToggle] = useState(false);
    const toggleNav = () => {
        setNavToggle(!navToggle);
        console.log(navToggle);
    }
    
    return(
        <div className={['navigation', navToggle ? 'navShow' : ''].join(' ')}>
                <div className="title" onClick={toggleNav}>
                    <div>층별안내</div>
                    <div>{navToggle ? '닫기' : '열기'}</div>
                </div>
                <div className='item'>
                    <div className="floor">F6</div>
                    <div className="floor-info">
                        <div className="name">조화와 경계</div>
                        <div className="list">치즈&   |   투영   |   이 게임은 처음부터 내가 졌어   |   Dreamcatcher   |   화환같아   |   따뜻한 이글루 만들기 대작전</div>
                    </div>
                </div>
                <div className='item'>
                    <div className="floor">F5</div>
                    <div className="floor-info">
                        <div className="name">조화와 경계</div>
                        <div className="list">치즈&   |   투영   |   이 게임은 처음부터 내가 졌어   |   Dreamcatcher   |   화환같아   |   따뜻한 이글루 만들기 대작전</div>
                    </div>
                </div>
                <div className='item'>
                    <div className="floor">F4</div>
                    <div className="floor-info">
                        <div className="name">조화와 경계</div>
                        <div className="list">치즈&   |   투영   |   이 게임은 처음부터 내가 졌어   |   Dreamcatcher   |   화환같아   |   따뜻한 이글루 만들기 대작전</div>
                    </div>
                </div>
                <div className='item'>
                    <div className="floor">F3</div>
                    <div className="floor-info">
                        <div className="name">조화와 경계</div>
                        <div className="list">치즈&   |   투영   |   이 게임은 처음부터 내가 졌어   |   Dreamcatcher   |   화환같아   |   따뜻한 이글루 만들기 대작전</div>
                    </div>
                </div>
                <div className='item'>
                    <div className="floor">F2</div>
                    <div className="floor-info">
                        <div className="name">조화와 경계</div>
                        <div className="list">치즈&   |   투영   |   이 게임은 처음부터 내가 졌어   |   Dreamcatcher   |   화환같아   |   따뜻한 이글루 만들기 대작전</div>
                    </div>
                </div>
                <div className='item'>
                    <div className="floor">F1</div>
                    <div className="floor-info">
                        <div className="name">조화와 경계</div>
                        <div className="list">치즈&   |   투영   |   이 게임은 처음부터 내가 졌어   |   Dreamcatcher   |   화환같아   |   따뜻한 이글루 만들기 대작전</div>
                    </div>
                </div>

            </div>
    );
}
export default Navigation;
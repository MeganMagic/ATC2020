import React, {useState} from 'react';

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


function Home2(props){
    const lang = useSelect("ko");
    return(
        <div>
            <div>
                <h1>ATC 2020</h1>
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

            <div>About ATC</div>
            <div>관람하기</div>
            <div>Staffs&Artists</div>
            <div>작품 검색</div>
        </div>
    );
}

export default Home2;
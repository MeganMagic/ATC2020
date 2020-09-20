import React, {useRef, Fragment} from 'react';
import axios from 'axios';
import '../css/Level1.css';

const sendResponse =  (e, nameRef, messRef) => {
    e.preventDefault();
    console.log(e);
    axios.get(
        "https://script.google.com/macros/s/AKfycbwSALIdVZMx0-U5DOfi-Ivm6Pq8uyhO0bf_4RXeljUVk2r6BWc/exec",
        { params : {
            "이름": nameRef.current.value,
            "메세지": messRef.current.value
            }
        }
    )
    .then( (res) =>  console.log(res.data) ); 

    //clear
    nameRef.current.value = '';
    messRef.current.value = '';
};

const getSheetData = (key) =>  {
    const url = `https://docs.google.com/spreadsheets/d/${key}/gviz/tq?`;
    axios.get(url)
    .then((res) => {
        const data = res.data.split('\n')[1];
        const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
        const regexData = queryFrame.exec(data)['1'];
        
        console.log(data);
        console.log(JSON.parse(regexData).table.rows);
    } );
};




function Level1(props){
    const nameRef = useRef(null);
    const messRef = useRef(null);

    const sheetKey = "1jabZBtATvQRy0035HlgBzq0nHq2nZ1025skCQDy1i78";
    getSheetData(sheetKey);

    return( 
        <Fragment>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" ref={nameRef} />
            </div>
            <div>
                <label htmlFor="message">메세지</label>
                <textarea type="text" id="message" name="message" ref={messRef}/>
            </div>

            <div>
                <button id="google-submit" onClick={(e) => sendResponse(e, nameRef, messRef)}>입력</button>
            </div>

        </Fragment>
    );
}

// class Level1 extends

export default Level1;
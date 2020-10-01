import React, {useRef, Fragment} from 'react';
import axios from 'axios';
// import DocsData from '../components/DocsData';

const sendResponse =  (e, nameRef, messRef) => {
    e.preventDefault();
    console.log(e);
    axios.get(
        "https://script.google.com/macros/s/AKfycbwSALIdVZMx0-U5DOfi-Ivm6Pq8uyhO0bf_4RXeljUVk2r6BWc/exec",
        { params : {
            "이름": JSON.stringify(nameRef.current.value),
            "메세지": JSON.stringify(messRef.current.value)
            }
        }
    )
    .then( (res) =>  console.log(res.data) )
    .catch(error => {
        console.log(error);
     });

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
const getDocsData = (key) => {
    const url = `https://script.google.com/macros/s/${key}/exec`;
    axios.get(url)
    .then((res) => {
        console.log("DOCS!");
        console.log(res.data.result);
    });
}


function Level1(props){
    const nameRef = useRef(null);
    const messRef = useRef(null);

    const sheetKey = "1jabZBtATvQRy0035HlgBzq0nHq2nZ1025skCQDy1i78";
    const docsKey = "AKfycbzFr6n2s4btj6liWhCL2IBFGEGPqwHg7Y1YlNQx_325MVP4cZDW";
    getSheetData(sheetKey);
    getDocsData(docsKey);

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
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Loading = (props) => {
    let history = useHistory();
    useEffect(() => {
        setTimeout(() => history.push('/level/6'), 2000);
    }, []);

    const level = props.level? props.level : 6;
    const element = (
        <div className="mainFrame" style={{color:"0000FF"}}>
            <h1>{props.level}층</h1>
        </div>
    );
    return(
        element
    )
}

export default Loading
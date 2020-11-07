import React, {useRef} from 'react';

const ScrollChanger = (props) => {
    const ref = useRef(null);
    const onWheel = (e) => {
        const diffY = e.deltaY;
        const diffX = e.deltaX;
        //velocity control
        if ( Math.abs(diffY) > Math.abs(diffX) ) {
            ref.current.scrollLeft -= (diffY*0.3);
        }
        else {
            ref.current.scrollLeft += (diffX*0.5);
        }
    }
    return(
        <ul className="content" ref={ref} onWheel={onWheel}>
            {props.children}
        </ul>
    );
}

export default ScrollChanger
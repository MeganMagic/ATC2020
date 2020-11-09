import { useRef } from 'react';

const useScrollChange = () => {
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
    return { ref, onWheel }
}

export default useScrollChange
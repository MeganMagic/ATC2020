import React from 'react';

function Navigation ( {indexList, move} ){
    return(
        <div>
            <ul>
                {indexList.map( (title, num) => (
                    <li key = {num} onClick={move}>{title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;
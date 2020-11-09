import React, {Fragment} from 'react';
import Item from './Item';

const levelObject = 
    [
        //2층
        (level, comps, works) => 
        <Fragment>
            <Item head  title={comps[0][1].v} desc={comps[0][2].v} />
            <Item sub title={comps[1][1].v} desc={comps[1][2].v} />
            <Item entrance 
                entranceID = {comps[2][1].v} entranceLevel = {level}
                title={works[0][1].v} desc={works[0][2].v} imgSrc={works[0][3].v}
            />
            <Item entrance 
                entranceID = {comps[3][1].v} entranceLevel = {level}
                title={works[1][1].v} desc={works[1][2].v} imgSrc={works[1][3].v}
            />
        </Fragment>,

        //3층
        (level, comps, works) => 
        <Fragment>
            <Item head  title={comps[0][1].v} desc={comps[0][2].v} />
            <Item sub title={comps[1][1].v} desc={comps[1][2].v} />
            <Item entrance 
                entranceID = {comps[2][1].v} entranceLevel = {level}
                title={works[0][1].v} desc={works[0][2].v} imgSrc={works[0][3].v}
            />
            <Item entrance 
                entranceID = {comps[3][1].v} entranceLevel = {level}
                title={works[1][1].v} desc={works[1][2].v} imgSrc={works[1][3].v}
            />
            <Item entrance 
                entranceID = {comps[4][1].v} entranceLevel = {level}
                title={works[2][1].v} desc={works[2][2].v} imgSrc={works[2][3].v}
            />
            <Item entrance 
                entranceID = {comps[5][1].v} entranceLevel = {level}
                title={works[3][1].v} desc={works[3][2].v} imgSrc={works[3][3].v}
            />
            <Item entrance 
                entranceID = {comps[6][1].v} entranceLevel = {level}
                title={works[4][1].v} desc={works[4][2].v} imgSrc={works[4][3].v}
            />
        </Fragment>,

        //4층
        (level, comps, works) => 
        <Fragment>
            <Item head  title={comps[0][1].v} desc={comps[0][2].v} />
            <Item sub title={comps[1][1].v} desc={comps[1][2].v} />
            <Item entrance 
                entranceID = {comps[2][1].v} entranceLevel = {level}
                title={works[0][1].v} desc={works[0][2].v} imgSrc={works[0][3].v}
            />
            <Item entrance 
                entranceID = {comps[3][1].v} entranceLevel = {level}
                title={works[1][1].v} desc={works[1][2].v} imgSrc={works[1][3].v}
            />
            <Item entrance 
                entranceID = {comps[4][1].v} entranceLevel = {level}
                title={works[1][1].v} desc={works[1][2].v} imgSrc={works[1][3].v}
            />
            <Item entrance 
                entranceID = {comps[5][1].v} entranceLevel = {level}
                title={works[2][1].v} desc={works[2][2].v} imgSrc={works[2][3].v}
            />
        </Fragment>,

        //5층
        (level, comps, works) => 
        <Fragment>
            <Item head  title={comps[0][1].v} desc={comps[0][2].v} />
            <Item sub title={comps[1][1].v} desc={comps[1][2].v} />
            <Item entrance 
                entranceID = {comps[2][1].v} entranceLevel = {level}
                title={works[0][1].v} desc={works[0][2].v} imgSrc={works[0][3].v}
            />
            <Item entrance 
                entranceID = {comps[3][1].v} entranceLevel = {level}
                title={works[1][1].v} desc={works[1][2].v} imgSrc={works[1][3].v}
            />
            <Item entrance 
                entranceID = {comps[4][1].v} entranceLevel = {level}
                title={works[2][1].v} desc={works[2][2].v} imgSrc={works[2][3].v}
            />
            <Item entrance 
                entranceID = {comps[5][1].v} entranceLevel = {level}
                title={works[3][1].v} desc={works[3][2].v} imgSrc={works[3][3].v}
            />
        </Fragment>,

        //6층
        (level, comps, works) => 
        <Fragment>
            <Item head  title={comps[0][1].v} desc={comps[0][2].v} />
            <Item sub title={comps[1][1].v} desc={comps[1][2].v} />
            <Item entrance 
                entranceID = {comps[2][1].v} entranceLevel = {level}
                title={works[0][1].v} desc={works[0][2].v} imgSrc={works[0][3].v}/>
            <Item entrance 
                entranceID = {comps[3][1].v} entranceLevel = {level}
                title={works[1][1].v} desc={works[1][2].v} imgSrc={works[1][3].v}/>

            <Item sub title={comps[4][1].v} desc={comps[4][2].v} />
            <Item entrance 
                entranceID = {comps[5][1].v} entranceLevel = {level}
                title={works[2][1].v} desc={works[2][2].v} imgSrc={works[2][3].v}/>
            <Item entrance 
                entranceID = {comps[6][1].v} entranceLevel = {level}
                title={works[3][1].v} desc={works[3][2].v} imgSrc={works[3][3].v}/>
            <Item entrance 
                entranceID = {comps[7][1].v} entranceLevel = {level}
                title={works[4][1].v} desc={works[4][2].v} imgSrc={works[4][3].v}/>
            <Item entrance 
                entranceID = {comps[8][1].v} entranceLevel = {level}
                title={works[5][1].v} desc={works[5][2].v} imgSrc={works[5][3].v}/>
        </Fragment>
    ]
;

export default levelObject
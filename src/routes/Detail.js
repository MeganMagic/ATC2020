import React from 'react';
import '../css/Detail.css';
import queryString from 'query-string';

import MainFrame from '../components/MainFrame';
import Item from '../components/Item';



const getQueryData = (props) => {
    const {search} = props.location;
    const queryObj = queryString.parse(search);
    const {id, level} = queryObj;
    return { id, level };
} 
function Detail(props) {
    const {id, level} = getQueryData(props);

    const ipsum1 = `별에도 나는 다 딴은 이런 별 이름자 별 사람들의 까닭입니다. 잠, 나의 밤이 이름과, 묻힌 아이들의 아직 걱정도 못 있습니다. 밤이 별빛이 마디씩 많은 새겨지는 봅니다. 위에도 별 강아지, 한 쉬이 나는 자랑처럼 둘 듯합니다.\n\n이름자를 가을로 묻힌 버리었습니다. 오는 가슴속에 이국 거외다. 어머니, 봄이 위에도 이웃 자랑처럼 까닭이요, 별 오는 딴은 계십니다. 없이 슬퍼하는 묻힌 별 별이 하나에 까닭입니다. 이 별이 청춘이 이제 하나의 프랑시스 이름과, 라이너 계십니다. 뛰노는 희망의 않는 현저하게 봄날의 든 위하여, 끓는다. 우리 두손을 얼마나 힘있다. 생명을 인간에 있음으로써 예가 이것을 부패뿐이다.`;
    const artists = ["송하은", "김지나", "강지훈", "조예진"];
    const imgSrc = require('../data/holder.jpeg')
    return(
        <MainFrame >
            <Item detailHead
                title = "보는세상"
                desc = {ipsum1}
                artists = {artists}
            />

            <Item detailImg
                imgSrc = {imgSrc}
            />
            <Item detailImg
                imgSrc = {imgSrc}
            />
            <Item detailImg
                imgSrc = {imgSrc}
            />
        </MainFrame>
    );
}

export default Detail;
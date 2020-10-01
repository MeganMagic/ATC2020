import React, { Fragment } from 'react';
import axios from 'axios';

import MainFrame from '../components/MainFrame';
import Item from '../components/Item';

class Level6 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyLevel : '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4',
            keyItem : '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI',
            level : 6,
            isLoading : true,
            isError : false,
        };
    }

    parseGoogleSpreadsheetData = (data) => {
        const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
        const myData = JSON.parse(
            queryFrame.exec(
                data.split('\n')[1]
            )['1']
        ).table.rows
        .filter((x) => x.c[0].v === this.state.level )
        .map((x) => x.c );
        console.log(myData);
        return myData;
    }
    parseGoogleDriveLink = (link) => {
        const queryFrame = /https:\/\/drive.google.com\/file\/d\/(.*)\/view/;
        const linkId = queryFrame.exec(link)['1'];
        return `http://drive.google.com/uc?export=view&id=${linkId}`;

    }

    getData = () => {
        //level 정보
        const url = (key) => { return `https://docs.google.com/spreadsheets/d/${key}/gviz/tq?`};
        axios.get( url(this.state.keyLevel) ) 
        .then( (res) => {
            //1. data 가져오기, 가공
            const { data } = res;
            const levelData = this.parseGoogleSpreadsheetData(data);

            //2. 데이터 저장, 로딩 종료
            this.setState({
                isLoading : false,
                levelData : levelData
            });
        })
        .catch( (error) => {
            //3. 에러 발생시 => 에러 코드 저장하기
            console.log(error);
            this.setState({
                isLoading : false,
                isError : true
            });
        })

        //작품 정보
        axios.get( url(this.state.keyItem) )
        .then( (res) => {
            const {data} = res;
            const itemData = this.parseGoogleSpreadsheetData(data);
            this.setState({
                itemData : itemData
            });
        })
        .catch( (error) => {
            console.log(error);
            this.setState({
                isError : true
            });
        })
    }
    

    componentDidMount(){ this.getData();}

    render(){
        let title="";
        let desc="";

        const element = (data) => (
            <Fragment>
                <li className="level">{this.state.level}층</li>

                <Item head
                    title = {data[0][2].v}
                    desc = {data[0][3].v}
                />
                <Item sub
                    title = {data[1][2].v}
                    desc = {data[1][3].v}
                />
                <Item entrance
                    title={data[1][2].v}
                    desc={data[1][3].v}

                    entranceLevel = {data[2][2].v}
                    imgSrc = {'http://drive.google.com/uc?export=view&id=1UseOkQjZu9b25VLDTxupUJnTBVzEM3qi'}
                />
                <li className="item-entrance">next</li>
            </Fragment>
        );
        
        console.log(this.state);
        this.parseGoogleDriveLink('https://drive.google.com/file/d/1UseOkQjZu9b25VLDTxupUJnTBVzEM3qi/view?usp=sharing');
        return(
            <MainFrame>
                {this.state.isLoading ? <div>Loading... </div> 
                    : this.state.isError ? <div>Error!</div> 
                        : element(this.state.levelData)
                }   
            </MainFrame>
        );
    }
}

export default Level6;
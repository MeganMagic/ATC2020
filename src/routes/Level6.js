import React, { Fragment } from 'react';
import axios from 'axios';

import MainFrame from '../components/MainFrame';
import Item from '../components/Item';
import { slice } from 'lodash';

 const parseGoogleSpreadsheetData = (data) => {
    const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\)\;/;
    
    const myData = JSON.parse( queryFrame.exec( data.split('\n')[1] )['1'] ).table.rows.map((x)=>x.c);
    console.log(myData);
    const filteredData = myData
    .filter((x) => x[0] !== null && x[0].v === this.state.level );
    return myData;
}
const parseGoogleDriveLink = (link) => {
    const queryFrame = /https:\/\/drive.google.com\/file\/d\/(.*)\/view/;
    const linkId = queryFrame.exec(link)['1'];
    return `http://drive.google.com/uc?export=view&id=${linkId}`;
}

const getUrl = (key) => (`https://docs.google.com/spreadsheets/d/${key}/gviz/tq?`);

class Level6 extends React.Component{
    constructor(props){
        super(props);
        const keyLevel = '1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4';
        const keyItem = '1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI';
        const level = 6;
        let isLoading = true;
        let isError = false;
        let levelData;
        let itemData;

        //level 정보
        axios.get( getUrl(keyLevel) ) 
        .then( (res) => {
        //1. data 가져오기, 가공
            const { data } = res;
            levelData = parseGoogleSpreadsheetData(data);

            isLoading = false;
            isError = false;
        })
        //2. data error
        .catch( (error) => {
            console.log(error);
            isLoading = false;
            isError = true;
        });

        //작품 정보
        axios.get( getUrl(keyItem) )
        .then( (res) => {
            const {data} = res;
            itemData = parseGoogleSpreadsheetData(data);
            isLoading = false;
            isError = false;
        })
        .catch( (error) => {
            console.log(error);
            isError = true;
        });

        this.state = {
            keyLevel,
            keyItem,
            level,
            isLoading,
            isError,
            levelData,
            itemData
        };
    }

    

    getData = () => {
        //level 정보
        axios.get( getUrl(this.state.keyLevel) ) 
        .then( (res) => {
            //1. data 가져오기, 가공
            console.log(res);
            const { data } = res;
            console.log(data);
            const levelData = parseGoogleSpreadsheetData(data);
            console.log(levelData);

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
        axios.get( getUrl(this.state.keyItem) )
        .then( (res) => {
            const {data} = res;
            const itemData = parseGoogleSpreadsheetData(data);
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
    

    // componentDidMount(){ this.getData();}
    

    render(){
        let title="";
        let desc="";

        const headElement = (data) => (
            <Item head title = {data[2].v} desc = {data[3].v} />
        );
        const subElement = (data) => (
            <Item sub title = {data[2].v} desc = {data[3].v} />
        );

        const entrance = (data) => {
            const entranceId = data[2].v;
            console.log(entranceId);
            console.log(this.state.itemData);
            const entranceData = this.state.itemData.filter((x) => x[1].v === entranceId);

            return(
                <Item entrance entranceId={entranceId} 
                    title="ggg"
                    desc="zzz"
                />
            );  
        };

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
                {entrance(data[2])}
                <li className="item-entrance">next</li>

            </Fragment>
        );
        
        console.log(this.state);
        parseGoogleDriveLink('https://drive.google.com/file/d/1UseOkQjZu9b25VLDTxupUJnTBVzEM3qi/view?usp=sharing');
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
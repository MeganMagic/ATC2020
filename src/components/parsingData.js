const parsingData = (jsonData, dataType) => {
    const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\);/;
    const myData = JSON.parse( queryFrame.exec( jsonData.toString() )['1'] ).table.rows.map((x)=>x.c);

    if(dataType === "workDetail"){
        let refinedData = [];
        myData.map((d) => {
            refinedData.push({
                type : d[0].v,
                content1 : d[1].v,
                content2 : d[2].v
            })
        })
        return refinedData;
    }
    else if(dataType === "workInformation"){
        let refinedData = [];
        myData.map((d) => {
            refinedData.push({
                level : d[0].v,
                title : d[1].v,
                artist : d[2].v.split('/'),
                genre : d[3].v,
                archivingVideoLink : d[4].v,
                detailDescription : d[5].v
            })
        })
        return refinedData
    }

    return myData;
}

export default parsingData;
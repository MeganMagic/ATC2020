import {useState, useEffect} from 'react';
import defaultAxios from 'axios';

const useAxiosTwice = (opt, axiosInstance = defaultAxios) => {

    const parsingData = (jsonData) => {
        const queryFrame = /google\.visualization\.Query\.setResponse\((.*)\);/;
        const myData = JSON.parse( queryFrame.exec( jsonData.toString() )['1'] ).table.rows.map((x)=>x.c);
        return myData;
    }
    const [ state, setState ] = useState({
        loading : true,
        error : null,
        comps : null,
        works : null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading : true
        })
        setTrigger(Date.now());
    }

    useEffect( () => {
        axiosInstance.all([
            axiosInstance.get(opt.compsUrl), 
            axiosInstance.get(opt.worksUrl)
        ])
        .then(axiosInstance.spread( (data1, data2) => {
            const comps = parsingData(data1.data);
            const works = parsingData(data2.data);
            setState({
                ...state,
                loading : false,
                comps,
                works
            })
        }))
        .catch(error => {
            setState({
                ...state,
                loading : false,
                error
            })
        })
    }, [trigger])

    return { ...state, refetch }
}

export default useAxiosTwice
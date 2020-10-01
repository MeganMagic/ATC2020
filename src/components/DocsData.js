import axios from 'axios';

const getDocsData = (key) => {
    const url = `https://script.google.com/macros/s/${key}/exec`;
    axios.get(url)
    .then((res) => {
        console.log("DOCS!");
        console.log(res.data.result);
    });
}
export default getDocsData;
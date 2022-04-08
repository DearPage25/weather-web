import axios from "axios";

// const [lat, lon] = ['18.91', '-70.75'];

const q = 'La Vega';
const limit = '5';


export const searchCity = async () => {
   
    
    const options = {
        method: 'GET',
        url: 'http://localhost:8000/city',
        params: {
            q,
            limit
        },
    }

    const data = axios.request(options).then((res) => {
       return res.data
    }).catch((error) => {
        console.error(error)
    })
    return data;
}
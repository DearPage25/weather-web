import axios from "axios";

const [lat, lon] = ['18.91', '-70.75'];



export const weather = async () => {
   
    
    const options = {
        method: 'GET',
        url: 'http://localhost:8000/weather',
        params: {lat, lon},
    }

    const data = axios.request(options).then((res) => {
       return res.data
    }).catch((error) => {
        console.error(error)
    })
    return data;
}
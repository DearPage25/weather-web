const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config()
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json(`Backend: I'am here!`);
});

//Endpoints
// capturar los datos de temperatura
const appid = process.env.WEATHER_API_KEY;
const units = 'metric'
app.get('/weather', async (req, res) => {
    const { lat, lon } = req.query;
    const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            lat,
            lon,
            appid,
            units,
        },
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
});

// capturar los datos de la ciudad
app.get('/city', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'http://api.openweathermap.org/geo/1.0/direct',
        params: {
            'q': 'santiago',
            'limit': '5',
            appid 
        },
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
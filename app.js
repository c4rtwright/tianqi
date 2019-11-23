const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')
const axios = require('axios');

const app = express()
const port = 3000

app.use(cors())
app.use(body_parser());

app.get('/', (req, res) => {
    let { key, lat, lng } = req.query;

    console.log(key);
    console.log(lat);
    console.log(lng);
    
    res.json({
        message: 'yaaasss'
    })
})

app.get('/weather', (req, res) => {
    console.log('attempting to grab weather data');

    let { key, lat, lng } = req.query;

    axios.get('https://api.darksky.net/forecast/', {
        params: {
            key: key,
            latitude: lat,
            longitude: lng
        }
    }).then((response) => {
        if (response) {
            console.log(response.data)
        }
    }).catch((err) => {

    }).finally( () => {
        res.json({
            message: 'aight imma head out'
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
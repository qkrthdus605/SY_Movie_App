//nodejs로 naver 검색 api 처리하는 서버
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const axios = require('axios');

const ID_KEY = 'KAYU4zU6dJxwHaGtOloz';
const SECRET_KEY = 'eMx7Janp4O';

app.use(cors());

app.use(bodyParser.json());

app.use('/search', (req, res) => {
    const word = req.query.query;
    axios.get('https://openapi.naver.com/v1/search/movie.json', {
        params: {
            query: word,
            display: 20
        },
        headers: {
            'X-Naver-Client-id' : ID_KEY,
            'X-Naver-Client-Secret' : SECRET_KEY,
            'Access-Control-Allow-Origin': '*'
        }
    }).then(function(response){
        const item = response.data.items;
        res.send({items:items});
    }).catch(function(error){
        console.log(error);
    });
});

app.listen(port, () => {
    console.log('express is running on ${port}');
});
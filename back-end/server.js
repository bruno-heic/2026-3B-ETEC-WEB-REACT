const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const conection = mysql.createConnection({
    host: '127.0.0.0',
    user: 'root',
    password: '123456',
    database: 'escola',
    port:3306
})

conection.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('mysql connected!')
    }
})
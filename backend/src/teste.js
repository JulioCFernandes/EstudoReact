const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (Request, Response) => {
    return response.send('Hello World2');
}); 

app.listen(3333);
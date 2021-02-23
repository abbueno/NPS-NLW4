import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();



app.get("/", (request, response) => {
    return response.json({mesage: "Hello World - NLW04"});
});

app.post("/", (request, response) => {
    return response.json({mesage: "Os dados foram salvos com sucesso!"});
});

app.listen(3333, () => console.log("Server is running!"));

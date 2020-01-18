const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors')
const http = require('http');

const routes = require('./routes');
const  {setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:63870190@cluster0-3lfs2.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    
})

app.use(cors()) //liberar o acesso da porta
app.use(express.json());
app.use(routes);

//Metodos HTTP : GET, POST, PUT, DELETE

//tipos de parametros 
//Query Params: request.query (filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//body: request.body (dados para criação ou alteração de um registro)

// Mongodb (não-relacional)


server.listen(3333);


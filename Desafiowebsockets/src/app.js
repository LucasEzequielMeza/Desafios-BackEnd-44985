// const products = []

// io.on('connection', socket => {
//     socket.on('client:addProduct', data => {

//         socket.emit('server:')

//         if (products.length > 0) {
//             const ultimoId = products[products.length - 1].id + 1
//             products.id = ultimoId
//             data.id = ultimoId
//             products.push(data)
//         } else {
//             data.id = 1
//             products.push(data)
//         }
//         io.emit('server:addedProduct', products)
//     })
// })

import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import viewsRealTimeProducts from './routes/realTimeProducts.router.js';

const app = express();

app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());

app.set('views', `${__dirname}/views`);

app.set('view engine', 'handlebars');
 

app.use('/', viewsRealTimeProducts);

const server = app.listen(8080, () => console.log('Listening'));

const io = new Server(server);

let products = []

io.on('connection', socket => {

    socket.emit('server:loadProduct', products)

    socket.on('client:newProduct', data => {
        if (products.length > 0) {
            const ultimoId = products[products.length - 1].id + 1
            products.id = ultimoId
            data.id = ultimoId
            products.push(data)
        } else {
            data.id = 1
            products.push(data)
        }
        io.emit('server:newProduct', data)
    })

    socket.on('client:deleteProduct', productId => {
        products = products.filter(product => product.id != productId)
        socket.emit('server:loadProduct', products)
    })
})
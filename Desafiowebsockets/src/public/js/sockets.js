const socket = io()

const saveProduct = (title, description, code, price, state, stock, category) => {
    socket.emit('client:newProduct', {
        title,
        description,
        code,
        price,
        state,
        stock,
        category
    })
}

const deleteProduct = (id) => {
    socket.emit('client:deleteProduct', id)
}

socket.on('server:newProduct', appendProduct )

socket.on('server:loadProduct', renderProduct)
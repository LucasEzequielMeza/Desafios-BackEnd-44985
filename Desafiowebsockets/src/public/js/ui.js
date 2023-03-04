const listProducts = document.getElementById('listProducts')

const productUI = product => {

        const div = document.createElement('div')

        div.innerHTML = `
            <div class="container mt-5">
                <div class="row">
                    <div class="p-3 mt-5 shadow border">
                        <p>${product.title}</p>
                        <p>${product.description}</p>
                        <p>${product.code}</p>
                        <p>${product.price}</p>
                        <p>${product.state}</p>
                        <p>${product.stock}</p>
                        <p>${product.category}</p>
                    </div>
                    <button id="deleteProduct" data-id="${product.id}" class="btn btn-danger" >Delete Product</button>
                </div>
            </div>
            <hr>
        `

        const btnDelete = div.querySelector('#deleteProduct')

        btnDelete.addEventListener('click', () =>{
            deleteProduct(btnDelete.dataset.id)
        })

        return div
}

const renderProduct = products => {
    listProducts.innerHTML = ''
    products.forEach((product) => {
        listProducts.append(productUI(product))
    })
}

const appendProduct = products => {
    listProducts.append(productUI(products))
}
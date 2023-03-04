{/* <div class="container mt-5">
<div class="row">
    <div class="p-3 mt-5 shadow border">
        <p>${data.title}</p>
        <p>${data.description}</p>
        <p>${data.code}</p>
        <p>${data.price}</p>
        <p>${data.state}</p>
        <p>${data.stock}</p>
        <p>${data.category}</p>
    </div>
    <button id="deleteProduct" data-id="${data.id}" class="btn btn-danger" >Delete Product</button>
</div>
</div>
<hr> */}

const form = document.getElementById('form')
const title = document.getElementById('title')
const description = document.getElementById('description')
const code = document.getElementById('code')
const price = document.getElementById('price')
const state = document.getElementById('state')
const stock = document.getElementById('stock')
const category = document.getElementById('category')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    saveProduct(
        title.value,
        description.value,
        code.value,
        price.value,
        state.value,
        stock.value,
        category.value
    )

})
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <p>Product: ${product.name}</p>
                    <p>Price: $${product.price}</p>
                    <p>Year: ${product.year}</p>
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Product deleted.', 'warning')
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-3`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 4000)
    }
}

document.getElementById('product-form').addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const product = new Product(name, price, year);
    
    const ui = new UI();

    if (name === '' || price === '' || year === '') {
        return ui.showMessage('Fill in all the fields.', 'danger')
    }

    ui.addProduct(product);
    ui.resetForm()
    ui.showMessage('Product successfully added.', 'success')

})

document.getElementById('product-list').addEventListener('click', (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
})
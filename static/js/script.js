let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const productId = this.getAttribute('data-product-id');
        const productName = this.closest('.card-body').querySelector('.card-title').innerText;
        const productPrice = parseFloat(this.closest('.card-body').querySelector('.card-price').innerText.replace('₹ ', ''));

        // Add product to cart
        const product = { id: productId, name: productName, price: productPrice };
        cart.push(product);
        updateCart();
    });
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');

    // Update cart count
    cartCount.innerText = cart.length;

    // Update total amount
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
    cartTotal.innerText = 'Total: ₹ ' + totalAmount;

    // Update cart items display
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ₹ ${item.price}`;
        cartItems.appendChild(li);
    });
}




function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Call this function when rendering the cart items
cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - ₹ ${item.price}`;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => removeFromCart(item.id));
    li.appendChild(removeButton);
    cartItems.appendChild(li);
});





// shop now

const shop_cart = [
    { id: 1, name: 'Elegant Leather Watch', price: 1999, quantity: 1, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/4/1/i/-original-imagnvwumakwug6c.jpeg?q=20&crop=false' },
    { id: 2, name: 'Sport Chronograph Watch', price: 2499, quantity: 1, image: 'https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false' },
    { id: 3, name: 'Classic Analog Watch', price: 1499, quantity: 1, image: 'https://i5.walmartimages.com/seo/George-Men-s-Watch-2-Tone-Silver-Gold-Case-Blue-Easy-Read-Dial-2-Tone-Silver-Gold-Expansion-Band-FMDOGE043_cc21d6fb-1fa4-4ec9-a9ff-4dbfc7fea089.2c1db53457a73a7338e9c862177358f5.jpeg' },
];

const shop_cartItemsContainer = document.getElementById('shop_cart-items');
const subtotalElement = document.getElementById('subtotal');
const modalTotal = document.getElementById('modal-total');

function updateShopCartView() {
    shop_cartItemsContainer.innerHTML = '';
    let subtotal = 0;

    shop_cart.forEach((item) => {
        subtotal += item.price * item.quantity;

        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}">
                <div class="flex-grow-1">
                    <h5>${item.name}</h5>
                    <p>Price: ₹${item.price}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <span class="ms-4">₹${item.price * item.quantity}</span>
                <span class="ms-4 remove-item" onclick="removeItem(${item.id})">×</span>
            </div>
        `;
        shop_cartItemsContainer.appendChild(card);
    });

    subtotalElement.textContent = `₹${subtotal}`;
    modalTotal.textContent = `₹${subtotal}`;
}

function increaseQuantity(id) {
    const item = shop_cart.find((item) => item.id === id);
    if (item) item.quantity += 1;
    updateShopCartView();
}

function decreaseQuantity(id) {
    const item = shop_cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateShopCartView();
    }
}

function removeItem(id) {
    const index = shop_cart.findIndex((item) => item.id === id);
    if (index !== -1) {
        shop_cart.splice(index, 1);
        updateShopCartView();
    }
}

updateShopCartView();

// Checkout Modal Script
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the modal total amount element
    const modalTotalElement = document.getElementById('modal-total');

    // Get the product price dynamically passed from the backend
    const productPrice = parseFloat(document.getElementById('product-price').dataset.price);

    // Update the modal total with the product price
    if (modalTotalElement) {
        modalTotalElement.textContent = `₹${productPrice}`;
    }

    // Pay Now Button Handler
    const payNowButton = document.querySelector('.btn-success');
    if (payNowButton) {
        payNowButton.addEventListener('click', () => {
            alert(`Payment of ₹${productPrice} was successful!`);
            // Optionally redirect the user after payment
            // window.location.href = '/thank-you/';
        });
    }
});


// shop filter section
k
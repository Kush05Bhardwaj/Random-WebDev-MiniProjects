// Product Data
const products = [
    { id: 1, name: "Laptop", price: 50000, desc: "High performance laptop" },
    { id: 2, name: "Phone", price: 20000, desc: "Smartphone with great camera" },
    { id: 3, name: "Headphones", price: 3000, desc: "Noise cancelling" }
];

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render Products
function displayProducts() {
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <h4>₹${p.price}</h4>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    });
}

// Add to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(c => c.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
}

// Update Cart UI
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));

    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    const countEl = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;

        cartItems.innerHTML += `
        <div>
            <h4>${item.name}</h4>
            <p>₹${item.price} x ${item.qty}</p>
            <button onclick="changeQty(${item.id}, 1)">+</button>
            <button onclick="changeQty(${item.id}, -1)">-</button>
            <button onclick="removeItem(${item.id})">Remove</button>
        </div>`;
    });

    totalEl.innerText = total;
    countEl.innerText = count;
}

// Change Quantity
function changeQty(id, change) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }

    updateCart();
}

// Remove Item
function removeItem(id) {
    cart = cart.filter(c => c.id !== id);
    updateCart();
}

// Toggle Cart
function toggleCart() {
    document.getElementById("cart").classList.toggle("hidden");
}

// Checkout
function showCheckout() {
    document.getElementById("checkout").classList.remove("hidden");
}

// Place Order
function placeOrder() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;

    if (!name || !address) {
        alert("Please fill all details");
        return;
    }

    document.getElementById("confirmation").innerText =
        `Order placed successfully! Thank you, ${name} 🎉`;

    cart = [];
    updateCart();
}

// Initial Load
displayProducts();
updateCart();
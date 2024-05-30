// Function to add item to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Item added to cart');
}

// Function to update the cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(element => {
        element.innerText = itemCount;
    });
}

// Attach event listeners to the "Add to cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            let name = this.getAttribute('data-name');
            let price = this.getAttribute('data-price');
            addToCart(name, price);
        });
    });
    updateCartCount(); // Initial cart count update
});

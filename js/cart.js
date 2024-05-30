// Function to display the cart items
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <h5>${item.name}</h5>
            <p>Price: £${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalContainer.innerHTML = '<h3>Total: £${total.toFixed(2)}</h3>';
}

// Function to update the cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = itemCount;
}

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updateCartCount();
});

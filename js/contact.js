 // Function to update the cart count
 function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(element => {
        element.innerText = itemCount;
    });
}

// Initial cart count update
document.addEventListener('DOMContentLoaded', updateCartCount);
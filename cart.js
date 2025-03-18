document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to display cart items
    // Function to display cart items
// Function to display cart items
// Function to display cart items
function displayCartItems() {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    cartContainer.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
        totalPriceElement.innerText = `₹0`; // Set total price to 0
        checkoutButton.disabled = true; // Disable checkout if cart is empty
    } else {
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            const imageUrl = item.imageUrl || "https://via.placeholder.com/100"; // Fallback if no image provided

            itemElement.innerHTML = `
                <img src="${imageUrl}" alt="${item.product}" class="cart-item-image">
                <h5>${item.product}</h5>
                <p>Price: ₹${item.price}</p>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(itemElement);
            totalPrice += item.price * item.quantity; // Calculate total price
        });

        // Set the total price in the element
        totalPriceElement.innerText = `₹${totalPrice}`; // Update total price display
        checkoutButton.disabled = false; // Enable checkout if items are present
    }
}

// Function to remove an item from the cart
window.removeFromCart = (index) => {
    if (index >= 0 && index < cartItems.length) {
        cartItems.splice(index, 1); // Remove item from the cart
        localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
        displayCartItems(); // Re-display cart items
    }
};





    // Remove item from cart
    window.removeFromCart = (index) => {
        if (index >= 0 && index < cartItems.length) {
            cartItems.splice(index, 1); // Remove item from the cart
            localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
            displayCartItems(); // Re-display cart items
        }
    };

    // Update item quantity in cart
    window.updateQuantity = (index, quantity) => {
        if (quantity <= 0) {
            removeFromCart(index); // Remove item if quantity is 0
        } else {
            cartItems[index].quantity = Number(quantity);
            localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
            displayCartItems(); // Re-display cart items
        }
    };

    // Initialize and display cart on page load
    displayCartItems();
});
// Add event listener for the "Proceed to Checkout" button
document.getElementById('proceed-to-checkout').addEventListener('click', function() {
    // Redirect to checkout page
    window.location.href = 'checkout.html'; // Ensure this path is correct
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to handle adding items to the cart
function addToCart(product, price, imageUrl) {
    const existingProduct = cart.find(item => item.product === product);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if product exists
    } else {
        cart.push({ product, price, quantity: 1, imageUrl }); // Add new product with image URL
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    updateCartDisplay();
    showCartNotification(`${product} has been added to your cart!`);
}


// Function to display cart details or cart count in the header
function updateCartDisplay() {
    const cartCountElement = document.getElementById('cart-count'); // Optional, if you want to show cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.innerText = totalItems;
    }
    console.log(cart); // For testing
}

// Function to show a notification when an item is added to the cart
function showCartNotification(message) {
    const notificationElement = document.getElementById('cart-notification');
    notificationElement.innerText = message;  // Set the notification message
    notificationElement.style.display = 'block';  // Show the notification

    // Optionally style it (or use CSS)
    notificationElement.style.backgroundColor = '#4CAF50';  // Green background
    notificationElement.style.color = 'white';
    notificationElement.style.padding = '10px';
    notificationElement.style.borderRadius = '5px';
    notificationElement.style.position = 'fixed';  // Stick to one position (optional)
    notificationElement.style.top = '20px';  // Position it at the top
    notificationElement.style.right = '20px';   // Position it to the right

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 3000);
}

// Attach event listeners to add-to-cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        const imageUrl = button.getAttribute('data-image'); // Get image URL from data attribute
        
        addToCart(product, price, imageUrl); // Pass image URL to addToCart function
    });
});


// Initialize cart display on page load
updateCartDisplay();


// script.js

// Handle Newsletter Signup
document.querySelector('.newsletter form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Add event listeners for "Add to Cart" buttons (if applicable)
const addToCartButtons = document.querySelectorAll('.product-item button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        const imageUrl = button.getAttribute('data-image'); // Get image URL from data attribute
        
        addToCart(product, price, imageUrl); // Pass image URL to addToCart function
    });
    
});





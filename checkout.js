// Function to create sparkles
function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    // Position the sparkle at the click location
    const x = e.clientX;
    const y = e.clientY;
    
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    // Append the sparkle to the body
    document.body.appendChild(sparkle);

    // Remove sparkle after animation
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Event listener for the checkout button
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission for demo

    // Show the success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block'; // Display success message

    // Create sparkles at the center of the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    createSparkle({ clientX: centerX, clientY: centerY });

    // Optionally, you can submit the form here if you have a backend
    // e.target.submit(); // Uncomment if you want to submit the form
});

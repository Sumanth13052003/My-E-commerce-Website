// Toggle between Login and Signup forms
document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
});

document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get user info from the form
    const username = document.getElementById('login-username').value;
    
    // Simulate fetching a profile image (In a real app, this would come from the server)
    const userImage = 'https://via.placeholder.com/150'; // Placeholder image

    // Save user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('userImage', userImage);

    // Display success message
    const authMessage = document.getElementById('auth-message');
    authMessage.style.display = 'block';
    authMessage.textContent = 'Login successful! Redirecting...';

    // Redirect to homepage (or any page) after login
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000); // 2 seconds delay before redirecting
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get user info from the form
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    
    // Simulate fetching a profile image (In a real app, this would come from the server)
    const userImage = 'https://via.placeholder.com/150'; // Placeholder image

    // Save user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('userImage', userImage);

    // Display success message
    const authMessage = document.getElementById('auth-message');
    authMessage.style.display = 'block';
    authMessage.textContent = 'Signup successful! Redirecting...';

    // Redirect to homepage (or any page) after signup
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000); // 2 seconds delay before redirecting
});

// Show user info in the navigation bar on page load
window.addEventListener('load', function() {
    const username = localStorage.getItem('username');
    const userImage = localStorage.getItem('userImage');

    if (username && userImage) {
        // Display the user profile section
        const userProfile = document.getElementById('user-profile');
        userProfile.style.display = 'flex'; // Make it visible

        // Update the user image and name in the navigation bar
        document.getElementById('user-name').textContent = username;
        document.getElementById('user-image').src = userImage;
    }
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear localStorage to remove user info
    localStorage.removeItem('username');
    localStorage.removeItem('userImage');

    // Redirect to the login page
    window.location.href = 'login.html'; // Make sure this points to your login page
});

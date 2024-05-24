document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Call a function to authenticate the user
    authenticateUser(username, password);
});

function authenticateUser(username, password) {
    // Here, you would typically send a request to a server to authenticate the user
    // For simplicity, we'll use a hardcoded username and password
    const validUsername = 'user123';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to another page or perform other actions upon successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents the form from submitting normally

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple, simulated validation
            // In a real app, you would send this to a server for authentication
            if (username === 'student' && password === 'password123') {
                // Successful login: Redirect to the main dashboard
                window.location.href = 'index.html'; // Assuming your dashboard HTML is named index.html
            } else {
                // Failed login: Show an alert
                alert('Invalid username or password. Please try again.');
            }
        });
    }
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    alert("Signup successful!");
    // Here, you would normally send the form data to the server using AJAX or fetch
    // For this example, we'll just reset the form
    this.reset();
});

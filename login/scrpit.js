document.getElementById('toggle-form').addEventListener('click', function(event) {
    event.preventDefault();
    
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleText = document.getElementById('toggle-text');
    
    if (formTitle.textContent === 'Login') {
        formTitle.textContent = 'Sign Up';
        submitBtn.textContent = 'Sign Up';
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-form">Login</a>';
    } else {
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-form">Sign Up</a>';
    }
});

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'dashboard.html';
});

// Add click handlers for resource buttons
document.querySelectorAll('.resource-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Add resource handling logic here
        console.log('Resource button clicked:', btn.textContent);
    });
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your signup logic here
    window.location.href = 'dashboard.html'; // Temporary redirect
});
// Wait for the HTML document to fully load before running our script
document.addEventListener('DOMContentLoaded', () => {
    // Grab our surprise button by its ID
    const alertBtn = document.getElementById('alertBtn');

    // Listen for a 'click' event on the button
    alertBtn.addEventListener('click', () => {
        // Show a custom popup greeting message
        alert('Thank you for viewing my website and checking out my portfolio!');
        
        // Also change the button text after it's clicked
        alertBtn.textContent = 'Awesome! Keep Coding 🌟';
    });
});

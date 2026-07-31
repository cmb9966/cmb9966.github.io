// Wait for the HTML document to fully load before running code
document.addEventListener('DOMContentLoaded', () => {
    
    // Select our button element
    const alertBtn = document.getElementById('alertBtn');

    // Add click event listener
    alertBtn.addEventListener('click', () => {
        // Change button text cleanly on click
        alertBtn.textContent = "Thanks for stopping by! ✨";
        alertBtn.style.backgroundColor = "#22c55e"; // Subtle success green
    });

});

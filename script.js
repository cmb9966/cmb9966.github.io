// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button element from our HTML using its ID
    const colorBtn = document.getElementById('colorBtn');
    
    // An array of fun background colors to choose from
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#a29bfe'];
    
    // Listen for a 'click' event on the button
    colorBtn.addEventListener('click', () => {
        // Pick a random color from our array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the card's background color dynamically!
        const card = document.querySelector('.card');
        card.style.backgroundColor = randomColor;
        
        console.log("Button clicked! Card color changed to: " + randomColor);
    });
});

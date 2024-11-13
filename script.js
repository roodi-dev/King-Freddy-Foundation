// Select the menu button and navigation links
const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Function to toggle the menu
function toggleMenu() {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
}

// Event listener for the menu button
menuButton.addEventListener('click', toggleMenu);

// Function to hide the menu button on smaller screens
function handleResize() {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('show'); // Ensure menu is hidden
    }
}

// Initial check on page load
handleResize();

// Add event listener for window resize
window.addEventListener('resize', handleResize);


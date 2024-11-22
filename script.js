// Select the toggle button
const modeToggle = document.getElementById('mode-toggle');

// Add a click event listener to toggle dark mode
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('dark-mode'));
    modeToggle.classList.toggle('dark-mode');
    
    // Change button icon
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀️';
    } else {
        modeToggle.textContent = '🌙';
    }
});

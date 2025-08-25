document.addEventListener('DOMContentLoaded', () => {
    // Function to display the current date
    const displayCurrentDate = () => {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const today = new Date();
            dateElement.textContent = today.toLocaleDateString('en-US', options);
        }
    };

    // Function to handle navigation item clicks
    const handleNavClicks = () => {
        const navItems = document.querySelectorAll('nav ul li');
        navItems.forEach(item => {
            item.addEventListener('click', (event) => {
                // Remove active class from all items
                navItems.forEach(i => i.classList.remove('active'));
                // Add active class to the clicked item
                event.currentTarget.classList.add('active');
            });
        });
    };

    // Initialize functions on page load
    displayCurrentDate();
    handleNavClicks();

    // Example of a dynamic data update (simulated)
    // You could fetch this data from an API in a real application
    const updateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar-fill');
        progressBars.forEach(bar => {
            // Get the percentage from the style attribute
            const percentage = parseInt(bar.style.width, 10);
            console.log(`Course progress updated: ${percentage}%`);
        });
    };

    updateProgressBars();
});
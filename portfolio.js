
// Portfolio JavaScript

console.log("Welcome to Ratikant Malik's Portfolio!");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});

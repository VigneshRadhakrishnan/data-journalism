// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission alert
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
});

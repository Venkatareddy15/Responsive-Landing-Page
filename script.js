// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide About message
    const aboutSection = document.getElementById('about');
    const aboutMessage = document.getElementById('about-message');
    const rect = aboutSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
        aboutMessage.style.display = 'block';
    } else {
        aboutMessage.style.display = 'none';
    }
});

// Also show the message if About link is clicked (for instant jump)
document.querySelector('a[href="#about"]').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('about-message').style.display = 'block';
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-item a');

    // Hide all sections except the home section initially
    sections.forEach(section => {
        section.style.display = section.id === 'home' ? 'block' : 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');

            // Show the target section and hide others
            sections.forEach(section => {
                section.style.display = section.id === targetSection ? 'block' : 'none';
            });
        });
    });
});

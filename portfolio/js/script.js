// Smooth scrolling for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Simple contact form handler (demo only)
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        alert('Thanks, ' + name + '! Your message has been received (demo).');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // --- TYPING ANIMATION ---
    new Typed('.typing-text', {
        strings: ["scalable backends.", "interactive frontends.", "end-to-end solutions.", "under pressure."],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true,
        smartBackspace: true,
    });

    // --- HAMBURGER MENU FOR MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- FADE-IN ANIMATION ON SCROLL ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all content sections and initial hero elements
    document.querySelectorAll('.content-section, .fade-in').forEach(section => {
        observer.observe(section);
    });
     // Manually trigger for elements already in view on load
    document.querySelectorAll('.fade-in').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
    

    // --- ACTIVE NAV LINK HIGHLIGHTING ON SCROLL ---
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(section => {
        navObserver.observe(section);
    });
});

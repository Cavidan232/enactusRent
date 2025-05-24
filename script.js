// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Initialize Tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Village Card Click Effect
document.querySelectorAll('.village-card').forEach(card => {
    card.addEventListener('click', function() {
        const link = this.querySelector('a[href^="villages/"]');
        if (link) {
            window.location.href = link.href;
        }
    });
});

// Testimonial Carousel Auto Cycle
const testimonialCarousel = document.getElementById('testimonialCarousel');
if (testimonialCarousel) {
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
        interval: 5000,
        pause: 'hover'
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Abunəliyiniz uğurla qeydə alındı! Tezliklə yeniliklər haqqında məlumatlandırılacaqsınız.');
            emailInput.value = '';
        }
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
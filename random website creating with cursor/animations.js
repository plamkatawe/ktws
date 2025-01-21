// Typewriter effect for subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Start typing
    type();
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        const text = "Optimize your system performance with one click";
        subtitle.innerHTML = ''; // Clear the subtitle
        setTimeout(() => {
            typeWriter(subtitle, text, 50); // Start typing after a small delay
        }, 500);
    }
});

// Reveal on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with reveal class
document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
}); 
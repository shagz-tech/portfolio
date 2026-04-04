// Change Navigation Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(2, 6, 23, 0.95)';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(2, 6, 23, 0.85)';
        nav.style.boxShadow = 'none';
    }
});

// Simple Click Log for Buttons (Optional)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button Clicked!');
    });
});
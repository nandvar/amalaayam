// Splash screen — character cycle, land on अ, then reveal full name
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const charEl = document.getElementById('splash-char');
    const restEl = document.getElementById('splash-rest');

    const chars = ['क', 'श', 'म', 'प', 'स', 'भ', 'ह', 'अ'];
    let i = 0;
    let delay = 25;

    function cycle() {
        charEl.textContent = chars[i % chars.length];
        i++;

        if (chars[(i - 1) % chars.length] === 'अ' && delay > 65) {
            setTimeout(() => {
                charEl.classList.add('settled');
                restEl.classList.add('visible');
            }, 200);
            setTimeout(() => {
                splash.classList.add('fade-white');
                charEl.style.color = '#0a0a0a';
                restEl.style.color = '#0a0a0a';
            }, 1000);
            setTimeout(() => splash.classList.add('hidden'), 1500);
            return;
        }

        if (i > 3) delay += 10;
        setTimeout(cycle, delay);
    }

    setTimeout(cycle, 100);
});

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const toggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('name');
    alert(`Thank you, ${name}! We'll get back to you within 24 hours.`);
    e.target.reset();
});

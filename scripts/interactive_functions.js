// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.innerHTML = '⬆';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Highlight Active Navigation Link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Fade-In Elements on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Random Color Change on Hover
const randomColorElements = document.querySelectorAll('.random-color');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomColorElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.backgroundColor = getRandomColor();
    });
    element.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// Add Classes for JavaScript Effects
// Scroll to Top Button Style
const style = document.createElement('style');
style.innerHTML = `
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(to right, #EB3678, #4F1787);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
    display: none;
    animation: fadeIn 1s ease-in-out;
}
.scroll-to-top:hover {
    transform: scale(1.1);
}

.fade-in {
    opacity: 0;
    transition: opacity 1.5s ease-out;
}

.appear {
    opacity: 1;
}

.random-color {
    transition: background-color 0.4s ease;
}
`;
document.head.appendChild(style);

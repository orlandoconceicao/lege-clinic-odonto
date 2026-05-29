// ===== Smooth Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Hamburger menu toggle
    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 150px 0px'
};

const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const revealTargets = document.querySelectorAll(
        '.scroll-reveal, .service-card, .testimonial-card, .team-member, .procedure-card, .reason-card, .info-card, .mvv-card'
    );

    revealTargets.forEach(el => {
        el.classList.add('scroll-reveal');
        scrollRevealObserver.observe(el);
    });
});

// ===== Filter Gallery =====
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');

            // Get filter value
            const filterValue = btn.getAttribute('data-filter');

            // Show/hide gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('active');
                    }, 10);
                } else {
                    item.classList.remove('active');
                    item.style.display = 'none';
                    item.classList.add('hidden');
                }
            });
        });
    });
});

// ===== Contact Form =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Simulate form submission
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Reset form
            this.reset();
        });
    }
});

// ===== Button Interactions =====
document.addEventListener('DOMContentLoaded', function() {
    const ctaBtns = document.querySelectorAll('[data-scroll="contact"]');
    
    ctaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ===== Parallax Effect =====
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const blobs = document.querySelectorAll('.gradient-blob');
    
    blobs.forEach((blob, index) => {
        const speed = 0.5 + (index * 0.1);
        blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// ===== Number Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : counter.textContent.includes('%') ? '%' : '');
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, target);
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// ===== Before & After Slider =====
document.addEventListener('DOMContentLoaded', function() {
    const beforeAfterElements = document.querySelectorAll('.before-after');
    
    beforeAfterElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            const afterElement = this.querySelector('.after');
            if (afterElement) {
                afterElement.style.width = percentage + '%';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            const afterElement = this.querySelector('.after');
            if (afterElement) {
                afterElement.style.width = '50%';
            }
        });

        // Touch support for mobile
        element.addEventListener('touchmove', function(e) {
            const rect = this.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            const afterElement = this.querySelector('.after');
            if (afterElement) {
                afterElement.style.width = Math.min(100, Math.max(0, percentage)) + '%';
            }
        });

        element.addEventListener('touchend', function() {
            const afterElement = this.querySelector('.after');
            if (afterElement) {
                afterElement.style.width = '50%';
            }
        });
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Navigation Link =====
document.addEventListener('DOMContentLoaded', function() {
    function setActiveLink() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveLink();
});

// ===== Page Load Animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ===== Service Card Hover Effects =====
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== Image Lazy Loading =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Form Input Effects =====
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = 'var(--accent-color)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = 'var(--border-color)';
        });
    });
});

// ===== Page Transition Animation =====
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0.8';
    document.body.style.transition = 'opacity 0.3s ease-out';
});

// ===== Mobile Menu Close on Outside Click =====
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navbar && !navbar.contains(event.target)) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
});

// ===== Debounce Function =====
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ===== Responsive Navbar Handler =====
const resizeHandler = debounce(function() {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', resizeHandler);

// ===== Scroll to Top Button (Optional) =====
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.id = 'scrollToTop';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
}

// Create scroll to top button on page load
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ===== Add Loading Animation =====
window.addEventListener('load', function() {
    // Remove any loading indicators if they exist
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

console.log('Lege Clinic - Premium Website Loaded Successfully');

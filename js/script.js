// Funny messages for various buttons
const buttonMessages = {
    cart: [
        "Preparing to revolutionize your kitchen...",
        "Calculating optimal toast trajectories...",
        "Initializing quantum crumb technology...",
        "Synchronizing with toast satellites...",
        "Charging up the anti-gravity modules..."
    ],
    enroll: [
        "Validating your toast potential...",
        "Preparing quantum learning modules...",
        "Synchronizing with toast masters...",
        "Calculating tuition in toast credits...",
        "Initializing toast wisdom transfer..."
    ],
    support: [
        "Connecting to toast support dimension...",
        "Analyzing your toast emergency...",
        "Dispatching toast rescue team...",
        "Calculating quantum solution...",
        "Preparing toast therapy session..."
    ]
};

// Generic button animation function
function animateButton(button, messageType) {
    const originalText = button.textContent;
    const messages = buttonMessages[messageType];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    button.textContent = randomMessage;
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = messageType === 'cart' ? "Added to Cart!" : 
                           messageType === 'enroll' ? "Enrolled!" : 
                           "Request Sent!";
        button.style.backgroundColor = '#ff6b6b';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.disabled = false;
        }, 1000);
    }, 2000);
}

// Add click handlers to all interactive buttons
document.addEventListener('DOMContentLoaded', () => {
    // Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            animateButton(this, 'cart');
        });
    });

    // Enroll buttons
    document.querySelectorAll('.enroll-button, .workshop-button').forEach(button => {
        button.addEventListener('click', function() {
            animateButton(this, 'enroll');
        });
    });

    // Support buttons
    document.querySelectorAll('.support-button, .cert-button').forEach(button => {
        button.addEventListener('click', function() {
            animateButton(this, 'support');
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observe elements for animation
    document.querySelectorAll('.feature, .testimonial, .timeline-item, .team-member, .faq-item, .course, .workshop').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-out';
        observer.observe(element);
    });

    // Add hover effects to CTA buttons
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.textContent = "Embrace the Future of Toast!";
        });
        
        ctaButton.addEventListener('mouseout', () => {
            ctaButton.textContent = "Revolutionize Your Breakfast ($999.99)";
        });
    }
});

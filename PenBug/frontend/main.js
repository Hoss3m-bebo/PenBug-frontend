// PenBug Main JavaScript - Basic interactivity for the platform

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme and RTL support
    initializeTheme();

    // Add event listeners for interactive elements
    initializeEventListeners();

    // Initialize any animations or effects
    initializeEffects();
});

function initializeTheme() {
    // Check for RTL language preference
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    }

    // Apply dark theme by default (could be made configurable)
    document.body.classList.add('dark-theme');
}

function initializeEventListeners() {
    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });

    // Button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
}

function initializeEffects() {
    // Add subtle animations to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Basic form validation
    const form = event.target;
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--accent-primary)';
            isValid = false;
        } else {
            field.style.borderColor = 'var(--border-color)';
        }
    });

    if (isValid) {
        // Simulate form submission
        showNotification('Form submitted successfully!', 'success');

        // Reset form after submission
        setTimeout(() => {
            form.reset();
        }, 1000);
    } else {
        showNotification('Please fill in all required fields.', 'error');
    }
}

function handleButtonClick(event) {
    const button = event.target;

    // Add loading state to buttons
    if (!button.classList.contains('loading')) {
        button.classList.add('loading');
        button.textContent = 'Processing...';

        // Remove loading state after 2 seconds (simulate async operation)
        setTimeout(() => {
            button.classList.remove('loading');
            button.textContent = button.dataset.originalText || button.textContent.replace('Processing...', button.dataset.originalText || 'Submit');
        }, 2000);

        // Store original text
        if (!button.dataset.originalText) {
            button.dataset.originalText = button.textContent;
        }
    }
}

function handleNavClick(event) {
    // Smooth scrolling for anchor links
    const link = event.target;
    const href = link.getAttribute('href');

    if (href.startsWith('#')) {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '1rem';
    notification.style.borderRadius = '5px';
    notification.style.color = 'white';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '300px';

    if (type === 'success') {
        notification.style.backgroundColor = 'var(--accent-primary)';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#ff4444';
    } else {
        notification.style.backgroundColor = 'var(--bg-secondary)';
    }

    // Add to page
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential use in other scripts
window.PenBug = {
    showNotification,
    debounce
};

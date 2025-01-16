// script.js

// Function to animate buttons on click
const buttons = document.querySelectorAll('nav button');
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'transform 0.1s';  // quick shrink effect
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';  // reset scale if mouse leaves
    });
});

// Function to add hover effect on gallery images
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s';  // smooth scale effect
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});
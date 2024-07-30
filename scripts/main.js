// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add functionality to project images
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            alert('Image clicked: ' + img.alt);
        });
    });
});

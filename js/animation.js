document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image-container123 img');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the image is visible
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the animation
                const img = entry.target;
                img.classList.add('visible');
                observer.unobserve(img); // Stop observing after it's visible
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    images.forEach(image => {
        observer.observe(image); // Start observing each image
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.itemh');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the item is visible
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                item.classList.add('visible'); // Add the visible class
                observer.unobserve(item); // Stop observing after it's visible
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    items.forEach(item => {
        observer.observe(item); // Start observing each item
    });
});


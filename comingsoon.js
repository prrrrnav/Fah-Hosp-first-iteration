document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = ['./assets/hero-picture.jpg', './assets/2.jpg', './assets/3.jpg', './assets/4.jpg'];
    const imageElement = document.getElementById('image');
    let currentIndex = 0;

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        // Update the image source after the fade out
        setTimeout(() => {
            imageElement.src = imageUrls[currentIndex];
        }, 500); // Wait for half of the transition duration before changing the image

        // Increment index or loop back to the beginning
        currentIndex = (currentIndex + 1) % imageUrls.length;

        // Fade in the new image after the source has been updated
        setTimeout(() => {
            imageElement.style.opacity = 1;
        }, 600); // Wait for the image source to update before fading in
    }

    setInterval(changeImage, 3000);
});

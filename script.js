// Select the image container element where the images are displayed in 3D
const imageContainerEl = document.querySelector(".image-container");

// Select the previous and next buttons by their respective IDs
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

// Initialize a variable to keep track of the current rotation angle
let x = 0;

// Declare a variable to hold the timer for automatic rotation
let timer;

// Add an event listener to the previous button
// When the button is clicked, increase the rotation angle by 45 degrees
// Clear any existing timer and update the gallery rotation
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

// Add an event listener to the next button
// When the button is clicked, decrease the rotation angle by 45 degrees
// Clear any existing timer and update the gallery rotation
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

// Function to update the gallery rotation
function updateGallery() {
  // Apply the rotation transformation to the image container
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  
  // Set a timer to automatically rotate the gallery every 3 seconds
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

// Initial call to start the gallery rotation
updateGallery();

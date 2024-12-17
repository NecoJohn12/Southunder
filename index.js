let scrollTimeout;

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    
    // Set the background color while scrolling
    navbar.style.background = '#000'; // Solid black background
    navbar.style.transition = 'background 1s ease'; // Smooth transition

    // Clear any previously set timeout
    clearTimeout(scrollTimeout);

    // Set a timeout to reset the background after scrolling stops
    scrollTimeout = setTimeout(function () {
        navbar.style.background = 'rgba(0, 0, 0, 0)'; // Transparent background
    }, 1300); // Adjust time as needed (150ms works well)
});


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    }));
  });
  
  const hiddenElements =document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  // Get the modal elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".modal .close");

// Add event listeners to all image containers with the "zoom-trigger" class
const zoomTriggers = document.querySelectorAll(".zoom-trigger");

zoomTriggers.forEach(trigger => {
    trigger.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        const image = this.querySelector("img"); // Get the image inside the clicked container
        if (image) {
            // Set modal image source and caption
            modal.style.display = "block";
            modalImage.src = image.src;
            captionText.innerHTML = image.alt || "No description available";
        }
    });
});

// Close the modal when clicking the "X"
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal image
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


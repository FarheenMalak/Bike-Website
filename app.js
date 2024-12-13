let slideIndex = 0; // Initialize slide index
$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
});
  // toggle menu/navbar script
  $(document).ready(function(){
    // Click event for the menu button
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $(this).find("i").toggleClass("active"); // Toggle the icon as well
    });
});

menuBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

function changeColor() {
  // Select all color circles
  const colorCircles = document.querySelectorAll('.color-circle');

  // Select the hero section
  const heroSection = document.querySelector('.product-section'); 

  // Select the euphoria title and whitebg elements
  const euphoriaTitle = document.querySelector('.euphoria-title');
  const blackText = document.querySelectorAll('.whitebg');

  // Loop through each color circle
  colorCircles.forEach(circle => {
      circle.addEventListener('click', function() {
          // Get the color data from the clicked circle
          const color = circle.getAttribute('data-color');
          
          // Remove border from all circles before applying to the clicked one
          colorCircles.forEach(c => c.style.border = 'none');
          
          // Change the background color of the hero section and the text stroke
          if (color === 'white') {
              heroSection.style.backgroundColor = '#ffffff';
              euphoriaTitle.style.webkitTextStroke = '1px black'; // Set black stroke
              blackText.forEach(element => {
                  element.style.color = '#030303';
              });
              const nav = document.querySelector('.navbar');
              nav.style.backgroundColor= '#030303'
              colorCircles.forEach(c => c.style.border = '2px solid black');
          }
          if (color === 'gray') {
              heroSection.style.backgroundColor = '#c4c4c4';
              euphoriaTitle.style.webkitTextStroke = '1px white'; // Reset stroke to white
              
              colorCircles.forEach(c => c.style.border = '2px solid black');
          }if (color === 'black') {
              heroSection.style.backgroundColor = '#030303';
              blackText.forEach(element => {
                element.style.color = '#ffffff';
            });
              colorCircles.forEach(c => c.style.border = '2px solid white');
          }

          colorCircles.forEach(c => c.style.opacity = 0.6); // Dim all circles
          circle.style.opacity = 1;
      });
  });
}
function changeSize() {
  // Select the cycle image and size buttons
  const cycleImg = document.getElementById('cycleimg');
  const sizeButtons = document.querySelectorAll('.size-btn');

  // Loop through each size button
  sizeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const size = button.getAttribute('data-size');
          
          // Change the image size based on the selected button
          if (size === 'small') {
              cycleImg.style.height = '10rem'; // Set to small size
              cycleImg.style.width = 'auto';  // Maintain aspect ratio
          } else if (size === 'medium') {
              cycleImg.style.height = '15rem'; // Set to medium size
              cycleImg.style.width = 'auto';   // Maintain aspect ratio
          } else if (size === 'large') {
              cycleImg.style.height = '20rem'; // Set to large size
              cycleImg.style.width = 'auto';   // Maintain aspect ratio
          }
          
          // Optional: Highlight the selected button (optional)
          sizeButtons.forEach(btn => btn.style.opacity = 0.6); // Dim all buttons
          button.style.opacity = 1; // Highlight the selected button
      });
  });
}

function changeMainImage(clickedBox) {
  // Get the image source from the clicked box
  const newImageSrc = clickedBox.querySelector('img').getAttribute('src');
  
  // Set the new image as the source of the main cycle image
  const cycleImg = document.getElementById('cycleimg');
  cycleImg.setAttribute('src', newImageSrc);
}

function moveSlide(step) {
    const slides = document.querySelectorAll('.custom-img-cont');
    const totalSlides = slides.length;

    // Update slide index based on the step (prev or next)
    slideIndex += step;

    // Ensure slide index is within bounds (0 to totalSlides - 3, as we show 3 images at once)
    if (slideIndex < 0) {
        slideIndex = totalSlides - 3;  // Loop back to the last set of 3 images
    } else if (slideIndex >= totalSlides - 2) {
        slideIndex = 0;  // Loop back to the first set of 3 images
    }

    // Move the slider to the appropriate slide
    const slider = document.querySelector('.slider');
    const newTransformValue = -slideIndex * 33.33;  // -33.33% for each slide (showing 3 images)
    slider.style.transform = `translateX(${newTransformValue}%)`;
}
function showTab(tabName) {
  // Hide all tab contents
  const allContents = document.querySelectorAll('.tab-content');
  allContents.forEach(content => {
    content.classList.add('hidden');
  });

  // Remove active class from all tabs
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Show the selected tab content
  document.getElementById(tabName).classList.remove('hidden');

  // Add active class to the clicked tab
  const activeTab = document.querySelector(`.tab[onclick="showTab('${tabName}')"]`);
  activeTab.classList.add('active');
}


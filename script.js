const button = document.querySelector('.change-color-btn');

// Add an event listener for the button click
button.addEventListener('click', function() {
  // Toggle the 'new-colors' class on the body element
  document.body.classList.toggle('new-colors');
});

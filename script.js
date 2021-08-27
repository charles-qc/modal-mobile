/**
 * Mobile Modal 
 * Written by: Charles Harris 
 */

// Get the modal.
var modal = document.getElementById("modal");

// Get the button that opens the modal.
var modalBtn = document.getElementById("modalBtn");

// Get the <i> element that closes the modal.
var exitBtn = document.getElementById("exit-btn");

// When the user clicks the button, open the modal 
modalBtn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
exitBtn.onclick = function() {
  modal.style.display = "none";
}

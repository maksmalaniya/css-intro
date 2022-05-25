// BOM - Browser Object Model
// window
// DOM - Document Object Model
// document
//document.querySelector() // one element
//document.querySelectorAll() //array of elements

const clock = document.querySelector('clock');
clock.innerHTML = new Date().toLocaleTimeString();
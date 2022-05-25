// BOM - Browser Object Model
// window
// DOM - Document Object Model
// document
//document.querySelector() // one element
//document.querySelectorAll() //array of elements

(function() {
    const clock = document.querySelector('.clock');
    function updateClock() {
        clock.innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
})();

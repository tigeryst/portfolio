let myButton = document.querySelector('#changeClick');
let myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world!';  // sets the content of element to desired text

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName); //stores username in browser
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

// Initialisation code - sets up the page when it first loads.
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
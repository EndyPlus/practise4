// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

document.body.style.backgroundColor = 'lightblue';
myHeading.style.color = 'white';
myButton.style.color = 'white';
myButton.style.backgroundColor = 'navy';

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else if (mySrc === 'images/firefox2.png') {
        myImage.setAttribute('src', 'images/Opera.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
  }

  function makeBold(element1) {
    element1.style.fontWeight = 'bold';
  }
  
  function bodyColor(element) {
    element.style.backgroundColor = 'green';
  }
  
  
var nav = document.querySelector('.navbar');
var scrollUp = document.querySelector('.scroll-up-btn');

function draw(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
    if(document.body.scrollTop>500 || document.documentElement.scrollTop>500){
        scrollUp.classList.add('show');
    }
    else{
        scrollUp.classList.remove('show');
    }
}

// typing animation script 

const typedTextSpan = document.querySelector(".txt-type");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Student", "Coder"];
const typingDelay = 150;
const erasingDelay = 130;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
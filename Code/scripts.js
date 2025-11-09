// ...existing code...

document.addEventListener('DOMContentLoaded', function () {
  const headerWrap = document.querySelector('.header__container');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav__links ul');

  if (!toggle || !headerWrap) return;

  // set a CSS custom property for spacing fallback (optional)
  if (navLinks) {
    const count = navLinks.children.length || 0;
    headerWrap.style.setProperty('--nav-links-count', count);
  }

  toggle.addEventListener('click', function () {
    const isOpen = headerWrap.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    // prevent page scroll when menu open (optional)
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
});

// ...existing code...







































/*let name;
let age;


Display = document.getElementById("result");
name = window.prompt("Enter Your Name");
age = window.prompt("Enter Your Age");
if (Number(age) > 18){
    console.log(Display = document.getElementById("result").textContent= `${name} you eligible to vote`);
}else{
    console.log(Display = document.getElementById("result").textContent= `${name} you eligible to vote`);
}





/*
let isLogged = false;
let username;
let password;
let sum = 0;
let count = 0;

while ( ){
    //username = window.prompt("Enter your Name")
    //password = window.prompt("Enter Your Passowrd")
    console.log(`hello ${username} it's your password ${password}`)
}




/*
let counterElement = document.getElementById("counterValue");


function onIncrement() {
    let previousCounterValue = counterElement.textContent
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    console.log(updatedCounterValue);
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement.style.color="green"
    } else if (updatedCounterValue < 0) {
        counterElement.style.color="red"
    } else{
        counterElement.style.color="black"
    }
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;


    if (updatedCounterValue > 0) {
        counterElement.style.color="green"
    } else if (updatedCounterValue < 0) {
        counterElement.style.color="red"
    } else{
        counterElement.style.color="black"
    }

}

function onReset() {
    counterElement.textContent = 0
    counterElement.style.color="black"
}



let x = parseInt(prompt("enter a digit : "));
if ( x % 5 == 0) {
    console.log("Devisible by 5")
} else{
    console.log("Not devisible by 5")
} */
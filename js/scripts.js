// =============================    VARIABLES   ==================================== //
let contactLink = document.querySelector('.main-nav span');
let contactCross = document.querySelector('.cross');
let contactPan = document.querySelector('.contact');
let curtain = document.querySelector('.curtain');

// :::::::::::::::::::::::::::::::      FUNCTIONS   ::::::::::::::::::::::::::::::::: //


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    METHODS     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //


contactLink.addEventListener('click', function() {
    contactPan.style.right = '0%';
    contactPan.style.opacity = '1';
})
contactCross.addEventListener('click', function() {
    contactPan.style.opacity = '0';
    contactPan.style.width = '0vw';
})

window.onload = curtain.style.right= '-100%';
// =============================    VARIABLES   ==================================== //
let contactLink = document.querySelector('.main-nav span');
console.log(contactLink);
let contactCross = document.querySelector('.cross');
console.log(contactCross);
let contactPan = document.querySelector('.contact');
// :::::::::::::::::::::::::::::::      FUNCTIONS   ::::::::::::::::::::::::::::::::: //


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    METHODS     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //


contactLink.addEventListener('click', function() {
    contactPan.style.right = '0%';
    contactPan.style.opacity = '1';
})
contactCross.addEventListener('click', function() {
    contactPan.style.opacity = '0';
    contactPan.style.right = '-100%';
})
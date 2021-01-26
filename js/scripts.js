// =============================    VARIABLES   ==================================== //
let contactLink = document.querySelector('.main-nav span');
let contactCross = document.querySelector('.cross');
let contactPan = document.querySelector('.contact');
let curtain = document.querySelector('.curtain');
let header = document.querySelector('.header');
let splash = document.querySelector('.splash');
let timeoutID;
let projectTitle = document.querySelectorAll('.projects-panel a');
console.log(projectTitle);

// :::::::::::::::::::::::::::::::      FUNCTIONS   ::::::::::::::::::::::::::::::::: //
function openContact() {
    contactPan.style.transform = "translateX(0%)";
}
function closeContact() {
    contactPan.style.transform = "translateX(100%)";
}
function openAnimes() {
    // reduce width of curtain
    curtain.style.transform = "translateX(100%)";
    // bring down the nav
    header.style.transform = "translateY(0%)";
    // bring up the splash
    if (splash) {
        splash.style.transform  = "translateY(0%)";
    }
}
function startOpenAnimes() {
    timeoutID = window.setTimeout(openAnimes, 500);
}

// function showProjectBG() {
//     for(i = 0 ; i < projectTitle.lenth ; i++) {
//         if(projectTitle[i].addEventListener('mouseover')) {

//         }
//     }
// }
// projectTitle.addEventListener('mouseover', function(){
//     console.log('la souris est dessus');
// })
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    METHODS     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //

// ? -------------------------------------------------------- open/close contact panel
contactLink.addEventListener('click', openContact);
contactCross.addEventListener('click', closeContact);

// ? -------------------------------------------------------- onload effects
window.onload = startOpenAnimes;

// ? -------------------------------------------------------- project bg shown on mouseover
// projectTitle.addEventListener('mouseover', showProjectBG);
// projectTitle.addEventListener('mouseout', hideProjectBG);


// faire un timer on load (delay .5s)
// après le timer déclancher tous les éléments
/* 
    1 volet (.5s ease-in-out)
    2 nav descend et splash monte (.2s ease-in-out .2s)
*/
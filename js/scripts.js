// =============================    VARIABLES   ==================================== //
let contactLink = document.querySelector('.main-nav span');
let contactCross = document.querySelector('.cross');
let contactPan = document.querySelector('.contact');
let curtain = document.querySelector('.curtain');
let header = document.querySelector('.header');
let splash = document.querySelector('.splash');
let timeoutID;
let projectTitle = document.querySelectorAll('.projects-panel a');
let projectBG = document.querySelectorAll('.project-bg');
let allElements = document.querySelectorAll('.project-wrap *');
console.log(allElements);


// :::::::::::::::::::::::::::::::      FUNCTIONS   ::::::::::::::::::::::::::::::::: //
function openContact() {
    contactPan.style.transform = "translateX(0%)";
}

function closeContact() {
    contactPan.style.transform = "translateX(100%)";
}

function openAnimes() {
    // reduce width of curtain
    if (curtain) {
        curtain.style.transform = "translateX(100%)";
    }
    // bring down the nav
    header.style.transform = "translateY(0%)";
    // bring up the splash
    if (splash) {
        splash.style.transform = "translateY(0%)";
    }
}

function startOpenAnimes() {
    timeoutID = window.setTimeout(openAnimes, 1000);
}

function toggleProjectBG() {

    for (let i = 0; i < projectTitle.length; i++) {
        function showProjectBG() {
            projectBG[i].classList.remove('project-bg');
        }

        function hideProjectBG() {
            projectBG[i].classList.add('project-bg');
        }
        projectTitle[i].addEventListener('mouseover', showProjectBG);
        projectTitle[i].addEventListener('mouseout', hideProjectBG);
    }
}

function showElement() {
    let currentScroll = window.scrollY;

    for (let i = 0; i < allElements.length; i++) {

        let hElement = allElements[i].offsetHeight;
        let elementTop = allElements[i].getBoundingClientRect();
        // console.log(elementTop.y); 

        if (currentScroll > (elementTop.y + hElement)) {
            allElements[i].classList.add('revealed');
        } else if ((currentScroll < (elementTop.y + (hElement / 2)))) {
            allElements[i].classList.remove('revealed');
        }
    }
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    METHODS     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //

// ? -------------------------------------------------------- open/close contact panel
contactLink.addEventListener('click', openContact);
contactCross.addEventListener('click', closeContact);

// ? -------------------------------------------------------- onload effects
window.onload = startOpenAnimes;

// ? -------------------------------------------------------- project bg shown on mouseover
window.addEventListener('mouseover', toggleProjectBG);

// ? -------------------------------------------------------- project element smooth appearing
window.addEventListener('scroll', showElement);











// ? -------------------------------------------------------- initialize swiper
// var swiper = new Swiper('.swiper-container', {
//     cssMode: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination'
//     },
//     mousewheel: true,
//     keyboard: true,
//   });
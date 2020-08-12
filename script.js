// --- TYPING - MAIN PAGE ---

const texts = ['Filip.', 'a Front-End Developer.', 'a Podcaster.', 'a Recruiter.'];
let count = 0; // each induvidual text
let index = 0; // track induvidual letter
let currentText = ""; // text currently selected 
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 400);
}());

// JQuery Smooth Scroll
$('.list-item a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800
        );
    }
});


// PROGRESS BARS

const progresshtml = document.querySelector('.progress-done__htmlcss');
const progressJavaScript = document.querySelector('.progress-done__javascript');
const progressBootstrap = document.querySelector('.progress-done__bootstrap');
const progressSass = document.querySelector('.progress-done__sass');

setTimeout(() => {
    progresshtml.style.width = progresshtml.getAttribute('data-done') + "%";
    progresshtml.style.opacity = 1;
}, 500);

setTimeout(() => {
    progressJavaScript.style.width = progressJavaScript.getAttribute('data-done') + "%";
    progressJavaScript.style.opacity = 1;
}, 500);

setTimeout(() => {
    progressBootstrap.style.width = progressBootstrap.getAttribute('data-done') + "%";
    progressBootstrap.style.opacity = 1;
}, 500);

setTimeout(() => {
    progressSass.style.width = progressSass.getAttribute('data-done') + "%";
    progressSass.style.opacity = 1;
}, 500);




const aboutMeSection = document.querySelector("#about-me").getBoundingClientRect().top;
const navBar = document.querySelector(".navbar-view");

window.addEventListener('scroll', () => {

    let windowHeight = window.pageYOffset;

    if (windowHeight > aboutMeSection) {
        navBar.classList.add("navbar-scroll");
    } else {
        navBar.classList.remove("navbar-scroll");
    };
})


// const projectItem = document.querySelector(".project1");
// const hiddenStyleForItem = document.querySelector(".project-hidden__info");

// projectItem.onmouseover = function showHiddenDiv() {
//     hiddenStyleForItem.style.display = "block";
// };



// const projectItem = document.querySelector(".project1");
// const hiddenStyleForItem = document.querySelector(".project-hidden__info");

// projectItem.addEventListener('mouseover', mouseOver);
// projectItem.addEventListener('mouseout', mouseOut);

// function mouseOver() {
//     projectItem.style.display = "block";
// };
// function mouseOut(){
//     projectItem.style.display = "none";
// };



// document.querySelector('project1').onmouseover = function(){
//     document.querySelector('project-hidden__info').style.display = 'block';
// };
// document.querySelector('project1').onmouseout = function(){
//     document.querySelector('project-hidden__info').style.display = 'none';
// };

// if (document.querySelector('project1').onmouseover == true){
//     document.querySelector('project-hidden__info').style.display = 'block';
// } else {
//     document.querySelector('project-hidden__info').style.display = 'none';
// }

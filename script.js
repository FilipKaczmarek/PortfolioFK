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

$(document).on('scroll', function(){
    $('.scroll-effect1').css('left', Math.max(350 - 0.45 * window.scrollY, 0) + 'px');
    $('.scroll-effect2').css('left', Math.max(350 - 0.32 * window.scrollY, 0) + 'px');
    $('.scroll-effect3').css('left', Math.max(350 - 0.17 * window.scrollY, 0) + 'px');
    $('.scroll-effect4').css('left', Math.max(350 - 0.13 * window.scrollY, 0) + 'px');
})
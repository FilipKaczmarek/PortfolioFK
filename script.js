// --- TYPING - MAIN PAGE ---

const texts = ['Filip.', 'a Front-End Developer.', 'a Podcaster.', 'a Recruiter.'];
let count = 0; // each induvidual text
let index = 0; // track induvidual letter
let currentText = ""; // text currently selected 
let letter = ""; 

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 400);
}());


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

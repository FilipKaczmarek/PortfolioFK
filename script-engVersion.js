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
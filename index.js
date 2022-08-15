//index.js

// let number = 5;
// let name = "Asif";
// // Writing to the document
// document.writeln(name);
// alert("Hello world");
const formInfo = document.getElementById("formInfo");

let hasJob  = false;

if (!hasJob) {
    // I need a job
    showMessage("Please look around. I'm currently looking for a position.");
} else {
    //I have a job
    showMessage("Thanks for visiting. I'm currently employed.");
}

let today = new Date();
let dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, Please be patient with my returning your email.");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>"
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    showMessage("sending your message...");
});

function sendMessage() {
    showMessage("Please wait, sending your email");
}

const experiences = document.getElementsByClassName("experience");
for (let i = 0; i < experiences.length; i++) {
    const item = experiences[i];
    item.addEventListener("mouseenter", function (event) {
        event.target.style  = "background-color: #999999";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style  = "";
    });
}
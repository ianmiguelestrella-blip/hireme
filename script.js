


const typingText = document.getElementById("typingText");

const words = [
    "Web Developer",
    "IT Student",
    "Technology Enthusiast",
    "Future IT Professional"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* ================= INTRODUCE ME ================= */

const introduceButton =
    document.getElementById("introduceButton");

const introResult =
    document.getElementById("introResult");

introduceButton.addEventListener(
    "click",
    function () {

        let message =
            "Hi! I'm Ian Miguel Estrella. I'm an IT student who enjoys technology, web development, gaming, and learning new things.";

        introResult.textContent = message;

        introResult.classList.add("show");

        introduceButton.innerHTML =
            '<i class="bi bi-check-circle"></i> Nice to Meet You!';

    }
);


/* ================= PERSONALIZED GREETING ================= */

const greetingButton =
    document.getElementById("greetingButton");

const visitorName =
    document.getElementById("visitorName");

const greetingResult =
    document.getElementById("greetingResult");

greetingButton.addEventListener(
    "click",
    function () {

        const name =
            visitorName.value.trim();

        let message;

        if (name !== "") {

            message =
                `Hello, ${name}! 👋 Welcome to Ian Miguel's personal page. I hope you enjoy exploring it!`;

        } else {

            message =
                "Please enter your name first! 😊";

        }

        greetingResult.textContent = message;

        greetingResult.classList.add("show");

    }
);


/* ================= DARK MODE ================= */

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark-mode");

        const icon =
            themeButton.querySelector("i");

        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            icon.className =
                "bi bi-sun-fill";

        } else {

            icon.className =
                "bi bi-moon-fill";

        }

    }
);


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);

backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formResult =
    document.getElementById("formResult");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (
            fullName !== "" &&
            email !== "" &&
            message !== ""
        ) {

            formResult.textContent =
                `Thank you, ${fullName}! Your message has been received.`;

            formResult.style.color =
                "#22c55e";

            contactForm.reset();

        } else {

            formResult.textContent =
                "Please complete all fields.";

            formResult.style.color =
                "#ef4444";

        }

    }
);


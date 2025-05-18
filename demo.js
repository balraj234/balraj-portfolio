// Sticky Header on Scroll

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

// Toggle Menu
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};


const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "balrajbala580@gmail.com",
    Password: "19ED821E4B1041AA8CA2199A2D11D6676182", 
    To: "balrajbala580@gmail.com",
    From: "balrajbala580@gmail.com",
    Subject: "New Message from Contact Form",
    Body: bodyMessage,
  }).then((response) => {
    if (response === "OK") {
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was a problem. Please try again later.",
        icon: "error",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});




window.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector(".sec-text");
  const words = ["\u00A0\u00A0\u00A0Python Developer", "Mern Stack Developer", "\u00A0\u00A0\u00A0React Developer", "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0AI Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150;

  function typeEffect() {
    const currentWord = words[wordIndex];

    // Typing or Deleting
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    // Show the text up to current charIndex
    text.textContent = currentWord.substring(0, charIndex);

    // Determine pause and switching logic
    if (!isDeleting && charIndex === currentWord.length) {
      // Pause after full word is typed
      isDeleting = true;
      typingSpeed = 80;
      setTimeout(typeEffect, 1000); // wait 1s before deleting
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
});



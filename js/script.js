// ----- Mobile menu: show or hide the links -----
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  });
});

// ----- Contact form: opens the visitor's email app -----
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const subject = encodeURIComponent("Message from " + name);
  const body = encodeURIComponent(message);
  // CHANGE this email to your trust's real email
  window.location.href = "mailto:hello@fruitfultrust.org?subject=" + subject + "&body=" + body;
});

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();

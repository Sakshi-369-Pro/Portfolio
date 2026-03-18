const words = ["Data Analyst_", "AI Engineer_", "Programmer_", "Web Developer_"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = words[i];
  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!isDeleting && j++ === current.length) {
    isDeleting = true;
  } 
  else if (isDeleting && j-- === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}


document.addEventListener("DOMContentLoaded", type);


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});


const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
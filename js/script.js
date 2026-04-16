document.addEventListener("DOMContentLoaded", () => {

  /* TYPING EFFECT */
  const words = ["Data Analyst_", "AI Engineer_", "Programmer_", "Web Developer_"];
  let i = 0, j = 0, isDeleting = false;

  function type() {
    let current = words[i];
    document.querySelector(".typing").textContent = current.substring(0, j);

    if (!isDeleting && j++ === current.length) {
      isDeleting = true;
    } else if (isDeleting && j-- === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
  }

  type();

  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  });

  /* PROJECTS INFINITE LOOP — seamless circular scroll */
  const wrapper = document.querySelector(".projects-wrapper");
  const container = document.querySelector(".projects-container");

  if (container && wrapper) {

    // Original cards clone karo — true infinite loop ke liye
    const cards = Array.from(container.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });

    let scrollPos = 0;
    const speed = 0.6;       // px per frame — speed adjust karo yahan
    let isPaused = false;

    wrapper.addEventListener("mouseenter", () => isPaused = true);
    wrapper.addEventListener("mouseleave", () => isPaused = false);

    function animateLoop() {
      if (!isPaused) {
        scrollPos += speed;

        // Half tak pahunche to seamlessly wapas 0 pe
        const halfWidth = container.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }

        container.style.transform = `translateX(-${scrollPos}px)`;
      }
      requestAnimationFrame(animateLoop);
    }

    animateLoop();
  }

});
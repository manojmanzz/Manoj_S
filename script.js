// 1. Typewriter Text Effect
const words = ["Full-Stack Developer", "UI/UX Enthusiast", "Creative Coder", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1800; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

// 2. Scroll Reveal & Skill Bar Animation
const revealElements = document.querySelectorAll(".reveal");
const progressBars = document.querySelectorAll(".progress");

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        // Animate skill bars when skills section is visible
        if (entry.target.id === "skills") {
          progressBars.forEach((bar) => {
            bar.style.width = bar.getAttribute("data-width");
          });
        }
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((el) => scrollObserver.observe(el));

// Initialize typewriter on load
document.addEventListener("DOMContentLoaded", typeEffect);

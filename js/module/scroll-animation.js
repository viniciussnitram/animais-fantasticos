export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  const halfWindow = window.innerHeight * 0.6;

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow < 0;
      if (isSectionVisible) section.classList.add("active");
      else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  }

  if (sections.length) {
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}

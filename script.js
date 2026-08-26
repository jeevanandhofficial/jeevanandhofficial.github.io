// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hero signal trace: draw-in animation on load (skipped if reduced motion is preferred)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tracePath = document.getElementById('tracePath');

if (tracePath && !prefersReducedMotion) {
  const length = tracePath.getTotalLength();
  tracePath.style.strokeDasharray = String(length);
  tracePath.style.strokeDashoffset = String(length);
  tracePath.getBoundingClientRect(); // force reflow
  tracePath.style.transition = 'stroke-dashoffset 1.4s ease-out';
  requestAnimationFrame(() => {
    tracePath.style.strokeDashoffset = '0';
  });
}

// Fade-in sections as they enter the viewport
const revealTargets = document.querySelectorAll('section');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  revealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
// ================= SUBTLE SCROLL REVEAL =================
const sections = document.querySelectorAll("section");

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(60px)";
  sec.style.transition = "all 1s ease";
});

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// ================= GSAP + SCROLLTRIGGER =================
gsap.registerPlugin(ScrollTrigger);

/* AI INTRO + HERO CINEMATIC */
window.addEventListener("load", () => {
  gsap.to(".ai-loader", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    onComplete: () => document.querySelector(".ai-loader").remove()
  });

  gsap.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".hero p", {
    y: 60,
    opacity: 0,
    delay: 0.3
  });
});

/* PARALLAX HERO */
gsap.to(".hero", {
  yPercent: -10,
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});

/* SECTION SCROLL REVEAL */
gsap.utils.toArray("section").forEach(sec => {
  gsap.from(sec, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: sec,
      start: "top 80%"
    }
  });
});

// ================= CUSTOM CURSOR =================
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2
  });
});

// ================= MAGNETIC BUTTON =================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    gsap.to(btn, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.2,
      y: (e.clientY - rect.top - rect.height / 2) * 0.2
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { x: 0, y: 0 });
  });
});

// ================= SWIPE CARDS (MOBILE) =================
let startX = 0;
const cards = document.querySelector(".cards");

if (cards) {
  cards.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  cards.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    cards.scrollLeft += startX - endX;
  });
}

// ================= DARK / LIGHT TOGGLE =================
document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// ================= LENIS SMOOTH SCROLL =================
const lenis = new Lenis({
  duration: 1.2,
  easing: t => t, // linear
  smooth: true,
  direction: "vertical",
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

// ================= OPTIONAL 3D ORB PLACEHOLDER =================
// Will integrate THREE.js orb here later
const orbContainer = document.createElement('canvas');
orbContainer.id = 'orb-canvas';
document.querySelector('.hero').appendChild(orbContainer);

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
});
gsap.to(".hero-content", {
  yPercent: -15,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to("#orb-canvas", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scale: 0.9,
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});
gsap.to(".hero", {
  backgroundPosition: "200% 50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

const Lenis = new Lenis({
  duration: 1.5,
  easing: (t) => t,
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Target the Book Appointment link using its href
const appointmentLink = document.querySelector('a[href="appointment.html"]');

appointmentLink.addEventListener('click', (e) => {
  // Optional: prevent default if you want to do something before redirect
  // e.preventDefault();

  // Redirect manually
  window.location.href = 'appointment.html';
});

const bookBtn = document.querySelector(".btn");

bookBtn.addEventListener("click", function (e) {
  e.preventDefault(); // stops default link behavior
  window.location.href = "appointment.html"; // redirect
});



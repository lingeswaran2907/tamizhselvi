document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Year Update
  document.getElementById("year").textContent = new Date().getFullYear();

  // 2. Interactive Spotlight Follower
  const spotlight = document.getElementById("spotlight");
  window.addEventListener("mousemove", (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });

  // 3. Dynamic Typing Effect (Highlighting B.Com + Marketing + Dev)
  const phrases = [
    "Full-Stack Web Development",
    "B.Com Business Strategy",
    "Google & Meta Paid Acquisition",
    "High-Conversion UI / CRO",
    "SEO Dominance & GA4 Tracking"
  ];
  const typingElement = document.getElementById("typingText");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 1800; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 300;
    }

    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();

  // 4. Super-Level Magnetic Button Physics
  const magneticButtons = document.querySelectorAll(".btn-magnetic");
  magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px)";
    });
  });

  // 5. Interactive Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category.includes(filterValue)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 6. Smooth KPI Metric Counter
  const counters = document.querySelectorAll(".counter");
  let counted = false;

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const step = target / 40;

            const updateCount = () => {
              count += step;
              if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 30);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
          });
          counted = true;
        }
      });
    },
    { threshold: 0.5 }
  );

  const heroMetrics = document.querySelector(".hero-metrics");
  if (heroMetrics) countObserver.observe(heroMetrics);
});
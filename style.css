document.addEventListener("DOMContentLoaded", () => {
  // 1. Current Year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // 2. Interactive Background Particle Canvas
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.6 + 0.8;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 242, 254, 0.25)";
      ctx.fill();
    }
  }

  for (let i = 0; i < 45; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.12 - dist / 1100})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // 3. Spotlight Mouse Follower
  const spotlight = document.getElementById("spotlight");
  window.addEventListener("mousemove", (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });

  // 4. Tab / Page Navigation Engine (100vh Zero-Scroll)
  window.navigateTo = function (pageName) {
    const dockBtns = document.querySelectorAll(".dock-btn");
    dockBtns.forEach((btn) => {
      if (btn.getAttribute("data-page") === pageName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const views = document.querySelectorAll(".stage-view");
    views.forEach((view) => {
      if (view.id === `view-${pageName}`) {
        view.classList.add("active");
      } else {
        view.classList.remove("active");
      }
    });
  };

  const dockBtns = document.querySelectorAll(".dock-btn");
  dockBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = btn.getAttribute("data-page");
      navigateTo(page);
    });
  });

  // 5. Magnetic Physics on Buttons
  const magneticButtons = document.querySelectorAll(".btn-magnetic");
  magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px)";
    });
  });

  // 6. Typing Ticker Animation
  const focusPhrases = [
    "Google Search & Performance Max PPC",
    "Meta Ads Acquisition & Retargeting",
    "B.Com Financial & Margin Modeling",
    "Organic SEO Keyword Authority",
    "Conversion Rate Optimization (CRO)"
  ];
  const tickerEl = document.getElementById("tickerText");
  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function runTicker() {
    const phrase = focusPhrases[phraseIdx];
    if (isDeleting) {
      tickerEl.textContent = phrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      tickerEl.textContent = phrase.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 30 : 65;
    if (!isDeleting && charIdx === phrase.length) {
      speed = 1700;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % focusPhrases.length;
      speed = 200;
    }
    setTimeout(runTicker, speed);
  }
  runTicker();

  // 7. Interactive Live ROAS Simulator Engine
  const adBudgetInput = document.getElementById("adBudget");
  const targetRoasInput = document.getElementById("targetRoas");
  const profitMarginInput = document.getElementById("profitMargin");

  const budgetDisplay = document.getElementById("budgetDisplay");
  const roasDisplay = document.getElementById("roasDisplay");
  const marginDisplay = document.getElementById("marginDisplay");

  const grossRevenueEl = document.getElementById("grossRevenue");
  const netProfitEl = document.getElementById("netProfit");
  const poasMetricEl = document.getElementById("poasMetric");

  function calculateSimulator() {
    const budget = parseFloat(adBudgetInput.value);
    const roas = parseFloat(targetRoasInput.value);
    const margin = parseFloat(profitMarginInput.value) / 100;

    budgetDisplay.textContent = `$${budget.toLocaleString()}`;
    roasDisplay.textContent = `${roas.toFixed(1)}x`;
    marginDisplay.textContent = `${(margin * 100).toFixed(0)}%`;

    const grossRevenue = budget * roas;
    const grossProfit = grossRevenue * margin;
    const netProfit = grossProfit - budget;
    const poas = budget > 0 ? (grossProfit / budget) : 0;

    grossRevenueEl.textContent = `$${Math.round(grossRevenue).toLocaleString()}`;
    netProfitEl.textContent = `${netProfit >= 0 ? "$" : "-$"}${Math.abs(Math.round(netProfit)).toLocaleString()}`;
    poasMetricEl.textContent = `${poas.toFixed(2)}x`;
  }

  [adBudgetInput, targetRoasInput, profitMarginInput].forEach((input) => {
    input.addEventListener("input", calculateSimulator);
  });
  calculateSimulator();

  // 8. Number Counters
  const counters = document.querySelectorAll(".counter");
  counters.forEach((c) => {
    const target = +c.getAttribute("data-target");
    let current = 0;
    const step = target / 35;
    const update = () => {
      current += step;
      if (current < target) {
        c.textContent = current.toFixed(target % 1 !== 0 ? 1 : 0);
        setTimeout(update, 30);
      } else {
        c.textContent = target;
      }
    };
    update();
  });
});

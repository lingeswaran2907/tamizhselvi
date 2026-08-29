// 1. Global Navigation Function
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

document.addEventListener("DOMContentLoaded", () => {
  // 2. Set Current Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Interactive Background Particle Canvas
  const canvas = document.getElementById("particleCanvas");
  if (canvas) {
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
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.8;
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
        ctx.fillStyle = "rgba(0, 242, 254, 0.22)";
        ctx.fill();
      }
    }

    for (let i = 0; i < 40; i++) {
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
  }

  // 4. Mouse Spotlight Follower
  const spotlight = document.getElementById("spotlight");
  if (spotlight) {
    window.addEventListener("mousemove", (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  // 5. Dock Navigation Click Listeners
  const dockBtns = document.querySelectorAll(".dock-btn");
  dockBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = btn.getAttribute("data-page");
      window.navigateTo(page);
    });
  });

  // 6. Magnetic Button Physics
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

  // 7. Dynamic Typing Ticker
  const focusPhrases = [
    "Google Search & Performance Max PPC",
    "Meta Ads Scaled Acquisition & Retargeting",
    "B.Com Financial & Margin Modeling",
    "Organic SEO Keyword Authority & Rankings",
    "Conversion Rate Optimization (CRO)"
  ];
  const tickerEl = document.getElementById("tickerText");
  if (tickerEl) {
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
        speed = 1600;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % focusPhrases.length;
        speed = 200;
      }
      setTimeout(runTicker, speed);
    }
    runTicker();
  }

  // 8. Live Interactive ROAS & Profit Simulator
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
    if (!adBudgetInput || !targetRoasInput || !profitMarginInput) return;
    const budget = parseFloat(adBudgetInput.value);
    const roas = parseFloat(targetRoasInput.value);
    const margin = parseFloat(profitMarginInput.value) / 100;

    if (budgetDisplay) budgetDisplay.textContent = `$${budget.toLocaleString()}`;
    if (roasDisplay) roasDisplay.textContent = `${roas.toFixed(1)}x`;
    if (marginDisplay) marginDisplay.textContent = `${(margin * 100).toFixed(0)}%`;

    const grossRevenue = budget * roas;
    const grossProfit = grossRevenue * margin;
    const netProfit = grossProfit - budget;
    const poas = budget > 0 ? (grossProfit / budget) : 0;

    if (grossRevenueEl) grossRevenueEl.textContent = `$${Math.round(grossRevenue).toLocaleString()}`;
    if (netProfitEl) netProfitEl.textContent = `${netProfit >= 0 ? "$" : "-$"}${Math.abs(Math.round(netProfit)).toLocaleString()}`;
    if (poasMetricEl) poasMetricEl.textContent = `${poas.toFixed(2)}x`;
  }

  [adBudgetInput, targetRoasInput, profitMarginInput].forEach((input) => {
    if (input) input.addEventListener("input", calculateSimulator);
  });
  calculateSimulator();

  // 9. Numeric Counters
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

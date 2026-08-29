/**
 * ==============================================================================
 * GLOBAL NAVIGATION ENGINE (Instant & Safe)
 * ==============================================================================
 */
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

/**
 * Interactive Modal Controller
 */
window.openCaseModal = function (type) {
  const modal = document.getElementById("caseModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;

  const data = {
    ecommerce: {
      title: "D2C Apparel Brand Scaling Playbook",
      badge: "META ADS + KLAVIYO + CRO",
      metric: "4.2x ROAS on $18,000 Ad Spend",
      desc: "Re-engineered full-funnel paid social ads using dynamic catalog ads (DPA), high-converting offer angles, and a 6-part automated Klaviyo retention sequence to boost lifetime customer value (LTV)."
    },
    ppc: {
      title: "B2B Lead Acquisition Google PPC Sprint",
      badge: "GOOGLE SEARCH + CRO FUNNEL",
      metric: "-44% Cost-Per-Lead Reduction",
      desc: "Implemented strict negative keyword filtering, restructured ad groups by search intent, and built dedicated single-page landing funnels to achieve record conversion rates."
    },
    seo: {
      title: "Search Authority & Organic Ranking Acceleration",
      badge: "TECHNICAL SEO + CLUSTERING",
      metric: "+280% Commercial Organic Traffic",
      desc: "Conducted exhaustive competitor keyword gap analysis, resolved crawl budget bottlenecks, and structured semantic metadata to capture dominant page #1 Google rankings."
    }
  };

  const item = data[type] || data.ecommerce;
  modalBody.innerHTML = `
    <span class="sub-badge" style="margin-bottom:8px; display:inline-block;">${item.badge}</span>
    <h2 style="font-family: var(--font-display); font-size:1.4rem; margin-bottom:10px;">${item.title}</h2>
    <div style="background:rgba(16,185,129,0.1); border-left:3px solid var(--neon-emerald); color:#6ee7b7; padding:8px 12px; border-radius:0 6px 6px 0; font-weight:600; margin-bottom:14px;">
      ${item.metric}
    </div>
    <p style="color:var(--text-muted); font-size:0.88rem; line-height:1.6; margin-bottom:18px;">${item.desc}</p>
    <button class="btn btn-hologram btn-submit" onclick="window.closeCaseModal(); window.navigateTo('contact');">
      <span class="beam"></span>
      <span class="btn-content"><span>Discuss Similar Results For Your Brand</span> <i class="fa-solid fa-arrow-right"></i></span>
    </button>
  `;
  modal.classList.add("active");
};

window.closeCaseModal = function () {
  const modal = document.getElementById("caseModal");
  if (modal) modal.classList.remove("active");
};

window.handleFormSubmit = function () {
  alert("Inquiry Transmitted Successfully! Alex Carter will review your project metrics and connect within 24 hours.");
  const form = document.getElementById("contactForm");
  if (form) form.reset();
};

/**
 * ==============================================================================
 * DOM INITIALIZATION & INTERACTIVE ENGINES
 * ==============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {

  // 1. Dynamic Year & Live UTC Telemetry Clock
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const liveClockEl = document.getElementById("liveClock");
  function updateClock() {
    if (liveClockEl) {
      const now = new Date();
      liveClockEl.textContent = now.toUTCString().split(" ")[4] + " UTC";
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 2. Interactive Background Particle Mesh Canvas
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

    for (let i = 0; i < 42; i++) {
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

  // 3. Spotlight Cursor Engine
  const spotlight = document.getElementById("spotlight");
  if (spotlight) {
    window.addEventListener("mousemove", (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  // 4. Dock Navigation Click Handlers
  const dockBtns = document.querySelectorAll(".dock-btn");
  dockBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = btn.getAttribute("data-page");
      window.navigateTo(page);
    });
  });

  // 5. Magnetic Button Spring Physics
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

  // 6. Dynamic Typing Ticker Engine
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

  // 7. Live Interactive ROAS & Profit Simulator
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

  // 8. Smooth Numeric Counters
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

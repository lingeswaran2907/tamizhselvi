/* ==========================================================================
   LUXURY CYBER-COMMERCE THEME & 100vh VIEWPORT RESET (ZERO SCROLL)
   ========================================================================== */
:root {
  --bg-space: #05070c;
  --bg-glass: rgba(13, 18, 30, 0.78);
  --bg-glass-card: rgba(18, 25, 42, 0.7);
  --bg-glass-hover: rgba(26, 36, 60, 0.85);

  --neon-cyan: #00f2fe;
  --neon-purple: #7928ca;
  --neon-emerald: #10b981;
  --neon-gold: #f59e0b;
  --neon-blue: #3b82f6;

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-glow: rgba(0, 242, 254, 0.35);

  --text-pure: #ffffff;
  --text-muted: #94a3b8;
  --text-dim: #64748b;

  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --ease-elastic: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

html, body {
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* STRICT ZERO SCROLL */
  background-color: var(--bg-space);
  color: var(--text-pure);
  font-family: var(--font-sans);
}

/* Background Particle Canvas */
#particleCanvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.spotlight-cursor {
  position: fixed;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 999;
  transition: transform 0.04s linear;
}

/* Master Cockpit Layout */
.cockpit-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 28px;
  z-index: 1;
}

/* ==========================================================================
   HEADER, FLOATING GLASS DOCK & TOP-RIGHT PROFILE PICTURE
   ========================================================================== */
.cockpit-header {
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.brand-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.brand-symbol {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  color: #fff;
  box-shadow: 0 0 18px rgba(0, 242, 254, 0.4);
}
.brand-info h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}
.brand-info p {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
.dot-live {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--neon-emerald);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--neon-emerald);
  margin-right: 4px;
}

/* Dock Navigation */
.dock-nav {
  display: flex;
  gap: 6px;
  background: var(--bg-glass);
  backdrop-filter: blur(25px);
  border: 1px solid var(--border-subtle);
  padding: 4px 6px;
  border-radius: 100px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.dock-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: inherit;
  font-weight: 600;
  font-size: 0.82rem;
  padding: 7px 15px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  transition: all 0.3s var(--ease-fluid);
}
.dock-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}
.dock-btn.active {
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(121, 40, 202, 0.3));
  border: 1px solid var(--border-glow);
  color: #fff;
  box-shadow: 0 0 16px rgba(0, 242, 254, 0.25);
}

/* Top-Right Header Elements */
.header-right-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Glowing Profile Picture Component */
.profile-avatar-wrap {
  position: relative;
  width: 42px;
  height: 42px;
  cursor: pointer;
  transition: transform 0.3s var(--ease-elastic);
}
.profile-avatar-wrap:hover {
  transform: scale(1.08) translateY(-2px);
}
.avatar-glow-ring {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, var(--neon-cyan), var(--neon-purple), var(--neon-cyan));
  animation: ringRotate 4s linear infinite;
  z-index: 1;
  box-shadow: 0 0 14px rgba(0, 242, 254, 0.4);
}
.profile-avatar-img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #05070c;
  z-index: 2;
  display: block;
  background-color: #12192b;
}
.avatar-online-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 11px;
  height: 11px;
  background: var(--neon-emerald);
  border: 2px solid #05070c;
  border-radius: 50%;
  z-index: 3;
  box-shadow: 0 0 8px var(--neon-emerald);
  animation: dotPulse 1.8s infinite;
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.6; }
}

/* ==========================================================================
   SUPER-TIER BUTTON INTERACTIONS (HOLOGRAM & BEAM)
   ========================================================================== */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.86rem;
  border-radius: 11px;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: transform 0.3s var(--ease-elastic), box-shadow 0.3s ease;
}

/* Holographic Beam Rotating Button */
.btn-hologram {
  background: #090d16;
  color: #fff;
  padding: 2px;
  overflow: hidden;
  box-shadow: 0 0 18px rgba(0, 242, 254, 0.2);
}
.btn-hologram .beam {
  position: absolute;
  inset: -150%;
  background: conic-gradient(from 0deg, transparent 0%, var(--neon-cyan) 25%, var(--neon-purple) 50%, transparent 75%);
  animation: beamSpin 3s linear infinite;
  z-index: 0;
}
.btn-hologram .btn-content {
  position: relative;
  background: #0c1220;
  padding: 9px 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  gap: 7px;
  z-index: 1;
  width: 100%;
  height: 100%;
  transition: background 0.3s;
}
.btn-hologram:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 242, 254, 0.4), 0 0 15px rgba(121, 40, 202, 0.4);
}
.btn-hologram:hover .btn-content {
  background: #121b30;
}

/* Glass Cyber Button */
.btn-glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  color: #fff;
  padding: 9px 18px;
  backdrop-filter: blur(12px);
}
.btn-glass:hover {
  border-color: var(--neon-cyan);
  box-shadow: 0 0 18px rgba(0, 242, 254, 0.3);
  transform: translateY(-2px);
}

/* Outline Button */
.btn-outline {
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 9px 18px;
}
.btn-outline:hover {
  color: #fff;
  border-color: var(--text-pure);
  transform: translateY(-2px);
}

.btn-submit { width: 100%; }

@keyframes beamSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ==========================================================================
   STAGE VIEWS (ZERO-SCROLL PAGE PANES)
   ========================================================================== */
.cockpit-stage {
  position: relative;
  flex: 1;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stage-view {
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;
  transform: scale(0.97) translateY(12px);
  transition: opacity 0.4s var(--ease-fluid), transform 0.4s var(--ease-fluid);
}
.stage-view.active {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transform: scale(1) translateY(0);
}

.view-grid {
  width: 100%;
  max-width: 1200px;
  max-height: 100%;
}

.section-titlebar {
  text-align: center;
  margin-bottom: 16px;
}
.sub-badge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--neon-cyan);
  background: rgba(0, 242, 254, 0.1);
  border: 1px solid rgba(0, 242, 254, 0.25);
  padding: 3px 10px;
  border-radius: 100px;
  letter-spacing: 1.5px;
}
.section-titlebar h2 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin: 5px 0;
}
.section-titlebar p {
  color: var(--text-muted);
  font-size: 0.84rem;
}

/* ==========================================================================
   PAGE 1: OVERVIEW HERO
   ========================================================================== */
.hero-layout {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 26px;
  align-items: center;
}

.cyber-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 100px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-size: 0.74rem;
  font-family: var(--font-mono);
  color: #6ee7b7;
  margin-bottom: 10px;
}

.hero-heading {
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.4vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 10px;
}
.gradient-text {
  background: linear-gradient(135deg, var(--neon-cyan), #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-description {
  font-size: 0.96rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 14px;
}

.terminal-ticker {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border-subtle);
  padding: 7px 13px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 18px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
}
.ticker-label { color: var(--neon-cyan); }
.ticker-text { color: var(--neon-gold); font-weight: 600; }
.cursor-pipe { animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.hero-actions { display: flex; gap: 10px; }

.hero-secondary { display: flex; flex-direction: column; gap: 10px; }
.metric-glass-card {
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 14px 18px;
  backdrop-filter: blur(15px);
  transition: all 0.3s;
}
.metric-glass-card:hover {
  border-color: var(--border-glow);
  transform: translateX(5px);
}
.metric-row { display: flex; align-items: center; gap: 12px; }
.metric-icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 1.15rem;
  background: rgba(255, 255, 255, 0.04);
}
.metric-glass-card h2 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  display: inline;
}
.metric-sym { font-size: 1.25rem; color: var(--neon-cyan); font-weight: 700; }
.metric-glass-card p { font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; }

/* Tactical Color Helpers */
.icon-emerald { color: var(--neon-emerald); }
.icon-cyan { color: var(--neon-cyan); }
.icon-gold { color: var(--neon-gold); }
.icon-blue { color: var(--neon-blue); }
.icon-purple { color: var(--neon-purple); }
.icon-pink { color: #ec4899; }
.icon-orange { color: #f97316; }

/* ==========================================================================
   PAGE 2: SKILLS MATRIX (3-COL CARDS)
   ========================================================================== */
.cards-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.tactical-card {
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 16px;
  backdrop-filter: blur(15px);
  transition: all 0.3s;
}
.tactical-card:hover {
  border-color: var(--neon-cyan);
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(0, 242, 254, 0.15);
}
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.brand-icon { font-size: 1.5rem; }
.level-pill {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  padding: 2px 7px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  color: var(--neon-cyan);
}
.tactical-card h3 { font-size: 0.96rem; margin-bottom: 3px; }
.tactical-card p { font-size: 0.78rem; color: var(--text-muted); margin-bottom: 8px; line-height: 1.45; }
.tag-row { display: flex; gap: 5px; flex-wrap: wrap; }
.tag-row span {
  font-size: 0.66rem;
  background: rgba(255, 255, 255, 0.04);
  padding: 2px 6px;
  border-radius: 4px;
  color: #cbd5e1;
}

/* ==========================================================================
   PAGE 3: B.COM COMMERCE & FINANCIALS
   ========================================================================== */
.commerce-layout-split {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 16px;
}
.degree-hero-panel {
  position: relative;
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 20px;
  overflow: hidden;
}
.degree-hero-panel .degree-badge-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  margin-bottom: 10px;
}
.degree-hero-panel h2 { font-size: 1.3rem; margin: 3px 0; }
.degree-highlight { color: var(--neon-cyan); font-weight: 600; font-size: 0.8rem; margin-bottom: 8px; }
.degree-text { font-size: 0.84rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px; }
.commerce-checks { display: flex; flex-direction: column; gap: 6px; }
.commerce-checks div { font-size: 0.8rem; display: flex; align-items: center; gap: 8px; color: #e2e8f0; }
.commerce-checks i { color: var(--neon-emerald); }

.analytics-power-grid { display: flex; flex-direction: column; gap: 8px; }
.power-card {
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s;
}
.power-card:hover { transform: translateX(5px); border-color: var(--neon-cyan); }
.power-card i { font-size: 1.4rem; }
.power-card h4 { font-size: 0.86rem; }
.power-card p { font-size: 0.74rem; color: var(--text-muted); }

/* ==========================================================================
   PAGE 4: INTERACTIVE LIVE ROI SIMULATOR
   ========================================================================== */
.calculator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 22px;
}
.calc-inputs { display: flex; flex-direction: column; gap: 16px; }
.calc-group { display: flex; flex-direction: column; gap: 5px; }
.calc-labels { display: flex; justify-content: space-between; font-size: 0.82rem; }
.calc-val { color: var(--neon-cyan); font-family: var(--font-mono); font-weight: 700; }

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: var(--neon-cyan);
  cursor: pointer;
  box-shadow: 0 0 10px var(--neon-cyan);
}

.calc-results {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}
.result-box {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 10px 14px;
}
.result-box span { font-size: 0.68rem; color: var(--text-dim); letter-spacing: 1px; font-family: var(--font-mono); }
.result-box h3 { font-family: var(--font-display); font-size: 1.45rem; color: #fff; margin-top: 2px; }
.highlight-box {
  border-color: var(--neon-emerald);
  background: rgba(16, 185, 129, 0.08);
}
.highlight-box h3 { color: var(--neon-emerald); }

/* ==========================================================================
   PAGE 5: CASE STUDIES & MODAL
   ========================================================================== */
.case-card {
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s;
}
.case-card:hover {
  transform: translateY(-3px);
  border-color: var(--neon-cyan);
  background: var(--bg-glass-hover);
}
.case-badge {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  color: var(--neon-cyan);
  background: rgba(0, 242, 254, 0.1);
  padding: 2px 6px;
  border-radius: 5px;
  width: fit-content;
  margin-bottom: 6px;
}
.case-card h3 { font-size: 1rem; margin-bottom: 3px; }
.case-card p { font-size: 0.78rem; color: var(--text-muted); margin-bottom: 10px; flex-grow: 1; line-height: 1.45; }
.kpi-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--neon-emerald);
  padding: 6px 8px;
  border-radius: 0 6px 6px 0;
  margin-bottom: 8px;
}
.kpi-banner i { font-size: 1.2rem; color: var(--neon-emerald); }
.kpi-banner strong { font-size: 0.88rem; display: block; }
.kpi-banner small { font-size: 0.68rem; color: var(--text-dim); }

/* Modal Styling */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 99999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-backdrop.active { display: flex; }
.modal-card {
  background: #0d1322;
  border: 1px solid var(--border-glow);
  border-radius: 18px;
  width: 100%;
  max-width: 600px;
  padding: 28px;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
}
.modal-close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-subtle);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
}

/* ==========================================================================
   PAGE 6: CONTACT TERMINAL
   ========================================================================== */
.contact-layout-split {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 22px;
}
.contact-card-info h2 { font-size: 1.55rem; margin: 4px 0; }
.contact-card-info p { color: var(--text-muted); font-size: 0.84rem; margin-bottom: 14px; line-height: 1.5; }
.contact-links { display: flex; flex-direction: column; gap: 7px; }
.link-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  padding: 8px 12px;
  border-radius: 9px;
}
.link-item i { font-size: 1.15rem; }
.link-item small { font-size: 0.66rem; color: var(--text-dim); display: block; }
.link-item strong { font-size: 0.8rem; }

.terminal-form { display: flex; flex-direction: column; gap: 8px; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.field-box { display: flex; flex-direction: column; gap: 2px; }
.field-box label { font-size: 0.72rem; color: var(--text-muted); }
.field-box input, .field-box select, .field-box textarea {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--border-subtle);
  padding: 8px 11px;
  border-radius: 7px;
  color: #fff;
  font-family: inherit;
  font-size: 0.8rem;
  outline: none;
  transition: 0.3s;
}
.field-box input:focus, .field-box select:focus, .field-box textarea:focus {
  border-color: var(--neon-cyan);
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.3);
}

/* ==========================================================================
   TELEMETRY FOOTER
   ========================================================================== */
.cockpit-footer {
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-subtle);
  border-radius: 9px;
  padding: 0 14px;
  font-size: 0.7rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}
.radar-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--neon-emerald);
  box-shadow: 0 0 8px var(--neon-emerald);
  display: inline-block;
  margin-right: 6px;
}

/* Responsive Mobile Fallback */
@media (max-width: 950px) {
  html, body { overflow-y: auto; height: auto; }
  .cockpit-container { height: auto; padding: 12px; }
  .dock-nav { display: none; }
  .hero-layout, .commerce-layout-split, .contact-layout-split, .calculator-container { grid-template-columns: 1fr; }
  .cards-grid-3 { grid-template-columns: 1fr; }
  .cockpit-stage { min-height: 80vh; }
  .stage-view { position: relative; }
}

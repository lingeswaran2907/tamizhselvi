/* ==========================================================================
   THEME VARIABLES & FIXED 100vh VIEWPORT RESET (NO PAGE SCROLL)
   ========================================================================== */
:root {
  --bg-main: #07090e;
  --bg-card: rgba(16, 22, 36, 0.75);
  --bg-card-hover: rgba(24, 32, 54, 0.9);
  
  --primary: #6366f1;
  --secondary: #06b6d4;
  --accent: #10b981;
  --gold: #f59e0b;

  --border: rgba(255, 255, 255, 0.08);
  --border-active: rgba(99, 102, 241, 0.5);

  --text: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;

  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
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
  overflow: hidden; /* ZERO SCROLLING ON ENTIRE APP */
  background-color: var(--bg-main);
  color: var(--text);
  font-family: var(--font-sans);
}

/* Background Ambient Lighting */
.glow-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.35;
}
.orb-primary { width: 500px; height: 500px; background: var(--primary); top: -100px; left: -100px; }
.orb-secondary { width: 450px; height: 450px; background: var(--secondary); bottom: -100px; right: -100px; }

/* Interactive Cursor Glow */
.cursor-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.05s linear;
}

/* App Wrapper Container */
.app-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 28px;
  z-index: 1;
}

/* ==========================================================================
   TOP NAVIGATION
   ========================================================================== */
.navbar {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(14, 19, 31, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  padding: 0 24px;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-icon {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  color: #fff;
}
.brand-text span {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.brand-text .highlight { color: var(--secondary); }
.brand-text small {
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted);
}

.nav-tabs {
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  padding: 5px;
  border-radius: 14px;
  border: 1px solid var(--border);
}
.nav-tab {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: inherit;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 8px 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.nav-tab:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}
.nav-tab.active {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
}

.nav-cta { display: block; }

/* ==========================================================================
   SUPER-TIER BUTTON TRANSITIONS
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  position: relative;
  text-decoration: none;
  transition: transform 0.3s var(--ease-elastic), box-shadow 0.3s ease;
}

/* 1. Conic Light Beam Rotating Button */
.btn-beam {
  background: #0d121f;
  color: #fff;
  position: relative;
  z-index: 1;
  padding: 2px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
}
.btn-beam::before {
  content: "";
  position: absolute;
  inset: -100%;
  background: conic-gradient(from 0deg, transparent 0%, var(--primary) 25%, var(--secondary) 50%, transparent 75%);
  animation: beamRotate 3.5s linear infinite;
  z-index: -1;
}
.btn-beam .btn-inner {
  background: #111728;
  padding: 10px 22px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s;
}
.btn-beam:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5), 0 0 15px rgba(6, 182, 212, 0.4);
}
.btn-beam:hover .btn-inner {
  background: #172038;
}

/* 2. Cyber Glassmorphic Button */
.btn-cyber {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: #fff;
  padding: 10px 20px;
  backdrop-filter: blur(10px);
}
.btn-cyber:hover {
  border-color: var(--secondary);
  box-shadow: 0 0 18px rgba(6, 182, 212, 0.4);
  transform: translateY(-3px);
}

/* 3. Liquid Shift Outline Button */
.btn-liquid {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 10px 20px;
}
.btn-liquid:hover {
  color: #fff;
  border-color: #fff;
  transform: translateY(-3px);
  box-shadow: inset 0 0 12px rgba(255,255,255,0.1);
}

.btn-full { width: 100%; }

@keyframes beamRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ==========================================================================
   APP STAGE & TRANSITION ENGINE (PAGE PANES)
   ========================================================================== */
.stage-container {
  position: relative;
  flex: 1;
  margin: 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-pane {
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;
  transform: scale(0.96) translateY(15px);
  transition: opacity 0.4s var(--ease-smooth), transform 0.4s var(--ease-smooth);
}
.page-pane.active {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transform: scale(1) translateY(0);
}

.pane-content {
  width: 100%;
  max-width: 1200px;
  max-height: 100%;
}

.pane-header {
  text-align: center;
  margin-bottom: 24px;
}
.badge-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--secondary);
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  padding: 3px 10px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
.pane-header h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 6px 0;
}
.pane-header p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* ==========================================================================
   PAGE 1: OVERVIEW HERO
   ========================================================================== */
.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 30px;
  align-items: center;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 100px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-size: 0.8rem;
  color: #6ee7b7;
  margin-bottom: 16px;
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 3.8vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 14px;
  letter-spacing: -1px;
}
.gradient-text {
  background: linear-gradient(135deg, #c7d2fe, var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient-text-alt {
  background: linear-gradient(135deg, var(--secondary), #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 20px;
}

.typing-banner {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--border);
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 24px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}
.typing-banner .prompt { color: var(--secondary); }
.typing-text { color: #facc15; font-weight: 600; }

.hero-actions {
  display: flex;
  gap: 12px;
}

.hero-stats-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.stat-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px 24px;
  backdrop-filter: blur(14px);
  transition: transform 0.3s;
}
.stat-box:hover {
  transform: translateX(6px);
  border-color: var(--primary);
}
.stat-icon { font-size: 1.5rem; margin-bottom: 6px; }
.stat-num {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 700;
  display: inline;
}
.plus { font-size: 1.5rem; color: var(--secondary); font-weight: 700; }
.stat-box p { font-size: 0.82rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; }

/* Color classes */
.icon-green { color: #10b981; }
.icon-cyan { color: #06b6d4; }
.icon-gold { color: #f59e0b; }
.icon-blue { color: #3b82f6; }
.icon-purple { color: #a855f7; }
.icon-pink { color: #ec4899; }
.icon-orange { color: #f97316; }
.icon-teal { color: #14b8a6; }

/* ==========================================================================
   PAGE 2: MARKETING SKILLS GRID
   ========================================================================== */
.skills-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.skill-tile {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  transition: transform 0.3s, border-color 0.3s;
}
.skill-tile:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}
.skill-main-icon {
  font-size: 1.8rem;
  margin-bottom: 10px;
}
.skill-tile h4 { font-size: 1.05rem; margin-bottom: 6px; }
.skill-tile p { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px; }
.skill-meta { display: flex; gap: 6px; flex-wrap: wrap; }
.skill-meta span {
  font-size: 0.7rem;
  background: rgba(255,255,255,0.05);
  padding: 2px 8px;
  border-radius: 4px;
  color: #cbd5e1;
}

/* ==========================================================================
   PAGE 3: B.COM & ANALYTICS
   ========================================================================== */
.commerce-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
}
.degree-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px;
}
.degree-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.deg-icon {
  font-size: 2.2rem;
  color: var(--secondary);
}
.degree-header h3 { font-size: 1.25rem; }
.degree-header span { font-size: 0.8rem; color: var(--text-muted); }
.deg-desc { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 18px; line-height: 1.6; }
.deg-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.deg-list li { font-size: 0.85rem; display: flex; align-items: center; gap: 10px; color: #e2e8f0; }
.deg-list li i { color: var(--accent); }

.analytics-grid { display: flex; flex-direction: column; gap: 10px; }
.stat-pill {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: transform 0.2s;
}
.stat-pill:hover { transform: translateX(6px); border-color: var(--secondary); }
.stat-pill i { font-size: 1.5rem; }
.stat-pill strong { display: block; font-size: 0.9rem; }
.stat-pill span { font-size: 0.78rem; color: var(--text-muted); }

/* ==========================================================================
   PAGE 4: CAMPAIGNS GRID
   ========================================================================== */
.campaigns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.campaign-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}
.campaign-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}
.camp-tag {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  width: fit-content;
  margin-bottom: 12px;
}
.campaign-card h3 { font-size: 1.15rem; margin-bottom: 8px; }
.campaign-card p { font-size: 0.84rem; color: var(--text-muted); margin-bottom: 16px; flex-grow: 1; }
.camp-metric {
  background: rgba(16, 185, 129, 0.1);
  color: #6ee7b7;
  border-left: 3px solid var(--accent);
  padding: 6px 10px;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 0 6px 6px 0;
  margin-bottom: 14px;
}
.camp-footer { display: flex; gap: 6px; flex-wrap: wrap; }
.camp-footer span {
  font-size: 0.7rem;
  background: rgba(255,255,255,0.04);
  padding: 2px 8px;
  border-radius: 4px;
  color: #94a3b8;
}

/* ==========================================================================
   PAGE 5: CONTACT & HIRE ME
   ========================================================================== */
.contact-card-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  backdrop-filter: blur(14px);
}
.contact-left h2 { font-size: 1.8rem; margin: 8px 0; }
.contact-left p { color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px; }
.contact-points { display: flex; flex-direction: column; gap: 12px; }
.point-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255, 255, 255, 0.02);
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
}
.point-item i { font-size: 1.3rem; color: var(--secondary); }
.point-item small { font-size: 0.72rem; color: var(--text-dim); }
.point-item p { margin: 0; font-size: 0.85rem; font-weight: 600; }

.lead-form { display: flex; flex-direction: column; gap: 12px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.lead-form input, .lead-form select, .lead-form textarea {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--border);
  padding: 10px 14px;
  border-radius: 10px;
  color: #fff;
  font-family: inherit;
  font-size: 0.85rem;
  outline: none;
  transition: 0.3s;
}
.lead-form input:focus, .lead-form select:focus, .lead-form textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
}

/* ==========================================================================
   BOTTOM STATUSBAR
   ========================================================================== */
.app-statusbar {
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(14, 19, 31, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0 18px;
  font-size: 0.75rem;
  color: var(--text-dim);
}
.pulse-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  display: inline-block;
  margin-right: 6px;
}
.statusbar-item.tags span { color: var(--text-muted); }

/* Responsive adjustments for Tablets/Smaller viewports */
@media (max-width: 950px) {
  html, body { overflow-y: auto; height: auto; }
  .app-wrapper { height: auto; padding: 14px; }
  .nav-tabs { display: none; }
  .hero-grid, .commerce-layout, .contact-card-wrap { grid-template-columns: 1fr; }
  .skills-card-grid, .campaigns-grid { grid-template-columns: 1fr; }
  .stage-container { min-height: 80vh; }
  .page-pane { position: relative; }
}

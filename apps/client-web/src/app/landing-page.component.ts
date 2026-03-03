import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing-container animate-fade-in">
      <!-- Nav -->
      <nav class="glass-nav">
        <div class="nav-content">
          <div class="logo">
            <span class="text-gradient">EasyPharma</span>
          </div>
          <div class="nav-links">
            <a href="#features">Features</a>
            <a href="#demo" class="btn-premium">Try Demo</a>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <header class="hero">
        <div class="hero-content">
          <h1 class="text-gradient hero-title">Next-Gen Pharmaceutical Management</h1>
          <p class="hero-subtitle">
            Enterprise-grade security meets lightning-fast Signal reactivity. 
            Streamline your inventory, compliance, and distribution with a zero-trust architecture.
          </p>
          <div class="hero-actions">
            <button class="btn-premium">Get Started for Free</button>
            <button class="btn-outline">View Docs</button>
          </div>
        </div>
        <div class="hero-visual glass-card">
          <!-- Placeholder for high-end visualization -->
          <div class="visual-gradient-orb"></div>
          <div class="visual-grid"></div>
          <div class="visual-stat-card glass-card">
            <span class="stat-label">Stock Status</span>
            <span class="stat-value">99.9% Reliable</span>
          </div>
        </div>
      </header>

      <!-- Features Section -->
      <section id="features" class="features grid">
        <div class="feature-card glass-card">
            <h3>Secure by Design</h3>
            <p>Built with NestJS 11 and JWT/OIDC for enterprise-grade security and role-based access.</p>
        </div>
        <div class="feature-card glass-card">
            <h3>Signal-Driven UX</h3>
            <p>Leveraging Angular 21 Signals for a highly responsive, zoneless user interface.</p>
        </div>
        <div class="feature-card glass-card">
            <h3>Nx Powered</h3>
            <p>Monorepo architecture for seamless code sharing and lightning-fast builds.</p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="glass-footer">
        <p>© 2026 EasyPharma. Built with Passion & Precision.</p>
      </footer>
    </div>
  `,
  styles: [`
    .landing-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .glass-nav {
      position: sticky;
      top: 1rem;
      z-index: 100;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 999px;
      margin-top: 1rem;
      padding: 0.75rem 2rem;
    }

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo span {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -1px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-links a {
      color: #94a3b8;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: white;
    }

    .hero {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 4rem;
      padding: 8rem 0;
      align-items: center;
    }

    .hero-title {
      font-size: 4rem;
      line-height: 1.1;
      font-weight: 800;
      margin-bottom: 2rem;
      letter-spacing: -2px;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #94a3b8;
      margin-bottom: 3rem;
      max-width: 500px;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
    }

    .btn-outline {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 9999px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-outline:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .hero-visual {
      height: 400px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .visual-gradient-orb {
      position: absolute;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, #0d9488 0%, rgba(13, 148, 136, 0) 70%);
      filter: blur(40px);
      animation: float 6s infinite ease-in-out;
    }

    .visual-stat-card {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      padding: 1rem 1.5rem;
      display: flex;
      flex-direction: column;
    }

    .stat-label { font-size: 0.75rem; color: #94a3b8; }
    .stat-value { font-size: 1.25rem; font-weight: 700; color: #0d9488; }

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding-bottom: 8rem;
    }

    .feature-card {
      padding: 2.5rem;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-10px);
      border-color: rgba(13, 148, 136, 0.4);
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .feature-card p {
      color: #94a3b8;
    }

    .glass-footer {
      text-align: center;
      padding: 4rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #64748b;
      font-size: 0.875rem;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(20px, -20px); }
    }

    @media (max-width: 1024px) {
      .hero { grid-template-columns: 1fr; text-align: center; }
      .hero-subtitle { margin: 0 auto 3rem; }
      .hero-actions { justify-content: center; }
      .features { grid-template-columns: 1fr; }
    }
  `]
})
export class LandingPageComponent {}

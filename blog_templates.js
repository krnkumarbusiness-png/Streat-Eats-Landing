const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname);

// Unified Header HTML
function getHeader(activePage = '') {
  return `  <!-- NAVBAR -->
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand"><span class="brand-dot"></span>Streat Eats</a>
        <div class="nav-acts desktop">
          <a href="index.html#story" class="btn btn-out" style="border:none;background:transparent;color:var(--text2);font-weight:700;padding:10px 16px;">Our Story</a>
          <a href="blogs.html" class="btn btn-out" style="border:none;background:transparent;color:${activePage === 'blogs' ? 'var(--pri)' : 'var(--text2)'};font-weight:700;padding:10px 16px;">Blog</a>
          <a href="https://play.google.com/store/apps/details?id=com.streeteats.hld&pcampaignid=web_share" class="btn btn-out" target="_blank" rel="noopener">Download App</a>
          <a href="https://app.streateats.in" class="btn btn-pri" target="_blank" rel="noopener">Open Web App</a>
        </div>
        <button class="mob-btn" id="mobBtn" aria-label="Toggle menu" aria-expanded="false">
          <div class="hamburger"><span></span><span></span><span></span></div>
        </button>
      </div>
      <div class="mob-menu" id="mobMenu">
        <a href="index.html#story" class="btn btn-out" style="border-color:var(--border);">Our Story &amp; Founders</a>
        <a href="blogs.html" class="btn btn-out" style="border-color:var(--border);">Blog &amp; Articles</a>
        <a href="https://play.google.com/store/apps/details?id=com.streeteats.hld&pcampaignid=web_share" class="btn btn-out" target="_blank" rel="noopener">Download App</a>
        <a href="https://app.streateats.in" class="btn btn-pri" target="_blank" rel="noopener">Open Web App</a>
      </div>
    </div>
  </nav>`;
}

// Unified Footer HTML
function getFooter() {
  return `  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand"><span class="brand-dot"></span>Streat Eats</div>
          <p class="footer-tagline">Your favourite street food, delivered home. Haldwani's best momos, burgers, and chaat — at your door in 30 minutes with zero markup.</p>
        </div>
        <div>
          <div class="footer-heading">Quick Links</div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#story">Our Story &amp; Founders</a></li>
            <li><a href="blogs.html">Blog &amp; Stories</a></li>
            <li><a href="https://app.streateats.in" target="_blank" rel="noopener">Web App</a></li>
            <li><a href="https://instagram.com/StreatEats.hld" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Get the App</div>
          <ul class="footer-links">
            <li><a href="https://play.google.com/store/apps/details?id=com.streeteats.hld&pcampaignid=web_share" target="_blank" rel="noopener">Download Android App</a></li>
            <li><a href="https://app.streateats.in" target="_blank" rel="noopener">Open iPhone Web App</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Founders</div>
          <ul class="footer-links">
            <li><a href="blog-karan-kumar.html">Karan Kumar (Founder &amp; CEO)</a></li>
            <li><a href="blog-lokesh-paneru.html">Lokesh Paneru (Co-Founder &amp; Ops)</a></li>
            <li><a href="blog-how-streat-eats-works.html">Zero Markup Model</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">&copy; 2026 Streat Eats. Founded by Karan Kumar &amp; Lokesh Paneru in Haldwani, Uttarakhand.</div>
    </div>
  </footer>

  <script>
    // Hamburger menu toggle
    const mobBtn = document.getElementById('mobBtn');
    const mobMenu = document.getElementById('mobMenu');
    if (mobBtn && mobMenu) {
      mobBtn.addEventListener('click', () => {
        mobBtn.classList.toggle('active');
        mobMenu.classList.toggle('active');
      });
    }
  </script>`;
}

// Sidebar HTML (Fixed sticky wrapper without inner card conflicts)
function getSidebar(isHindi = false) {
  if (isHindi) {
    return `      <!-- Sidebar -->
      <aside class="article-sidebar">
        <div class="sidebar-card">
          <div class="sidebar-title">संस्थापक (Founders)</div>
          <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 14px;">
            <img src="founder.webp" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid var(--pri);" alt="Karan Kumar">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">Karan Kumar (21)</div>
              <div style="font-size: 0.8rem; color: var(--pri); font-weight: 600;">Founder &amp; CEO (Tech)</div>
            </div>
          </div>
          <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 18px;">
            <img src="co founder.jpeg" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid var(--pri);" alt="Lokesh Paneru">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">Lokesh Paneru (20)</div>
              <div style="font-size: 0.8rem; color: var(--pri); font-weight: 600;">Co-Founder &amp; Ops Head</div>
            </div>
          </div>
          <div class="social-links" style="justify-content: flex-start;">
            <a href="https://instagram.com/krn.wip" target="_blank" rel="noopener" class="social-btn">📷 @krn.wip</a>
            <a href="https://instagram.com/lokesh.paneru" target="_blank" rel="noopener" class="social-btn">📷 @lokesh.paneru</a>
          </div>
        </div>

        <div class="sidebar-card" style="background: linear-gradient(135deg, #FF6B35, #FF8C42); color: #FFF;">
          <h3 style="font-family: var(--fh); font-size: 1.2rem; margin-bottom: 10px; color: #FFF;">Streat Eats ट्राय करें!</h3>
          <p style="font-size: 0.88rem; line-height: 1.5; margin-bottom: 16px; color: #FFF0E8;">
            कूपन कोड <strong>STREAT50</strong> लगाएं और पहले ऑर्डर पर ₹50 तक की छूट पाएं। 30 मिनट में गरमा-गरम डिलीवरी!
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.streeteats.hld&pcampaignid=web_share"
            class="btn btn-pri" style="background: #FFF; color: var(--pri); width: 100%; justify-content: center; font-weight: 800;"
            target="_blank" rel="noopener">ऐप डाउनलोड करें</a>
        </div>
      </aside>`;
  }

  return `      <!-- Sidebar -->
      <aside class="article-sidebar">
        <div class="sidebar-card">
          <div class="sidebar-title">Founders of Streat Eats</div>
          <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 14px;">
            <img src="founder.webp" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid var(--pri);" alt="Karan Kumar">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">Karan Kumar (21)</div>
              <div style="font-size: 0.8rem; color: var(--pri); font-weight: 600;">Founder &amp; CEO (Tech)</div>
            </div>
          </div>
          <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 18px;">
            <img src="co founder.jpeg" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid var(--pri);" alt="Lokesh Paneru">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">Lokesh Paneru (20)</div>
              <div style="font-size: 0.8rem; color: var(--pri); font-weight: 600;">Co-Founder &amp; Ops Head</div>
            </div>
          </div>
          <div class="social-links" style="justify-content: flex-start;">
            <a href="https://instagram.com/krn.wip" target="_blank" rel="noopener" class="social-btn">📷 @krn.wip</a>
            <a href="https://instagram.com/lokesh.paneru" target="_blank" rel="noopener" class="social-btn">📷 @lokesh.paneru</a>
          </div>
        </div>

        <div class="sidebar-card" style="background: linear-gradient(135deg, #FF6B35, #FF8C42); color: #FFF;">
          <h3 style="font-family: var(--fh); font-size: 1.2rem; margin-bottom: 10px; color: #FFF;">Craving Haldwani Food?</h3>
          <p style="font-size: 0.88rem; line-height: 1.5; margin-bottom: 16px; color: #FFF0E8;">
            Get momos, burgers &amp; chaat delivered in 30 mins with zero markup. Use code <strong>STREAT50</strong> for UPTO ₹50 OFF!
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.streeteats.hld&pcampaignid=web_share"
            class="btn btn-pri" style="background: #FFF; color: var(--pri); width: 100%; justify-content: center; font-weight: 800;"
            target="_blank" rel="noopener">Download Free App</a>
        </div>
      </aside>`;
}

module.exports = { getHeader, getFooter, getSidebar };

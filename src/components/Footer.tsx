import "./Footer.css";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/legacyalphaville/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/Bbur8Y6zQBpGOkqxdfVb4q?mode=ac_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnt4bIHoRG3Bj7kQ25DxIoxV3ewrbBV_iHyhJYFm6BB-nWhC3hJFyCWpio1f0_aem_O1J7OiyIZHIlusBPHyr7jA",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@legacyalphaville",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@legacyalphaville",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Lineup", href: "#lineup" },
  { label: "Programação", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__watermark" aria-hidden="true">
        LEGACY
      </span>

      <div className="footer__container">
        {/* ── Top ── */}
        <div className="footer__top">
          <div>
            <span className="footer__label">CONF LEGACY 2026</span>
            <h2>
              Viva uma vida
              <br />
              de santidade.
            </h2>
          </div>

          <a href="#inscricao" className="footer__cta">
            Reservar presença
          </a>
        </div>

        {/* ── Middle ── */}
        <div className="footer__middle">
          <nav className="footer__links" aria-label="Links do rodapé">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__middle-separator" aria-hidden="true" />

          <div
            className="footer__social"
            role="list"
            aria-label="Redes sociais"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (abre em nova aba)`}
                role="listitem"
                className="footer__social-link"
              >
                {social.icon}
                <span className="footer__social-label">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom ── */}
        <div className="footer__bottom">
          <span className="footer__bottom-copyright">
            © 2026 Legacy Alphaville
          </span>
          <span className="footer__bottom-tagline">
            Santidade • Encontro • Devoção
          </span>
        </div>
      </div>
    </footer>
  );
}

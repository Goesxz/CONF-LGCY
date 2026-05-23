import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Memórias", href: "#last-conf" },
  { label: "Lineup", href: "#lineup" },
  { label: "Programação", href: "#schedule" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* Scroll state */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Outside click */

  useEffect(() => {
    if (!menuOpen) return;

    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* Escape */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={[
          "navbar",
          scrolled ? "navbar--scrolled" : "",
          menuOpen ? "navbar--open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="navbar__inner">
          {/* Logo */}

          <a href="#home" className="navbar__logo" onClick={closeMenu}>
            CONF <span>LEGACY</span>
          </a>

          {/* Desktop */}

          <nav className="navbar__links" aria-label="Navegação principal">
            {LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="navbar__link">
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}

          <a
            href="#inscricao"
            className="navbar__cta"
            aria-label="Reservar presença"
          >
            Reservar
          </a>

          {/* Mobile button */}

          <button
            ref={buttonRef}
            type="button"
            className="navbar__menu-button"
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="navbar__burger" aria-hidden="true">
              <span />
              <span />
            </span>

            <span className="navbar__menu-label">
              {menuOpen ? "Fechar" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile panel */}

      <div
        id="navbar-mobile"
        ref={menuRef}
        className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="navbar__mobile-nav"
          aria-label="Navegação mobile"
          tabIndex={menuOpen ? undefined : -1}
        >
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="navbar__mobile-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <a
            href="#inscricao"
            className="navbar__mobile-cta"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Reservar presença
          </a>
        </nav>

        <p className="navbar__mobile-date" aria-hidden="true">
          25–27 Julho · Legacy Alphaville
        </p>
      </div>

      {/* Overlay */}

      {menuOpen && (
        <div
          className="navbar__overlay"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

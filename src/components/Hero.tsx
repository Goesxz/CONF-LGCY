import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/scenes/BG LEGACY AUD 3.jpg"
      >
        <source src="/videos/Design sem nome.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />

      <motion.div
        className="hero__content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__kicker" variants={fadeUp}>
          <span>CONF LEGACY 2026</span>
          <span>ALPHAVILLE • SP</span>
        </motion.div>

        <motion.h1 className="hero__title" variants={fadeUp}>
          <span>CONF</span>
          <strong>LEGACY</strong>
        </motion.h1>

        <motion.div className="hero__statement" variants={fadeUp}>
          <p>Santidade não é estética.</p>
          <strong>É entrega.</strong>
        </motion.div>

        <motion.div className="hero__meta" variants={fadeUp}>
          <div>
            <span>Data</span>
            <strong>25 Julho</strong>
          </div>

          <div>
            <span>Local</span>
            <strong>Legacy Alphaville</strong>
          </div>

          <div>
            <span>Tema</span>
            <strong>Santidade</strong>
          </div>
        </motion.div>

        <motion.div className="hero__actions" variants={fadeUp}>
          <a href="#inscricao" className="hero__button hero__button--primary">
            Reservar presença
          </a>

          <a href="#last-conf" className="hero__button hero__button--ghost">
            Ver momentos
          </a>
        </motion.div>
      </motion.div>

      <div className="hero__mark" aria-hidden="true">
        LGCY
      </div>
    </section>
  );
}

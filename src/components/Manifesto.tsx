import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeRight, viewportConfig } from "../lib/motion";
import "./Manifesto.css";

const words = ["Louvor", "Palavra", "Altar", "Comunhão", "Presença"];

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.04, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section className="manifesto" id="manifesto" ref={sectionRef}>
      <div className="manifesto__bg" aria-hidden="true">
        <motion.div className="manifesto__bg-orb" style={{ y: bgY }} />
      </div>

      <div className="manifesto__content">
        <div className="manifesto__text-col">
          <motion.span
            className="manifesto__label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Manifesto
          </motion.span>

          <motion.h2
            className="manifesto__headline"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.1}
          >
            Há encontros
            <br />
            que você assiste.
            <br />
            <em>
              Há encontros que
              <br />
              você carrega.
            </em>
          </motion.h2>

          <motion.ul
            className="manifesto__words"
            aria-label="Pilares da conferência"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.25}
          >
            {words.map((word, i) => (
              <motion.li
                key={word}
                className="manifesto__word"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={0.35 + i * 0.08}
              >
                <span className="manifesto__word-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {word}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="manifesto__closing"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.5}
          >
            <p>Santidade não é estética.</p>
            <strong>É entrega.</strong>
          </motion.div>
        </div>

        <motion.div
          className="manifesto__media"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.2}
        >
          <div className="manifesto__video-wrap">
            <motion.video
              className="manifesto__video"
              src="/videos/SaveInta.com_AQPw9VH4KzBsgfSyQAcP93lqlUNh8N_55m56kzdNTytbbvWLF1K-Y20-wTfDE9wofVkyGZiSaaowPaIwaqsEO61ws8RIIcY9OoGHiVs.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ scale: videoScale }}
            />

            <div className="manifesto__video-overlay" aria-hidden="true" />
            <div className="manifesto__video-border" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <div className="manifesto__watermark" aria-hidden="true">
        LEGACY
      </div>
    </section>
  );
}

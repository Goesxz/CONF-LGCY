import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "../lib/motion";
import "./Registration.css";

export function Registration() {
  return (
    <section className="registration" id="inscricao">
      <div className="registration__bg" aria-hidden="true" />

      <div className="registration__container">
        <motion.span
          className="registration__label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Inscrição
        </motion.span>

        <motion.h2
          className="registration__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.1}
        >
          Há encontros que
          <br />
          mudam trajetórias.
        </motion.h2>

        <motion.p
          className="registration__intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.2}
        >
          O que começa em um encontro pode continuar por uma vida inteira.
        </motion.p>

        <motion.div
          className="registration__meta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.3}
        >
          <span>25–27 JULHO 2026</span>
          <span className="registration__meta-sep" aria-hidden="true" />
          <span>LEGACY ALPHAVILLE</span>
        </motion.div>

        <motion.div
          className="registration__actions"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.42}
        >
          <a
            href="https://forms.gle/BQVncqMkiBeuNSAz5"
            target="_blank"
            rel="noopener noreferrer"
            className="registration__button registration__button--primary"
          >
            Reservar presença
          </a>

          <a
            href="#voluntarios"
            className="registration__button registration__button--secondary"
          >
            Quero servir
          </a>
        </motion.div>

        <motion.p
          className="registration__footer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.56}
        >
          Santidade&nbsp;&bull;&nbsp;Encontro&nbsp;&bull;&nbsp;Devoção
        </motion.p>
      </div>
    </section>
  );
}

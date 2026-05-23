import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "../lib/motion";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Eu entrei achando que seria só mais uma conferência. Saí entendendo que Deus estava me chamando de volta.",
    name: "Ana Beatriz",
    detail: "LGCY CONF 24",
  },
  {
    quote:
      "Não foi sobre música, luz ou palco. Foi sobre presença. Algo mudou em mim naquela noite.",
    name: "Gabriel Santos",
    detail: "LGCY 2 ANOS",
  },
  {
    quote:
      "Eu precisava estar lá. Algumas decisões que tomei depois daquele encontro mudaram minha caminhada.",
    name: "Mariana Lopes",
    detail: "LGCY CAMP 26",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials" id="testemunhos">
      <div className="testimonials__bg" aria-hidden="true" />

      <div className="testimonials__container">
        <div className="testimonials__header">
          <motion.span
            className="testimonials__label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Testemunhos
          </motion.span>

          <motion.h2
            className="testimonials__title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.1}
          >
            Histórias que
            <br />
            continuaram.
          </motion.h2>

          <motion.p
            className="testimonials__intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.2}
          >
            Algumas marcas não terminam quando as luzes apagam.
          </motion.p>
        </div>

        <ol className="testimonials__list" role="list">
          {testimonials.map((item, index) => (
            <motion.li
              key={item.name}
              className="testimonial"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={index * 0.12}
            >
              <span className="testimonial__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <blockquote className="testimonial__quote">
                <p>"{item.quote}"</p>
              </blockquote>

              <footer className="testimonial__footer">
                <span className="testimonial__name">{item.name}</span>

                <span className="testimonial__detail">{item.detail}</span>
              </footer>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

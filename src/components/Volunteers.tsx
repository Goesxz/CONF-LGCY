import { motion, type Variants } from "framer-motion";
import "./Volunteers.css";

const GOOGLE_FORMS_URL = "https://forms.gle/UykYucaJELMhUAMx6";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      delay,
      ease,
    },
  }),
};

const areas = [
  "Recepção",
  "Produção",
  "Intercessão",
  "Mídia",
  "Apoio",
  "Conexão",
];

export function Volunteers() {
  return (
    <section className="volunteers" id="voluntarios">
      <div className="volunteers__bg" />

      <div className="volunteers__container">
        <motion.div
          className="volunteers__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
        >
          <span className="volunteers__label">Voluntários</span>

          <h2>
            Faça parte
            <br />
            da construção.
          </h2>

          <p>
            A conferência não é carregada apenas por quem sobe ao palco. Ela é
            construída por pessoas que escolhem servir nos bastidores.
          </p>

          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="volunteers__cta"
          >
            Aplicar para servir ↗
          </a>
        </motion.div>

        <motion.div
          className="volunteers__panel"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
          custom={0.18}
        >
          <div className="volunteers__panel-header">
            <span>Áreas</span>
            <strong>Serviço</strong>
          </div>

          <div className="volunteers__areas">
            {areas.map((area, index) => (
              <div className="volunteers__area" key={area}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>

          <p className="volunteers__note">
            Após o envio, nossa equipe entrará em contato com mais informações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

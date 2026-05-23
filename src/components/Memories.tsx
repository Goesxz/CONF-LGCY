import { motion, type Variants } from "framer-motion";
import "./Memories.css";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      delay,
      ease,
    },
  }),
};

const memories = [
  {
    year: "2024",
    title: "LGCY CONF 24",
    subtitle: "Não foi evento. Foi encontro.",
    description:
      "Uma noite marcada por presença, rendição e memória. Alguns momentos continuam mesmo depois que as luzes apagam.",
    video: "/videos/LGCY CONF 24.mp4",
    poster: "/images/scenes/BG LEGACY AUD 3.jpg",
  },
  {
    year: "2025",
    title: "LGCY 2 ANOS",
    subtitle: "Você precisava estar lá.",
    description:
      "Dois anos de história, comunidade e altar. Uma celebração que apontou para algo maior.",
    video: "/videos/LGCY RECAP 2 ANOS.mp4",
    poster: "/images/scenes/2 ANOS - IMG.jpg",
  },
  {
    year: "2026",
    title: "LGCY CAMP 26",
    subtitle: "Algumas coisas permanecem.",
    description:
      "Um tempo separado para ouvir, permanecer e voltar diferente. Mais do que registros: fragmentos de presença.",
    video: "/videos/LGCY RECAP CAMP 26.mp4",
    poster: "/videos/LGCY RECAP CAMP 26.mp4",
  },
];

export function Memories() {
  return (
    <section className="memories" id="last-conf">
      <div className="memories__container">
        <motion.div
          className="memories__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
        >
          <span>Última Conferência</span>

          <h2>
            Algumas coisas
            <br />
            continuam depois
            <br />
            do fim.
          </h2>

          <p>
            Mais do que registros. Mais do que lembranças. Fragmentos de algo
            que ainda continua.
          </p>
        </motion.div>

        <div className="memories__list">
          {memories.map((memory, index) => (
            <motion.article
              className={`memory ${index % 2 !== 0 ? "memory--reverse" : ""}`}
              key={memory.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              custom={0.15}
            >
              <div className="memory__media">
                <video poster={memory.poster} muted loop playsInline autoPlay>
                  <source src={memory.video} type="video/mp4" />
                </video>
              </div>

              <div className="memory__text">
                <span>{memory.year}</span>

                <h3>{memory.title}</h3>

                <strong>{memory.subtitle}</strong>

                <p>{memory.description}</p>

                <a href="#inscricao">Reservar presença</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

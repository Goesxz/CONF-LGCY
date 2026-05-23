import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import "./Scenes.css";

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

const scenes = [
  {
    image:
      "/images/scenes/SaveInta.com_523491833_18321792391235652_3455992855428180733_n.jpg",
    title: "Adoração",
  },
  {
    image:
      "/images/scenes/SaveInta.com_495534945_18312010531235652_1243662240004630117_n.jpg",
    title: "Palavra",
  },
  {
    image:
      "/images/scenes/SaveInta.com_495384156_18312010522235652_3996010136993533364_n.jpg",
    title: "Presença",
  },
  {
    image: "/images/scenes/2 ANOS - IMG.jpg",
    title: "Altar",
  },
  {
    image:
      "/images/scenes/SaveInta.com_477391001_18302881543235652_5270526114015309073_n.jpg",
    title: "Comunhão",
  },
  {
    image: "/images/scenes/BG LEGACY AUD 3.jpg",
    title: "Entrega",
  },
];

export function Scenes() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    if (!trackRef.current) return;

    const cardWidth =
      trackRef.current.querySelector(".scene")?.clientWidth ?? 360;

    trackRef.current.scrollBy({
      left: dir * (cardWidth + 18),
      behavior: "smooth",
    });
  };

  return (
    <section className="scenes" id="scenes">
      <div className="scenes__bg" />

      <div className="scenes__header">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
        >
          <span>Cenas da Legacy</span>

          <h2>
            Momentos que
            <br />
            ficaram.
          </h2>
        </motion.div>

        <motion.div
          className="scenes__controls"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
          custom={0.15}
        >
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={() => scroll(-1)}
          >
            ←
          </button>

          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={() => scroll(1)}
          >
            →
          </button>
        </motion.div>
      </div>

      <motion.div
        className="scenes__track"
        ref={trackRef}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
        custom={0.25}
      >
        {scenes.map((scene, index) => (
          <article
            className={`scene ${index % 3 === 1 ? "scene--tall" : ""}`}
            key={scene.image}
          >
            <img src={scene.image} alt={scene.title} />

            <div className="scene__overlay" />

            <div className="scene__content">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{scene.title}</strong>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}

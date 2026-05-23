import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import "./Speakers.css";

const lineup = [
  {
    name: "Davi\nBarreto",
    instagram: "@davibarreto",
    type: "Preletor",
    image: "/images/lineup/speakers/DAVI BARRETO.png",
    bio: "Uma voz profética que tem impactado gerações com mensagens que confrontam e transformam.",
  },
  {
    name: "Lucinho\nBarreto",
    instagram: "@lucinhobarreto",
    type: "Preletor",
    image: "/images/lineup/speakers/LUCINHO BARRETO.png",
    bio: "Referência no movimento de avivamento no Brasil, carregando uma mensagem de entrega e santidade.",
  },
  {
    name: "Patrick\nVolpi",
    instagram: "@patrickvolpi",
    type: "Preletor",
    image: "/images/lineup/speakers/PATRICK VOLPI.png",
    bio: "Uma voz pastoral que conduz pessoas a uma experiência real com a presença de Deus.",
  },
  {
    name: "Raquel\nLima",
    instagram: "@raquellima",
    type: "Preletora",
    image: "/images/lineup/speakers/RAQUEL LIMA.png",
    bio: "Uma pregadora com coragem, sensibilidade e palavra para despertar propósito.",
  },
  {
    name: "Samuel\nWagner",
    instagram: "@samuelwagner",
    type: "Preletor",
    image: "/images/lineup/speakers/SAMUEL WAGNER.png",
    bio: "Uma voz jovem que comunica identidade, santidade e profundidade para esta geração.",
  },
  {
    name: "Carol\nBraga",
    instagram: "@carolbraga",
    type: "Louvor",
    image: "/images/lineup/ministers/CAROL BRAGA.png",
    bio: "Ministra de louvor que conduz pessoas à presença com sensibilidade e entrega.",
  },
  {
    name: "Gabi\nSampaio",
    instagram: "@gabisampaio",
    type: "Louvor",
    image: "/images/lineup/ministers/GABI SAMPAIO.png",
    bio: "Uma voz marcada por autenticidade, unção e adoração profunda.",
  },
  {
    name: "Jhon\nFelix",
    instagram: "@jhonfelix",
    type: "Louvor",
    image: "/images/lineup/ministers/JHON FELIX.png",
    bio: "Compositor e ministro que transforma canções em momentos de altar.",
  },
  {
    name: "Lagoinha\nMusic",
    instagram: "@lagoinhamusic",
    type: "Louvor",
    image: "/images/lineup/ministers/LAGOINHA MUSIC.png",
    bio: "Um ministério que carrega um legado de adoração para o Brasil.",
  },
];

type Person = (typeof lineup)[number];

function slugify(instagram: string) {
  return instagram.replace("@", "").toLowerCase();
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

function SpeakerCard({ person, index }: { person: Person; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [firstName, lastName] = person.name.split("\n");
  const isLouvor = person.type === "Louvor";
  const slug = slugify(person.instagram);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((p) => !p);
    }
    if (e.key === "Escape") setFlipped(false);
  };

  return (
    <motion.article
      className={`speakers-card${flipped ? " speakers-card--flipped" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={() => setFlipped((p) => !p)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${person.name.replace("\n", " ")} — ${person.type}. Pressione Enter para ver a bio.`}
      aria-pressed={flipped}
    >
      <div className="speakers-card__inner">
        {/* ── FRENTE ── */}
        <div className="speakers-card__front">
          <img
            src={person.image}
            alt={person.name.replace("\n", " ")}
            className={`speakers-card__img speakers-card__img--${slug}`}
            draggable={false}
            loading="lazy"
            decoding="async"
          />

          <div className="speakers-card__overlay" aria-hidden="true" />

          <div className="speakers-card__content">
            <span
              className={`speakers-card__badge speakers-card__badge--${isLouvor ? "louvor" : "preletor"}`}
            >
              {person.type}
            </span>

            <h3 className="speakers-card__name">
              <span className="speakers-card__name-first">{firstName}</span>
              <span className="speakers-card__name-last">{lastName}</span>
            </h3>

            <span className="speakers-card__instagram">{person.instagram}</span>
          </div>

          <div className="speakers-card__hint" aria-hidden="true">
            <span>ver bio</span>
          </div>
        </div>

        {/* ── VERSO ── */}
        <div className="speakers-card__back" aria-hidden={!flipped}>
          <div className="speakers-card__back-content">
            <span
              className={`speakers-card__badge speakers-card__badge--${isLouvor ? "louvor" : "preletor"}`}
            >
              {person.type}
            </span>

            <h3 className="speakers-card__back-name">
              {person.name.replace("\n", " ")}
            </h3>

            <div className="speakers-card__divider" aria-hidden="true" />

            <p className="speakers-card__bio">{person.bio}</p>

            <span className="speakers-card__instagram speakers-card__instagram--back">
              {person.instagram}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Speakers() {
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  const scroll = (dir: -1 | 1) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>(".speakers-card");
    const gap = 16;
    const cardW = card ? card.offsetWidth + gap : 300;
    trackRef.current.scrollBy({ left: dir * cardW * 2, behavior: "smooth" });
  };

  return (
    <section className="speakers" id="lineup">
      <div className="speakers__bg" aria-hidden="true" />

      {/* ── HEADER ── */}
      <div className="speakers__container" ref={headerRef}>
        <div className="speakers__header">
          <div className="speakers__header-left">
            <motion.span
              className="speakers__label"
              animate={
                headerInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 16, filter: "blur(6px)" }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Lineup
            </motion.span>

            <motion.h2
              className="speakers__title"
              animate={
                headerInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 24, filter: "blur(8px)" }
              }
              transition={{
                duration: 1.0,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Vozes que
              <br />
              carregam algo.
            </motion.h2>

            <motion.p
              className="speakers__text"
              animate={
                headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
              }
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Palavra, louvor e presença conduzindo
              <br className="speakers__br" /> uma geração de volta ao altar.
            </motion.p>
          </div>

          <motion.div
            className="speakers__controls"
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              className="speakers__button"
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Rolar para a esquerda"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11 4L6 9L11 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="speakers__button"
              type="button"
              onClick={() => scroll(1)}
              aria-label="Rolar para a direita"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 4L12 9L7 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── CAROUSEL ── */}
      <div className="speakers__track-wrap">
        <div className="speakers__track" ref={trackRef}>
          <div className="speakers__track-pad" aria-hidden="true" />
          {lineup.map((person, i) => (
            <SpeakerCard key={person.instagram} person={person} index={i} />
          ))}
          <div className="speakers__track-pad" aria-hidden="true" />
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="speakers__container">
        <motion.div
          className="speakers__footer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <span className="speakers__count">
            <span className="speakers__count-num">9</span> convidados
            confirmados
          </span>

          <a href="#schedule" className="speakers__cta">
            <span>Ver programação completa</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

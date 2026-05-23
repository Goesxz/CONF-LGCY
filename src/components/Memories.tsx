import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import "./Memories.css";

/* ─── Animação ─────────────────────────────────────── */

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, delay, ease },
  }),
};

/* ─── Hook: autoplay por Intersection Observer ────── */

function useVideoAutoplay(threshold = 0.3) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return videoRef;
}

/* ─── Sub-componente ────────────────────────────────── */

interface MemoryCardProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  video: string;
  reverse?: boolean;
  animationDelay?: number;
}

function MemoryCard({
  year,
  title,
  subtitle,
  description,
  video,
  reverse = false,
  animationDelay = 0.15,
}: MemoryCardProps) {
  const videoRef = useVideoAutoplay(0.3);

  return (
    <motion.article
      className={`memory ${reverse ? "memory--reverse" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      // amount: 0.1 → dispara com apenas 10% visível,
      // evitando ficar preso no hidden ao navegar via hash
      viewport={{ once: true, amount: 0.1 }}
      custom={animationDelay}
    >
      <div className="memory__media">
        {/*
          Sem poster. O fundo escuro do .memory__media já serve
          como placeholder enquanto o vídeo não começa.
          preload="none" → não baixa nada até o usuário chegar aqui.
        */}
        <video ref={videoRef} muted loop playsInline preload="none">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="memory__text">
        <span>{year}</span>
        <h3>{title}</h3>
        <strong>{subtitle}</strong>
        <p>{description}</p>
        <a href="#inscricao">Reservar presença</a>
      </div>
    </motion.article>
  );
}

/* ─── Dados ─────────────────────────────────────────── */

const memories = [
  {
    year: "2024",
    title: "LGCY CONF 24",
    subtitle: "Não foi evento. Foi encontro.",
    description:
      "Uma noite marcada por presença, rendição e memória. Alguns momentos continuam mesmo depois que as luzes apagam.",
    video:
      "https://res.cloudinary.com/djpdnyvpv/video/upload/v1779557417/LGCY_CONF_24_zq61eo.mp4",
  },
  {
    year: "2025",
    title: "LGCY 2 ANOS",
    subtitle: "Você precisava estar lá.",
    description:
      "Dois anos de história, comunidade e altar. Uma celebração que apontou para algo maior.",
    video:
      "https://res.cloudinary.com/djpdnyvpv/video/upload/v1779557522/LGCY_RECAP_2_ANOS_ibswun.mp4",
  },
  {
    year: "2026",
    title: "LGCY CAMP 26",
    subtitle: "Algumas coisas permanecem.",
    description:
      "Um tempo separado para ouvir, permanecer e voltar diferente. Mais do que registros: fragmentos de presença.",
    video:
      "https://res.cloudinary.com/djpdnyvpv/video/upload/v1779557630/LGCY_RECAP_CAMP_26_jdeudk.mp4",
  },
];

/* ─── Componente principal ──────────────────────────── */

export function Memories() {
  return (
    <section className="memories" id="last-conf">
      <div className="memories__container">
        {/*
          Header usa animate (sempre visível) em vez de whileInView,
          evitando ficar preso no estado hidden quando a página
          carrega direto no anchor #last-conf.
        */}
        <motion.div
          className="memories__header"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
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
            <MemoryCard
              key={memory.title}
              {...memory}
              reverse={index % 2 !== 0}
              animationDelay={0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Variants, Transition, TargetAndTransition } from "framer-motion";

// ─────────────────────────────────────────────
// Shared easing
// ─────────────────────────────────────────────

export const ease = [0.16, 1, 0.3, 1] as const;

const baseTransition: Transition = {
  duration: 1.2,
  ease,
};

// ─────────────────────────────────────────────
// Shared viewport
// ─────────────────────────────────────────────

export const viewportConfig = {
  once: true,
  margin: "-8%",
} as const;

// ─────────────────────────────────────────────
// Fade animations
// ─────────────────────────────────────────────

/** Entrada de baixo com blur leve. Suporta custom delay via custom={0.2} */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(4px)",
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...baseTransition,
      delay,
    },
  }),
};

/** Entrada de cima */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -32,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      delay,
    },
  }),
};

/** Entrada da direita → esquerda */
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...baseTransition,
      delay,
    },
  }),
};

/** Entrada da esquerda → direita */
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...baseTransition,
      delay,
    },
  }),
};

// ─────────────────────────────────────────────
// Scale animations
// ─────────────────────────────────────────────

/** Entrada com leve escala — cards, imagens, modais */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...baseTransition,
      delay,
    },
  }),
};

/** Linha crescendo da esquerda — divisores, underlines */
export const revealLine: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: (delay: number = 0) => ({
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 1,
      ease,
      delay,
    },
  }),
};

// ─────────────────────────────────────────────
// Container animations
// ─────────────────────────────────────────────

/** Stagger para containers com múltiplos filhos */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0,
    },
  },
};

/** Stagger mais lento — para grids grandes ou listas longas */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

/** Entrada de seção inteira — fade simples, sem deslocamento */
export const pageReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 1,
      ease,
      delay,
    },
  }),
};

// ─────────────────────────────────────────────
// Background animations
// ─────────────────────────────────────────────

/**
 * Float contínuo — orbs, backgrounds, vídeos.
 * Usar diretamente em `animate`, não em `variants`.
 *
 * @example
 * <motion.div animate={floatAnimation} />
 */
export const floatAnimation: TargetAndTransition = {
  y: [0, -12, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Parallax lento — imagens de fundo.
 * Ideal para usar com `useScroll` + `useTransform`,
 * ou diretamente como animate target.
 *
 * @example
 * <motion.div animate={parallaxSlow} />
 */
export const parallaxSlow: TargetAndTransition = {
  y: -25,
  transition: {
    duration: 1.6,
    ease,
  },
};

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ease, fadeUp, viewportConfig } from "../lib/motion";
import "./FAQ.css";

const faqItems = [
  {
    question: "Quando acontece a CONF LEGACY?",
    answer: "25 a 27 de Julho de 2026.",
  },
  {
    question: "Onde será realizada?",
    answer: "Legacy Alphaville.",
  },
  {
    question: "Como faço minha inscrição?",
    answer:
      "Você pode reservar sua presença diretamente pelo botão de inscrição no site.",
  },
  {
    question: "Existe limite de idade?",
    answer: "O evento é aberto para todas as idades.",
  },
  {
    question: "Como posso servir como voluntário?",
    answer: "Na seção Voluntários existe um formulário para aplicação.",
  },
  {
    question: "O que preciso levar?",
    answer: "Apenas sua presença, expectativa e coração disponível.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__bg" aria-hidden="true" />

      <div className="faq__container">
        <motion.div
          className="faq__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="faq__label">FAQ</span>

          <h2 className="faq__title">
            Antes de chegar,
            <br />
            algumas respostas.
          </h2>

          <p className="faq__intro">
            Tudo o que você precisa saber antes de viver a experiência.
          </p>
        </motion.div>

        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                className={`faq-item${isOpen ? " faq-item--open" : ""}`}
                key={item.question}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={index * 0.08}
              >
                <button
                  className="faq-item__button"
                  onClick={() => toggle(index)}
                  type="button"
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__question">{item.question}</span>

                  <motion.span
                    className="faq-item__icon"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-item__answer"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "../lib/motion";
import "./Schedule.css";

const days = [
  {
    label: "Dia I",
    date: "Sexta-feira",
    theme: "O Chamado",
    items: [
      {
        time: "19h00",
        title: "Abertura",
        description:
          "Uma noite para despertar o que estava adormecido. Louvor, palavra e altar.",
        tag: "Sessão principal",
      },
      {
        time: "21h00",
        title: "Altar Aberto",
        description: "Um tempo de resposta, oração e entrega diante de Deus.",
        tag: "Momento de altar",
      },
    ],
  },
  {
    label: "Dia II",
    date: "Sábado",
    theme: "A Entrega",
    items: [
      {
        time: "09h00",
        title: "Santidade",
        description: "Uma manhã de ensino, confronto e alinhamento espiritual.",
        tag: "Palavra",
      },
      {
        time: "14h00",
        title: "Conversas que Formam",
        description:
          "Painéis, comunhão e momentos para processar o que Deus está falando.",
        tag: "Painel",
      },
      {
        time: "19h00",
        title: "Noite de Conferência",
        description:
          "A sessão central da conferência. Uma experiência que aponta para rendição total.",
        tag: "Sessão principal",
      },
    ],
  },
  {
    label: "Dia III",
    date: "Domingo",
    theme: "O Envio",
    items: [
      {
        time: "10h00",
        title: "Envio",
        description:
          "Não uma despedida. Um começo. A última sessão que inaugura uma nova caminhada.",
        tag: "Sessão final",
      },
    ],
  },
];

export function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="schedule__bg" aria-hidden="true" />

      <div className="schedule__container">
        <div className="schedule__header">
          <motion.span
            className="schedule__label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Programação
          </motion.span>

          <motion.h2
            className="schedule__title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.1}
          >
            Uma jornada
            <br />
            <span>em três dias.</span>
          </motion.h2>

          <motion.p
            className="schedule__intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.2}
          >
            Cada sessão foi pensada para conduzir uma resposta:
            <br className="schedule__br" />
            ouvir, permanecer e ser enviado.
          </motion.p>
        </div>

        <div className="schedule__days">
          {days.map((day, dayIndex) => (
            <motion.div
              className="schedule-day"
              key={day.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={dayIndex * 0.08}
            >
              <div className="schedule-day__head">
                <div className="schedule-day__meta">
                  <span className="schedule-day__label">{day.label}</span>

                  <span className="schedule-day__date">{day.date}</span>
                </div>

                <h3 className="schedule-day__theme">{day.theme}</h3>
              </div>

              <ol className="schedule-day__items" role="list">
                {day.items.map((item, itemIndex) => (
                  <motion.li
                    className="schedule-item"
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    custom={itemIndex * 0.07 + dayIndex * 0.04}
                  >
                    <div className="schedule-item__time">{item.time}</div>

                    <div className="schedule-item__content">
                      <div className="schedule-item__row">
                        <h4 className="schedule-item__title">{item.title}</h4>

                        <span className="schedule-item__tag">{item.tag}</span>
                      </div>

                      <p className="schedule-item__description">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="schedule__footer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.15}
        >
          <span className="schedule__note">Programação sujeita a ajustes.</span>

          <a href="#inscricao" className="schedule__cta">
            <span>Reservar presença</span>

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

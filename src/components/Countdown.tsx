import { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const EVENT_DATE = new Date("2026-07-25T20:00:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const distance = Math.max(0, EVENT_DATE - now);
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

/* ── Single rolling digit ─────────────────── */

interface DigitProps {
  value: number; // 0–9
}

function Digit({ value }: DigitProps) {
  const prevValue = useRef(value);
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState(value);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (value === prevValue.current) return;

    setPrevious(prevValue.current);
    setCurrent(value);
    setRolling(true);

    prevValue.current = value;

    const t = setTimeout(() => setRolling(false), 520);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <span className="cd-digit" aria-hidden="true">
      {/* outgoing digit rolls up and fades */}
      <span
        className={`cd-digit__face cd-digit__face--out${rolling ? " is-rolling" : ""}`}
      >
        {previous}
      </span>
      {/* incoming digit rolls in from below */}
      <span
        className={`cd-digit__face cd-digit__face--in${rolling ? " is-rolling" : ""}`}
      >
        {current}
      </span>
    </span>
  );
}

/* ── Two-digit display (tens + units) ────── */

interface TwoDigitProps {
  value: number; // 0–99
}

function TwoDigit({ value }: TwoDigitProps) {
  const tens = Math.floor(value / 10);
  const units = value % 10;

  return (
    <strong className="cd-number" aria-hidden="true">
      <Digit value={tens} />
      <Digit value={units} />
    </strong>
  );
}

/* ── Main Countdown ───────────────────────── */

const UNITS = [
  { key: "days" as const, label: "Dias" },
  { key: "hours" as const, label: "Horas" },
  { key: "minutes" as const, label: "Minutos" },
  { key: "seconds" as const, label: "Segundos" },
];

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section
      className="countdown"
      id="countdown"
      aria-label="Contagem regressiva para o evento"
    >
      <div className="countdown__ambient" aria-hidden="true" />
      <div className="countdown__watermark" aria-hidden="true">
        2026
      </div>

      <div className="countdown__container">
        {/* ── Header ── */}
        <header className="countdown__header">
          <p className="countdown__eyebrow">
            <span className="countdown__eyebrow-line" aria-hidden="true" />A
            contagem já começou
          </p>
          <h2 className="countdown__title">
            O encontro
            <br />
            <em>se aproxima.</em>
          </h2>
          <p className="countdown__subtitle">
            Cada dia nos aproxima de algo que pode marcar uma geração.
          </p>
        </header>

        {/* ── Divider ── */}
        <div className="countdown__divider" aria-hidden="true">
          <span />
          <span className="countdown__divider-dot" />
          <span />
        </div>

        {/* ── Grid ── */}
        <div
          className="countdown__grid"
          role="timer"
          aria-live="off"
          aria-label={`${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos restantes`}
        >
          {UNITS.map(({ key, label }) => (
            <div className="countdown__cell" key={key}>
              <TwoDigit value={timeLeft[key]} />
              <span className="countdown__label">{label}</span>
              {/* accessible text for screen readers */}
              <span className="sr-only">
                {timeLeft[key]} {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <footer className="countdown__footer">
          <p className="countdown__location">
            <span className="countdown__location-icon" aria-hidden="true">
              ○
            </span>
            25 Julho&nbsp;&nbsp;·&nbsp;&nbsp;Legacy Alphaville
          </p>
          <a
            href="#inscricao"
            className="countdown__cta"
            aria-label="Reservar presença no evento"
          >
            <span className="countdown__cta-text">Reservar presença</span>
            <span className="countdown__cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </footer>
      </div>
    </section>
  );
}

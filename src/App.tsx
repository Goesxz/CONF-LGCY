import "./index.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Memories } from "./components/Memories";
import { Speakers } from "./components/Speakers";
import { Schedule } from "./components/Schedule";
import { Testimonials } from "./components/Testimonials";
import { Volunteers } from "./components/Volunteers";
import { FAQ } from "./components/FAQ";
import { Registration } from "./components/Registration";
import { Countdown } from "./components/Countdown";
import { Scenes } from "./components/Scenes";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="app">
      <div className="site-orbs" />
      <div className="site-noise" />
      <div className="site-vignette" />

      <Navbar />
      <Hero />
      <Countdown />
      <Manifesto />
      <Memories />
      <Scenes />
      <Speakers />
      <Schedule />
      <Testimonials />
      <Volunteers />
      <FAQ />
      <Registration />
      <Footer />
    </main>
  );
}

export default App;

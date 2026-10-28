
"use client";

import { useLayoutEffect } from "react";

import { GlobalStyle } from "../components/Shared";
import IntroSequence from "../components/IntroSequence";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import EngineeringSection from "../components/EngineeringSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CreativeSection from "../components/CreativeSection";
import PrinciplesSection from "../components/PrinciplesSection";
import ContactSection from "../components/ContactSection";
import EndCredits from "../components/EndCredits";

export default function Home() {
  useLayoutEffect(() => {
    // Prevent the browser from restoring an old scroll position.
    window.history.scrollRestoration = "manual";

    // Remove a saved section hash, such as #about, on page load.
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search
      );
    }

    // Always start at the beginning of the portfolio.
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyle />

      {/* Keep the navbar visible throughout the portfolio */}
      <Navbar />

      {/* Intro title sequence */}
      <div id="top" className="portfolio-intro-wrapper">
        <IntroSequence onComplete={() => {}} />
      </div>

      {/* Main portfolio sections */}
      <main>
        <AboutSection />
        <EngineeringSection />
        <ProjectsSection />
        <ExperienceSection />
        <CreativeSection />
        <PrinciplesSection />
        <ContactSection />
        <EndCredits />
      </main>
    </>
  );
}

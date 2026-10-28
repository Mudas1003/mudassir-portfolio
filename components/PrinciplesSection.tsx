
"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

/* =========================================================
   SKILLS DATA
   ========================================================= */

type Skill = {
  number: string;
  title: string;
  description: string;
  tools: string[];
  symbol: string;
  accent: "orange" | "yellow" | "blue" | "green";
};

const SKILLS: Skill[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive web interfaces and transforming UI designs into clean, reusable frontend applications.",
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
    symbol: "</>",
    accent: "orange",
  },
  {
    number: "02",
    title: "AI Agent Development",
    description:
      "Creating AI-powered experiences and intelligent recommendation workflows with generative AI and language models.",
    tools: [
      "Python",
      "AI Agents",
      "GenAI",
      "Prompt Engineering",
      "LLM Workflows",
      "NLP",
    ],
    symbol: "✳",
    accent: "blue",
  },
  {
    number: "03",
    title: "UI / UX Design",
    description:
      "Turning concepts into considered layouts, visual systems and interactive interfaces designed around the user.",
    tools: [
      "Figma",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
    ],
    symbol: "◫",
    accent: "yellow",
  },
  {
    number: "04",
    title: "Motion, 3D & Visual Design",
    description:
      "Combining movement, depth and visual composition to give digital experiences a distinctive identity.",
    tools: [
      "Framer",
      "Framer Motion",
      "Spline",
      "Adobe Illustrator",
      "CSS Animation",
    ],
    symbol: "◇",
    accent: "green",
  },
  {
    number: "05",
    title: "Development Tools & Deployment",
    description:
      "Using source control, cloud services and deployment platforms to support frontend projects.",
    tools: [
      "Git",
      "GitHub",
      "Firebase",
      "WordPress",
      "Netlify",
      "Vercel",
    ],
    symbol: "⌘",
    accent: "orange",
  },
  {
    number: "06",
    title: "Engineering Practices",
    description:
      "Applying structured development practices, programming fundamentals and problem-solving to real-world software.",
    tools: [
      "Agile Methodologies",
      "SDLC",
      "JavaScript",
      "Python",
      "C",
    ],
    symbol: "↗",
    accent: "yellow",
  },
];

/* =========================================================
   ANIMATION
   ========================================================= */

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* =========================================================
   SECTION
   ========================================================= */

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding: clamp(65px, 8vw, 105px) 0 85px;

  background: #050505;
  color: #f4f1e8;

  --paper: #f4f1e8;
  --orange: #f34d2b;
  --yellow: #f6e84e;
  --line: rgba(244, 241, 232, 0.16);

  * {
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

const Container = styled.div`
  width: min(1360px, 94%);
  margin: 0 auto;
`;

/* =========================================================
   HERO PANEL
   ========================================================= */

const HeroPanel = styled.div`
  position: relative;
  isolation: isolate;

  min-height: 650px;
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;

  background:
    radial-gradient(
      ellipse at 50% 78%,
      rgba(38, 57, 86, 0.22),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      #080808 0%,
      #030303 100%
    );

  box-shadow:
    0 30px 90px rgba(0, 0, 0, 0.32),
    inset 0 1px rgba(255, 255, 255, 0.035);

  @media (max-width: 700px) {
    min-height: 570px;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    min-height: 530px;
  }
`;

/* =========================================================
   BRAND BAR
   ========================================================= */

const Brandline = styled.div`
  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  padding: 22px 26px;

  color: #a5a199;

  font: 9px "DM Mono", monospace;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--paper);
    font-weight: 700;
  }

  .monogram {
    display: grid;
    place-items: center;

    width: 29px;
    height: 29px;

    border-radius: 9px;
    background: var(--orange);
    color: #080808;

    font: 900 11px "Manrope", sans-serif;
    letter-spacing: -0.07em;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .status::before {
    content: "";

    width: 6px;
    height: 6px;

    border-radius: 50%;
    background: var(--orange);
    box-shadow: 0 0 12px rgba(243, 77, 43, 0.55);
  }

  @media (max-width: 480px) {
    padding: 17px 14px;
    font-size: 7px;
  }
`;

/* =========================================================
   CENTERED HEADING AND BUTTON
   ========================================================= */

const HeroCopy = styled.div`
  position: relative;
  z-index: 5;

  padding: 30px 20px 0;
  text-align: center;

  .eyebrow {
    margin: 0 0 17px;

    color: var(--orange);

    font: 9px "DM Mono", monospace;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;

    color: var(--paper);

    font-family: "Manrope", sans-serif;
    font-size: clamp(39px, 5.5vw, 69px);
    font-weight: 800;
    line-height: 0.98;
    letter-spacing: -0.075em;
  }

  h2 span {
    display: block;
    color: var(--orange);
  }

  .description {
    max-width: 545px;
    margin: 18px auto 0;

    color: #b7b1a8;
    font-size: 13px;
    line-height: 1.85;
  }

  .actions {
    display: flex;
    justify-content: center;
    margin-top: 21px;
  }

  .action {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 36px;
    padding: 0 19px;

    border: 1px solid var(--paper);
    border-radius: 999px;

    background: var(--paper);
    color: #080808;

    font: 9px "DM Mono", monospace;
    text-decoration: none;
    text-transform: uppercase;

    transition:
      background 200ms ease,
      border-color 200ms ease,
      color 200ms ease;
  }

  .action:hover {
    border-color: var(--orange);
    background: var(--orange);
    color: #080808;
  }

  @media (max-width: 600px) {
    padding-top: 24px;

    h2 {
      font-size: clamp(38px, 9vw, 53px);
    }

    .description {
      max-width: 360px;
      font-size: 12px;
    }
  }
`;

/* =========================================================
   GENERATED ORBS IMAGE
   All the marbles and logos now come from one image.
   ========================================================= */

const SphereStage = styled.div`
  position: absolute;
  z-index: 1;

  left: 0px;
  right: 0;
  bottom: -100px;

  height: clamp(340px, 34vw, 450px);
  overflow: hidden;

  pointer-events: none;

  background: radial-gradient(
    ellipse at 50% 85%,
    rgba(45, 67, 91, 0.14),
    transparent 65%
  );

  .orbs-image {
    position: absolute;

    left: 50%;
    bottom: 0;

    display: block;

    width: min(150%, 1410px);
    height: auto;
    max-width: none;

    transform: translateX(-50%);

    object-fit: contain;
    object-position: center bottom;

    user-select: none;
    -webkit-user-drag: none;
  }

  @media (max-width: 700px) {
    height: 335px;

    .orbs-image {
      width: 130%;
    }
  }

  @media (max-width: 480px) {
    height: 285px;

    .orbs-image {
      width: 155%;
    }
  }
`;

/* =========================================================
   SKILL CARDS
   ========================================================= */

const SkillGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;

  margin-top: 28px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const SkillCard = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 280px;
  padding: 21px 20px 17px;

  overflow: hidden;

  border: 1px solid #343431;
  border-radius: 3px;

  background: #10100f;
  color: var(--paper);

  animation: ${appear} 450ms ease both;

  transition:
    transform 220ms ease,
    border-color 220ms ease,
    background 220ms ease;

  .topline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    width: 100%;
    margin-bottom: 26px;

    color: #8d8981;

    font: 8px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .number {
    color: var(--card-accent);
  }

  .symbol {
    position: absolute;
    top: 38px;
    right: 16px;

    color: rgba(244, 241, 232, 0.075);

    font-family: "Manrope", sans-serif;
    font-size: 75px;
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.1em;

    pointer-events: none;
    user-select: none;
  }

  h3 {
    position: relative;
    z-index: 1;

    max-width: 270px;
    margin: 0 0 12px;

    color: var(--paper);

    font-family: "Manrope", sans-serif;
    font-size: clamp(21px, 2vw, 27px);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.065em;
  }

  .description {
    position: relative;
    z-index: 1;

    max-width: 370px;
    margin: 0;

    color: #aaa69d;
    font-size: 11px;
    line-height: 1.85;
  }

  .tools {
    position: relative;
    z-index: 1;

    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    margin-top: auto;
    padding-top: 23px;
  }

  .tool {
    padding: 6px 8px;

    border: 1px solid #353530;
    border-radius: 2px;

    background: #171715;
    color: #d3cfc6;

    font: 7px "DM Mono", monospace;
  }

  .bottomline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    width: 100%;
    margin-top: 19px;
    padding-top: 12px;

    border-top: 1px solid #30302d;

    color: #77736b;

    font: 7px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .arrow {
    color: var(--card-accent);
    font-size: 14px;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--card-accent);
    background: #141413;
  }

  @media (max-width: 540px) {
    min-height: 245px;
    padding: 19px 17px 16px;

    h3 {
      font-size: 24px;
    }
  }
`;

/* =========================================================
   FOOTER
   ========================================================= */

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  margin-top: 20px;
  padding-top: 15px;

  border-top: 1px solid var(--line);

  color: #807c74;

  font: 8px "DM Mono", monospace;
  letter-spacing: 0.1em;
  line-height: 1.7;
  text-transform: uppercase;

  .accent {
    color: var(--orange);
  }

  @media (max-width: 500px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
`;

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function PrinciplesSection() {
  return (
    <Section id="principles">
      <Container>
        <HeroPanel>
          <Brandline>
            <span className="brand">
              <span className="monogram">MI.</span>
              Digital Toolkit
            </span>

            <span className="status">
              Software · Design · Creative
            </span>
          </Brandline>

          <HeroCopy>
            <p className="eyebrow">Skills &amp; software</p>

            <h2>
              Tools for building.
              <span>Ideas worth building.</span>
            </h2>

            <p className="description">
              A connected toolkit for designing and building
              thoughtful digital experiences — from frontend
              engineering and AI to visual design, motion and
              storytelling.
            </p>

            <div className="actions">
              <a className="action" href="#skills">
                Explore My Skills ↗
              </a>
            </div>
          </HeroCopy>

          <SphereStage aria-label="Software and design tool logos">
            <img
              className="orbs-image"
              src="/images/skills-orbs.png"
              alt="Glossy spheres displaying software and design tool logos"
              draggable={false}
              loading="eager"
            />
          </SphereStage>
        </HeroPanel>

        <Footer>
          <span>
            <span className="accent">MI.</span> Skills &amp; practice
          </span>

          <span>
            Development · AI · Design · Creative
          </span>
        </Footer>

        <SkillGrid id="skills">
          {SKILLS.map((skill, index) => {
            const accent =
              skill.accent === "orange"
                ? "#f34d2b"
                : skill.accent === "yellow"
                  ? "#f6e84e"
                  : skill.accent === "blue"
                    ? "#62c7ee"
                    : "#83d4a4";

            return (
              <SkillCard
                key={skill.number}
                style={
                  {
                    "--card-accent": accent,
                    animationDelay: `${index * 55}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="topline">
                  <span className="number">
                    {skill.number} / 06
                  </span>

                  <span>Area of practice</span>
                </div>

                <span className="symbol" aria-hidden="true">
                  {skill.symbol}
                </span>

                <h3>{skill.title}</h3>

                <p className="description">
                  {skill.description}
                </p>

                <div className="tools">
                  {skill.tools.map((tool) => (
                    <span className="tool" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="bottomline">
                  <span>Selected capabilities</span>
                  <span className="arrow">↗</span>
                </div>
              </SkillCard>
            );
          })}
        </SkillGrid>

        <Footer>
          <span>
            <span className="accent">MI.</span> A growing practice
          </span>

          <span>Six skill areas · Always learning</span>
        </Footer>
      </Container>
    </Section>
  );
}

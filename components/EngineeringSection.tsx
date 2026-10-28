
"use client";

import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: clamp(85px, 11vw, 150px) 4.5vw;
  background: var(--cream);
  color: var(--black);
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0 0 10px;
  font: 500 10px "DM Mono", monospace;
  letter-spacing: 0.13em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: var(--orange);
    flex-shrink: 0;
  }
`;

const SectionTitle = styled.h2`
  max-width: 1050px;
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-size: clamp(48px, 8vw, 106px);
  line-height: 0.95;
  letter-spacing: -0.075em;
  font-weight: 700;

  .orange {
    color: var(--orange);
  }

  .yellow {
    color: var(--yellow);
  }
`;

const SectionNumber = styled.span`
  position: absolute;
  top: 50%;
  right: 4.5vw;
  transform: translateY(-50%);
  color: #6f6b64;
  font: 10px "DM Mono", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (max-width: 650px) {
    position: static;
    display: block;
    transform: none;
    margin-top: 22px;
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8vw;
  align-items: start;
  margin-top: 75px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 35px;
    margin-top: 45px;
  }
`;

const BodyCopy = styled.div`
  font-size: clamp(15px, 1.3vw, 18px);
  line-height: 1.9;
  color: #68655f;

  p {
    margin: 0 0 18px;
  }

  .lead {
    color: var(--black);
    font-size: clamp(24px, 3vw, 34px);
    line-height: 1.4;
    letter-spacing: -0.04em;
  }
`;

/* =====================================================
   POSTER CUSTOMIZATION

   Change these four values to position and size your image:

   --poster-width:     makes the poster larger or smaller
   --poster-offset-x:  moves it left or right
   --poster-offset-y:  moves it up or down
   --poster-rotation:  rotates the poster

   Positive X = right
   Negative X = left
   Positive Y = down
   Negative Y = up
   ===================================================== */

const PosterColumn = styled.div`
  /* EDIT THESE VALUES */
  --poster-width: 540px;
  --poster-offset-x: 0px;
  --poster-offset-y: -400px;
  --poster-rotation: 2deg;

  width: 100%;
  min-width: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  .poster {
    display: block;
    width: var(--poster-width);
    max-width: 100%;
    height: auto;
    object-fit: contain;

    transform: translate(
      var(--poster-offset-x),
      var(--poster-offset-y)
    ) rotate(var(--poster-rotation));

    transform-origin: center top;

    border: 1px solid rgba(16, 16, 16, 0.16);
    box-shadow: 12px 14px 0 rgba(16, 16, 16, 0.07);

    transition: box-shadow 250ms ease;
  }

  .poster:hover {
    box-shadow: 16px 18px 0 rgba(16, 16, 16, 0.1);
  }

  @media (max-width: 760px) {
    justify-content: flex-start;

    .poster {
      width: min(var(--poster-width), 100%);
    }
  }
`;

const PracticeList = styled.div`
  margin-top: -250px;
  border-top: 1px solid var(--line);

  a {
    display: grid;
    grid-template-columns: 70px 1fr 35px;
    gap: 20px;
    align-items: center;
    padding: 26px 0;
    border-bottom: 1px solid var(--line);
    transition: padding 0.3s ease;
  }

  a:hover {
    padding-left: 12px;
    padding-right: 12px;
  }

  .number {
    font: 10px "DM Mono", monospace;
    color: #817c73;
  }

  h3 {
    margin: 0 0 8px;
    font-family: "Manrope", sans-serif;
    font-size: clamp(25px, 4vw, 52px);
    line-height: 1.1;
    letter-spacing: -0.05em;
  }

  p {
    margin: 0;
    color: #6f6b64;
    font-size: 14px;
  }

  .symbol {
    color: var(--orange);
    font-size: 23px;
    text-align: right;
  }

  @media (max-width: 600px) {
    a {
      grid-template-columns: 28px 1fr 20px;
      gap: 10px;
    }
  }
`;

export default function EngineeringSection() {
  return (
    <Section id="engineering">
      <Eyebrow>The core practice</Eyebrow>

      <SectionTitle>
        Make it work.
        <br />
        Make it matter.
      </SectionTitle>

      <SectionNumber>02 / What I bring</SectionNumber>

      <TwoColumn>
        <BodyCopy>
          <p>
            My technical profile belongs at the front of the story. The
            disciplines around it make the work more considered, not less
            focused.
          </p>

          <p>
            I work with React, Next.js, JavaScript, TypeScript and modern
            frontend tools to build clear, responsive interfaces.
          </p>
        </BodyCopy>

        <PosterColumn>
          <img
            className="poster"
            src="/images/who-i-am.png"
            alt="A childhood photograph of Mudassir in a vintage introduction poster"
          />
        </PosterColumn>
      </TwoColumn>

      <PracticeList>
        <a href="#work">
          <span className="number">01</span>

          <div>
            <h3>Software engineering</h3>
            <p>Building thoughtful, useful digital experiences.</p>
          </div>

          <span className="symbol">⌘</span>
        </a>

        <a href="#creative">
          <span className="number">02</span>

          <div>
            <h3>Designing</h3>
            <p>Making complex things feel clear and human.</p>
          </div>

          <span className="symbol">◇</span>
        </a>

        <a href="#creative">
          <span className="number">03</span>

          <div>
            <h3>Creative direction</h3>
            <p>A point of view that brings the pieces together.</p>
          </div>

          <span className="symbol">↘</span>
        </a>
      </PracticeList>

      <p
        style={{
          marginTop: 25,
          font: "10px 'DM Mono', monospace",
          letterSpacing: ".08em",
          color: "#79746c",
        }}
      >
        TECHNOLOGIES: REACT · NEXT.JS · TYPESCRIPT · JAVASCRIPT · CSS ·
        TAILWIND · FIGMA · GIT
      </p>
    </Section>
  );
}

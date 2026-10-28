
"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

/* =====================================================
   EXPERIENCE SECTION
   All text is editable React content.
   The train image is used as the full-section background.
   ===================================================== */

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  width: 100%;
  min-height: max(100svh, 760px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: clamp(30px, 5.2vw, 78px) 5.4vw 30px;

  background: #061312;
  color: #f4f0e2;

  --cream: #f4f0e2;
  --orange: #f34d2b;
  --muted: #c1b9a7;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 650px) {
    min-height: 760px;
    padding: 30px 6vw 24px;
  }
`;

/* Background image fills the entire section. */

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -3;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center center;

  pointer-events: none;
  user-select: none;

  @media (max-width: 650px) {
    /*
     * Keep the image centred on mobile. Since the train
     * artwork is wide, the edges will be cropped on small
     * screens rather than squeezing the train.
     */
    object-position: 50% center;
  }
`;

/* Subtle gradients keep the editable text legible. */

const ImageOverlay = styled.div`
  position: absolute;
  z-index: -2;
  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(3, 12, 12, 0.22) 0%,
      rgba(3, 12, 12, 0.06) 23%,
      transparent 43%,
      rgba(3, 12, 12, 0.04) 78%,
      rgba(3, 12, 12, 0.34) 100%
    ),
    linear-gradient(
      90deg,
      rgba(3, 12, 12, 0.12),
      transparent 62%
    );

  pointer-events: none;
`;

/* =====================================================
   TOP HEADER
   ===================================================== */

const Header = styled.header`
  position: relative;
  z-index: 2;

  width: 100%;
  animation: ${reveal} 800ms ease both;

  .announcement {
    display: flex;
    align-items: center;
    gap: 11px;

    width: fit-content;
    margin: 0 0 17px;

    color: #c3bdad;

    font-family: "DM Mono", monospace;
    font-size: clamp(8px, 0.75vw, 11px);
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .announcement-line {
    width: 28px;
    height: 2px;
    background: var(--orange);
  }

  h2 {
  max-width: 850px;
  margin: 0;

  color: var(--cream);
  font-family: "Manrope", sans-serif;
  font-size: clamp(44px, 6.5vw, 88px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.085em;
}

  .heading-line {
    display: block;
  }

  .heading-accent {
    margin-top: 5px;
    color: var(--orange);
  }

  .announcement-message {
    margin: 19px 0 0;

    color: #eee7d8;

    font-family: "DM Mono", monospace;
    font-size: clamp(9px, 0.95vw, 13px);
    font-weight: 500;
    line-height: 1.7;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (min-width: 1000px) {
    h2 {
      max-width: 760px;
    }
  }

  @media (max-width: 650px) {
    .announcement {
      gap: 8px;
      margin-bottom: 15px;
      font-size: 8px;
    }

    .announcement-line {
      width: 19px;
    }

    h2 {
  font-size: clamp(38px, 10vw, 60px);
}

    .announcement-message {
  display: inline-block;
  width: fit-content;
  max-width: 100%;
  margin: 19px 0 0;
  padding: 10px 14px;

  color: #ffffff;
  background: rgba(3, 12, 12, 0.78);
  border-left: 3px solid var(--orange);
  border-radius: 2px;

  font-family: "DM Mono", monospace;
  font-size: clamp(9px, 0.95vw, 13px);
  font-weight: 600;
  line-height: 1.7;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
}
  }
`;

/* =====================================================
   PLATFORM SIGN
   ===================================================== */

const PlatformBoard = styled.div`
  position: absolute;
  z-index: 3;

  top: clamp(32px, 5.5vw, 82px);
  right: 5.4vw;

  min-width: 150px;

  text-align: right;
  text-transform: uppercase;

  strong {
    display: block;

    color: var(--cream);

    font-family: "DM Mono", monospace;
    font-size: clamp(10px, 1vw, 14px);
    font-weight: 700;
    letter-spacing: 0.12em;
  }

  small {
    display: block;
    margin-top: 8px;

    color: #c6bfaf;

    font-family: "DM Mono", monospace;
    font-size: 8px;
    letter-spacing: 0.09em;
    line-height: 1.7;
  }

  .platform-underline {
    width: 35px;
    height: 2px;
    margin: 13px 0 0 auto;

    background: var(--orange);
  }

  @media (max-width: 650px) {
    position: relative;
    top: auto;
    right: auto;

    min-width: 0;
    margin-top: 22px;

    text-align: left;

    .platform-underline {
      margin-left: 0;
    }
  }
`;

/* =====================================================
   BOTTOM FOOTER
   ===================================================== */

const Footer = styled.footer`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  width: 100%;
  margin-top: auto;
  padding-top: 17px;

  border-top: 1px solid rgba(238, 231, 216, 0.28);

  color: #c6bfaf;

  font-family: "DM Mono", monospace;
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.12em;
  line-height: 1.7;
  text-transform: uppercase;

  .footer-accent {
  color: #ffffff;
  text-align: right;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
}

  @media (max-width: 650px) {
    gap: 12px;
    font-size: 7px;

    span:first-child {
      max-width: 62%;
    }
  }
`;

/* =====================================================
   COMPONENT
   ===================================================== */

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <BackgroundImage
        src="/images/experience/experience-train.png"
        alt=""
        aria-hidden="true"
        draggable={false}
      />

      <ImageOverlay aria-hidden="true" />

      <Header>
        <p className="announcement">
          <span className="announcement-line" />
          GAADI NUMBER 86709
        </p>

        <h2>
          <span className="heading-line">
            Experience &amp;
          </span>

          <span className="heading-line heading-accent">
            Leadership.
          </span>
        </h2>

        <p className="announcement-message">
          Express platform 5 par aa rahi hai.
        </p>
      </Header>

      <PlatformBoard>
        <strong>Platform 05</strong>

        <small>
          Journey so far
          <br />
          All aboard
        </small>

        <div className="platform-underline" />
      </PlatformBoard>

      <Footer>
        <span>
          The path so far · Experience &amp; Leadership
        </span>

        <span className="footer-accent">
          Every stop shaped the journey ↗
        </span>
      </Footer>
    </Section>
  );
}

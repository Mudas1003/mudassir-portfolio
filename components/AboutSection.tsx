
"use client";

import styled from "styled-components";

const About = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 100vh;
  padding: 95px 5vw 70px;
  background: #101010;
  color: #f4f1e8;

  --orange: #f34d2b;

  * {
    box-sizing: border-box;
  }

  .vortex-artwork {
    position: absolute;
    z-index: 0;
    top: 0;
    right: -10%;
    bottom: 0;
    width: 83%;
    pointer-events: none;
    background-image:
      linear-gradient(
        90deg,
        #101010 0%,
        rgba(16, 16, 16, 0.96) 8%,
        rgba(16, 16, 16, 0.72) 23%,
        rgba(16, 16, 16, 0.12) 48%,
        transparent 75%
      ),
      linear-gradient(
        0deg,
        #101010 0%,
        transparent 15%,
        transparent 85%,
        #101010 100%
      ),
      url("/images/film-vortex.png");
    background-size: cover, cover, cover;
    background-position: center, center, center;
    background-repeat: no-repeat;
    opacity: 0.95;
  }

  .about-topline,
  .about-heading,
  .about-content,
  .about-bottom {
    position: relative;
    z-index: 1;
  }

  .about-topline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 36px;
    color: #aaa69d;
    font: 10px "DM Mono", monospace;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .eyebrow::before {
    content: "";
    width: 24px;
    height: 2px;
    background: var(--orange);
  }

  .about-heading {
    max-width: 1000px;
    margin: 0;
    font-family: "Manrope", sans-serif;
    font-size: clamp(54px, 8.8vw, 118px);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.085em;
  }

  .about-heading span {
    display: block;
  }

  .about-content {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
    gap: clamp(35px, 5vw, 75px);
    align-items: start;
    margin-top: 76px;
  }

  .about-copy {
    max-width: 590px;
    padding: 0;
  }

  .monogram {
    margin: 0 0 34px;
    color: var(--orange);
    font-family: "Manrope", sans-serif;
    font-size: clamp(95px, 12vw, 158px);
    font-weight: 800;
    line-height: 0.85;
    letter-spacing: -0.105em;
  }

  .copy-label {
    margin: 0 0 20px;
    color: var(--orange);
    font: 10px "DM Mono", monospace;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .lead {
    max-width: 520px;
    margin: 0 0 26px;
    color: #f4f1e8;
    font-family: "Manrope", sans-serif;
    font-size: clamp(25px, 3vw, 38px);
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.055em;
    text-shadow: 0 2px 18px #101010;
  }

  .body-copy {
    margin: 0 0 18px;
    color: #d0cbc2;
    font-size: clamp(14px, 1.15vw, 16px);
    line-height: 1.95;
    text-shadow: 0 2px 14px #101010;
  }

  .about-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin-top: 30px;
  }

  .about-tags span {
    padding: 10px 13px;
    border: 1px solid #514a41;
    border-radius: 100px;
    background: rgba(16, 16, 16, 0.82);
    color: #e0d9ce;
    font: 9px "DM Mono", monospace;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* Keeps the right side open so the artwork can breathe */
  .gallery-space {
    min-height: clamp(440px, 43vw, 650px);
  }

  .about-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: 45px;
    padding-top: 20px;
    border-top: 1px solid rgba(244, 241, 232, 0.2);
    color: #aaa69d;
    font: 9px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .about-bottom strong {
    color: #f4f1e8;
    font-weight: 500;
  }

  .about-bottom span:last-child {
    text-align: right;
  }

  @media (min-width: 1200px) {
    .vortex-artwork {
      right: -6%;
      width: 78%;
      background-position: center, center, 55% center;
    }
  }

  @media (max-width: 850px) {
    padding: 85px 6vw 65px;

    .vortex-artwork {
      top: 25%;
      right: -25%;
      bottom: 5%;
      width: 125%;
      opacity: 0.65;
      background-image:
        linear-gradient(
          180deg,
          #101010 0%,
          rgba(16, 16, 16, 0.55) 22%,
          rgba(16, 16, 16, 0.08) 55%,
          #101010 100%
        ),
        url("/images/film-vortex.png");
      background-size: cover, cover;
      background-position: center, center;
    }

    .about-heading {
      font-size: clamp(54px, 11vw, 90px);
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: 30px;
      margin-top: 55px;
    }

    .about-copy {
      max-width: 650px;
    }

    .monogram {
      font-size: clamp(95px, 17vw, 145px);
    }

    .gallery-space {
      min-height: 400px;
    }
  }

  @media (max-width: 560px) {
    padding: 75px 5vw 55px;

    .about-topline {
      font-size: 8px;
    }

    .about-heading {
      font-size: clamp(49px, 12vw, 70px);
    }

    .monogram {
      font-size: 108px;
    }

    .lead {
      font-size: 27px;
    }

    .vortex-artwork {
      top: 34%;
      right: -45%;
      bottom: 8%;
      width: 150%;
      opacity: 0.52;
    }

    .gallery-space {
      min-height: 300px;
    }

    .about-bottom {
      align-items: flex-start;
      font-size: 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vortex-artwork {
      scroll-behavior: auto;
    }
  }
`;

export default function AboutSection() {
  return (
    <About id="about">
      <div className="vortex-artwork" aria-hidden="true" />

      <div className="about-topline">
        <span className="eyebrow">A little context</span>
        <span>01 / The approach</span>
      </div>

      <h2 className="about-heading">
        <span>One person.</span>
        <span>Many lenses.</span>
      </h2>

      <div className="about-content">
        <div className="about-copy">
          <h3 className="monogram">MI.</h3>

          <p className="copy-label">The person behind the work</p>

          <p className="lead">
            Software is the main craft. Curiosity is the connective tissue.
          </p>

          <p className="body-copy">
            I care about how a product works, how it feels, and what it says
            without saying a word. Engineering is where I make ideas real;
            design and storytelling help me ask better questions along the way.
          </p>

          <p className="body-copy">
            I bring together frontend development, thoughtful interfaces and
            creative direction to make digital experiences feel considered,
            useful and human.
          </p>

          <div className="about-tags">
            <span>Frontend engineering</span>
            <span>Interface design</span>
            <span>Film & storytelling</span>
          </div>
        </div>

        <div className="gallery-space" aria-hidden="true" />
      </div>

      <div className="about-bottom">
        <span>
          <strong>Mudassir Imam</strong> · Independent mind
        </span>
        <span>Different disciplines. One point of view.</span>
      </div>
    </About>
  );
}

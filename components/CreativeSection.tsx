
"use client";

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

/* =========================================================
   1. YOUR CREATIVE WORK
   Images live in public/images/creative/
   ========================================================= */

type CreativeItem = {
  image: string;
  title: string;
  category: string;
  description: string;
};

const CREATIVE_WORK: CreativeItem[] = [
  {
    image: "/images/creative/8.jpeg",
    title: "DAFFODIL - A Film",
    category: "FILMMAKING",
    description:
      "A psychological short film exploring obsession, attraction and the unsettling side of desire.",
  },
  {
    image: "/images/creative/9.png",
    title: "WBT - A Series",
    category: "SERIES / DIRECTION",
    description:
      "Mythological women, timeless conflicts and stories that deserve to be heard again.",
  },
  {
    image: "/images/creative/2.png",
    title: "Stories with a POV",
    category: "SCREENWRITING",
    description:
      "Original stories built around character, conflict, emotion and cinematic worlds.",
  },
  {
    image: "/images/creative/3.png",
    title: "Visual language",
    category: "GEN AI",
    description:
      "Visual experiments in composition, typography, colour and identity.",
  },
  {
    image: "/images/creative/4.png",
    title: "The bigger picture",
    category: "MARKETING",
    description:
      "Bringing visuals, narrative and ideas together into a coherent experience.",
  },
  {
    image: "/images/creative/5.png",
    title: "Graphic Designing",
    category: "GRAPHIC DESIGNING",
    description:
      "A visual playground of bold compositions, thoughtful design, and ideas brought to life through imagery and typography.",
  },
  {
    image: "/images/creative/6.png",
    title: "Poster Designing",
    category: "POSTER DESIGNING",
    description:
      "A character poster for Chhavi from DAFFODIL, designed to capture her identity, visual presence, and the mystery surrounding her character.",
  },
  {
    image: "/images/creative/7.png",
    title: "Frames in time",
    category: "PHOTOGRAPHY",
    description:
      "Moments, places and details collected through my own visual perspective.",
  },
];

/* =========================================================
   2. ANIMATIONS
   ========================================================= */

const drift = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

const enter = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/* =========================================================
   3. SECTION
   ========================================================= */

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(85px, 10vw, 145px) 0 95px;

  background: #000000;
  color: #f4f1e8;

  --creative-orange: #f34d2b;
  --creative-muted: #a9a59d;

  * {
    box-sizing: border-box;
  }
`;

const Header = styled.header`
  position: relative;
  z-index: 2;
  padding: 0 5vw;
  text-align: center;
`;

const Eyebrow = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 0 25px;

  color: var(--creative-muted);
  font: 500 10px "DM Mono", monospace;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: var(--creative-orange);
  }
`;

const Heading = styled.h2`
  width: 100%;
  margin: 0 auto;

  color: #f4f1e8;
  font-family: "Manrope", sans-serif;
  font-size: clamp(30px, 6.1vw, 88px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.075em;
  white-space: nowrap;

  @media (max-width: 560px) {
    font-size: clamp(25px, 6.5vw, 38px);
    letter-spacing: -0.065em;
  }
`;

const Intro = styled.p`
  max-width: 630px;
  margin: 28px auto 0;

  color: #b5b0a7;
  font-size: clamp(14px, 1.2vw, 17px);
  line-height: 1.9;
  text-align: center;
`;

const CarouselMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  margin: 80px 5vw 22px;

  color: var(--creative-muted);
  font: 9px "DM Mono", monospace;
  letter-spacing: 0.13em;
  text-transform: uppercase;

  .accent {
    color: var(--creative-orange);
  }

  @media (max-width: 600px) {
    margin: 55px 5vw 18px;
    font-size: 8px;
  }
`;

/* =========================================================
   4. CAROUSEL WINDOW
   The curved perspective is calculated from each card's
   actual position on screen, not a fixed card index.
   ========================================================= */

const CarouselWindow = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 48px 0 55px;

  perspective: 1400px;
  perspective-origin: 50% 45%;

  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );

  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );

  &:hover .carousel-track,
  &:focus-within .carousel-track {
    animation-play-state: paused;
  }

  @media (max-width: 600px) {
    padding: 35px 0 45px;
  }

  @media (prefers-reduced-motion: reduce) {
    -webkit-mask-image: none;
    mask-image: none;
  }
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 30px;
  padding: 10px 30px 15px;

  transform-style: preserve-3d;
  animation: ${drift} 55s linear infinite;
  will-change: transform;

  @media (max-width: 600px) {
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
    animation-duration: 42s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* =========================================================
   5. POSTER CARD
   No fixed rotations or diagonal tilts.
   Every card responds to its current screen position.
   ========================================================= */

const PosterButton = styled.button`
  position: relative;
  display: block;
  flex: 0 0 clamp(165px, 18vw, 245px);

  width: clamp(165px, 18vw, 245px);
  height: clamp(250px, 27vw, 340px);

  padding: 0;
  overflow: hidden;
  isolation: isolate;

  border: 1px solid rgba(244, 241, 232, 0.15);
  border-radius: 12px;
  background: #050505;
  color: #f4f1e8;

  text-align: left;
  cursor: pointer;

  transform-origin: center center;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  transform:
    perspective(1200px)
    translateY(var(--curve-y, 0px))
    rotateY(var(--curve-rotation, 0deg))
    scale(var(--curve-scale, 1));

  transition:
    border-color 300ms ease,
    box-shadow 300ms ease;

  &:hover {
    z-index: 5;
    border-color: rgba(244, 241, 232, 0.48);
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.65);
  }

  &:focus-visible {
    outline: 2px solid var(--creative-orange);
    outline-offset: 5px;
  }

  .poster-image {
    position: absolute;
    inset: 0;

    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    transition:
      transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  &:hover .poster-image {
    transform: scale(1.055);
  }

  .image-shade {
    position: absolute;
    inset: 0;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.02) 20%,
      rgba(0, 0, 0, 0.08) 42%,
      rgba(0, 0, 0, 0.82) 100%
    );

    pointer-events: none;
  }

  .card-category {
    position: absolute;
    top: 17px;
    left: 15px;
    right: 15px;

    font: 9px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.7);
  }

  .card-bottom {
    position: absolute;
    right: 16px;
    bottom: 18px;
    left: 16px;
  }

  .card-title {
    display: block;
    margin: 0;

    font-family: "Manrope", sans-serif;
    font-size: clamp(19px, 1.8vw, 26px);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.055em;
  }

  .card-action {
    display: inline-block;
    margin-top: 12px;

    color: rgba(244, 241, 232, 0.76);
    font: 9px "DM Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    flex-basis: 190px;
    width: 190px;
    height: 280px;
    border-radius: 10px;

    .card-title {
      font-size: 22px;
    }
  }
`;

const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  margin: 12px 5vw 0;
  padding-top: 22px;

  border-top: 1px solid rgba(244, 241, 232, 0.17);

  color: var(--creative-muted);
  font: 9px "DM Mono", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  .orange {
    color: var(--creative-orange);
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    font-size: 8px;
  }
`;

/* =========================================================
   6. CLICK-TO-ZOOM OVERLAY
   ========================================================= */

const Overlay = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 28px;
  overflow-y: auto;

  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(18px);

  animation: ${enter} 250ms ease both;

  @media (max-width: 600px) {
    padding: 18px;
    align-items: flex-start;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 24px;
  right: 28px;
  z-index: 3;

  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;

  border: 1px solid rgba(244, 241, 232, 0.3);
  border-radius: 50%;
  background: #111111;
  color: #f4f1e8;

  font-size: 25px;
  cursor: pointer;

  &:hover {
    background: var(--creative-orange);
    border-color: var(--creative-orange);
  }
`;

const ExpandedWork = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(250px, 0.75fr);
  align-items: center;
  gap: clamp(28px, 6vw, 85px);

  width: min(1050px, 100%);
  margin: auto;
  padding: 35px 0;

  .expanded-image-wrap {
    display: flex;
    justify-content: center;
    min-width: 0;
  }

  .expanded-image {
    display: block;
    width: auto;
    max-width: 100%;
    max-height: min(76vh, 820px);
    object-fit: contain;

    border: 1px solid rgba(244, 241, 232, 0.18);
    box-shadow: 0 25px 100px rgba(0, 0, 0, 0.5);
  }

  .expanded-category {
    color: var(--creative-orange);
    font: 10px "DM Mono", monospace;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h3 {
    margin: 18px 0;
    color: #f4f1e8;
    font-family: "Manrope", sans-serif;
    font-size: clamp(35px, 5vw, 65px);
    line-height: 0.98;
    letter-spacing: -0.065em;
  }

  .expanded-description {
    color: #b7b1a7;
    font-size: 15px;
    line-height: 1.9;
  }

  .expanded-number {
    display: block;
    margin-top: 35px;
    color: #777168;
    font: 10px "DM Mono", monospace;
    letter-spacing: 0.12em;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 35px 0;

    .expanded-image {
      max-height: 53vh;
    }

    .expanded-copy {
      max-width: 500px;
      margin: 0 auto;
    }

    h3 {
      font-size: 40px;
    }

    .expanded-number {
      margin-top: 18px;
    }
  }
`;

/* =========================================================
   7. CREATIVE SECTION
   ========================================================= */

export default function CreativeSection() {
  const [selected, setSelected] = useState<CreativeItem | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const repeatedWork = [...CREATIVE_WORK, ...CREATIVE_WORK];

  /*
   * Calculate every card's 3D angle from its real position
   * relative to the carousel centre.
   *
   * Left cards turn towards the right.
   * Right cards turn towards the left.
   * Middle cards face the viewer.
   *
   * Because this runs during animation, the curve remains
   * consistent as the cards travel across the screen.
   */
  useEffect(() => {
    let frameId = 0;
    let isActive = true;

    const updateCurve = () => {
      if (!isActive) return;

      const container = carouselRef.current;

      if (container) {
        const bounds = container.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const spread = Math.max(bounds.width * 0.53, 1);

        const cards =
          container.querySelectorAll<HTMLElement>(".poster-card");

        cards.forEach((card) => {
          const cardBounds = card.getBoundingClientRect();
          const cardCenterX = cardBounds.left + cardBounds.width / 2;

          const relativePosition = Math.max(
            -1,
            Math.min(1, (cardCenterX - centerX) / spread)
          );

          const distanceFromCenter = Math.abs(relativePosition);

          /*
           * Tune the outer curve here:
           * rotation max: 38 degrees
           * vertical drop max: 17px
           * edge scale reduction max: 11%
           */
          const rotation = -relativePosition * 38;

          const verticalOffset =
            Math.pow(distanceFromCenter, 1.8) * 17;

          const scale =
            1 - distanceFromCenter * 0.11;

          card.style.setProperty(
            "--curve-rotation",
            `${rotation}deg`
          );

          card.style.setProperty(
            "--curve-y",
            `${verticalOffset}px`
          );

          card.style.setProperty(
            "--curve-scale",
            `${scale}`
          );
        });
      }

      frameId = window.requestAnimationFrame(updateCurve);
    };

    frameId = window.requestAnimationFrame(updateCurve);

    return () => {
      isActive = false;
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  function closeOverlay() {
    setSelected(null);
  }

  return (
    <Section id="creative">
      <Header>
        <Eyebrow>Beyond the build</Eyebrow>

        <Heading>Different tools. Same instinct.</Heading>

        <Intro>
          Creative work is part of how I see systems, shape a message and
          make something stick. These are disciplines I work across — not
          a stand-in for engineering.
        </Intro>
      </Header>

      <CarouselMeta>
        <span>
          <span className="accent">Selected work</span>
          {" / A few other lenses"}
        </span>

        <span>Hover to pause · Click to explore ↗</span>
      </CarouselMeta>

      <CarouselWindow ref={carouselRef}>
        <Track className="carousel-track">
          {repeatedWork.map((item, index) => (
            <PosterButton
              className="poster-card"
              key={`${item.image}-${index}`}
              type="button"
              aria-label={`View ${item.title}`}
              onClick={() => setSelected(item)}
            >
              <img
                className="poster-image"
                src={item.image}
                alt={item.title}
                loading={index < CREATIVE_WORK.length ? "eager" : "lazy"}
                draggable={false}
              />

              <span className="image-shade" />

              <span className="card-category">
                {item.category}
              </span>

              <span className="card-bottom">
                <span className="card-title">
                  {item.title}
                </span>

                <span className="card-action">
                  View project ↗
                </span>
              </span>
            </PosterButton>
          ))}
        </Track>
      </CarouselWindow>

      <BottomLine>
        <span>
          Screenwriting · Filmmaking · Design · Visual storytelling
        </span>

        <span className="orange">A work in progress ↗</span>
      </BottomLine>

      {selected && (
        <Overlay
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeOverlay();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeOverlay();
            }
          }}
          tabIndex={-1}
        >
          <CloseButton
            type="button"
            onClick={closeOverlay}
            aria-label="Close project"
          >
            ×
          </CloseButton>

          <ExpandedWork>
            <div className="expanded-image-wrap">
              <img
                className="expanded-image"
                src={selected.image}
                alt={selected.title}
              />
            </div>

            <div className="expanded-copy">
              <span className="expanded-category">
                {selected.category}
              </span>

              <h3>{selected.title}</h3>

              <p className="expanded-description">
                {selected.description}
              </p>

              <span className="expanded-number">
                SELECTED WORK / CLICK × TO CLOSE
              </span>
            </div>
          </ExpandedWork>
        </Overlay>
      )}
    </Section>
  );
}

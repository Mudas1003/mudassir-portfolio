
"use client";

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  cover: string;
  gallery: string[];
  link: string;
  highlight: string;
};

const PROJECTS: Project[] = [
  {
    id: "house-of-vibes",
    title: "House Of Vibes",
    category: "Fashion / E-commerce",
    description:
      "A fashion and lifestyle e-commerce experience blending Gen Z street style with premium shopping. The interface focuses on immersive visuals, responsive layouts, and engaging interactions.",
    technologies: ["React.js", "Material UI", "Bootstrap", "Figma"],
    cover: "/images/projects/house-of-vibes/2.jpeg",
    gallery: [
      "/images/projects/house-of-vibes/1.jpeg",
      "/images/projects/house-of-vibes/2.jpeg",
      "/images/projects/house-of-vibes/3.jpeg",
      "/images/projects/house-of-vibes/4.jpeg",
    ],
    link: "https://houseof-vibes-re7e.vercel.app/",
    highlight: "Fashion and lifestyle commerce experience",
  },
  {
    id: "fashion-ai-pro",
    title: "Fashion AI Pro",
    category: "AI / Personalisation",
    description:
      "An AI-powered fashion discovery experience designed around personalised shopping recommendations and user preferences.",
    technologies: [
      "React.js",
      "AI Agents",
      "Prompt Engineering",
      "GenAI",
    ],
    cover: "/images/projects/fashion-ai-pro/2.jpeg",
    gallery: [
      "/images/projects/fashion-ai-pro/1.jpeg",
      "/images/projects/fashion-ai-pro/2.jpeg",
      "/images/projects/fashion-ai-pro/3.jpeg",
      "/images/projects/fashion-ai-pro/4.jpeg",
    ],
    link: "https://fashion-ai-pro.vercel.app/",
    highlight: "Personalised fashion discovery",
  },
  {
    id: "furgo",
    title: "FurGo",
    category: "Pet Care / GenAI",
    description:
      "An all-in-one pet care concept bringing pet services, useful information, and digital experiences together in one accessible platform.",
    technologies: ["React.js", "JavaScript", "GenAI"],
    cover: "/images/projects/furgo/4.jpeg",
    gallery: [
      "/images/projects/furgo/1.jpeg",
      "/images/projects/furgo/2.jpeg",
      "/images/projects/furgo/3.jpeg",
      "/images/projects/furgo/4.jpeg",
    ],
    link: "https://furgo.vercel.app/",
    highlight: "A digital platform for pet care",
  },
  
{
  id: "amour",
  title: "Amour",
  category: "Dating / Web Application",
  description:
    "A dating website built around meaningful connections, thoughtful interactions, and a clean, engaging user experience. Designed with a focus on visual aesthetics, responsive layouts, and intuitive navigation.",
  technologies: ["React", "Vite", "JavaScript", "CSS"],
  cover: "/images/projects/amour/1.jpg",
  gallery: [
    "/images/projects/amour/1.jpg",
    "/images/projects/amour/2.jpg",
    "/images/projects/amour/3.jpg",
    "/images/projects/amour/4.jpg",
  ],
  link: "under development",
  highlight: "A dating experience built around meaningful connections",
},

];

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const modalEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const screenEnter = keyframes`
  from {
    opacity: 0;
    transform: perspective(1400px) rotateX(-5deg) translateY(10px);
  }

  to {
    opacity: 1;
    transform: perspective(1400px) rotateX(0deg) translateY(0);
  }
`;

const equalizer = keyframes`
  0%, 100% {
    transform: scaleY(0.35);
  }

  50% {
    transform: scaleY(1);
  }
`;

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 55px 0 42px;

  background: #000;
  color: #f4f1e8;

  --orange: #f34d2b;
  --muted: #99938a;
  --paper: #f0ede4;
  --ink: #11110f;

  * {
    box-sizing: border-box;
  }
`;

const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: clamp(240px, 29vw, 350px);
  overflow: hidden;

  perspective: 1300px;
  perspective-origin: 50% 45%;

  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 5%,
    #000 95%,
    transparent 100%
  );

  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 5%,
    #000 95%,
    transparent 100%
  );

  @media (max-width: 650px) {
    height: 235px;
  }

  @media (prefers-reduced-motion: reduce) {
    -webkit-mask-image: none;
    mask-image: none;
  }
`;

const MovingTrack = styled.div`
  /* CARD SIZE CONTROLS */
  --card-width: clamp(450px, 23vw, 280px);
  --card-height: clamp(300px, 17vw, 205px);
  --card-gap: clamp(24px, 4vw, 54px);

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: flex-start;
  gap: var(--card-gap);

  width: max-content;
  padding: 12px 0 0;

  transform-style: preserve-3d;
  animation: projectTravel 52s linear infinite;
  will-change: transform;

  @keyframes projectTravel {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-33.333333%);
    }
  }

  &.paused {
    animation-play-state: paused;
  }

  @media (max-width: 650px) {
    --card-width: 190px;
    --card-height: 145px;
    --card-gap: 24px;

    animation-duration: 42s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Polaroid = styled.button`
  position: relative;
  flex: 0 0 var(--card-width);

  width: var(--card-width);
  height: var(--card-height);

  display: flex;
  flex-direction: column;

  padding: 7px 7px 0;
  overflow: hidden;

  border: 1px solid rgba(22, 20, 17, 0.15);
  border-radius: 3px;

  background: var(--paper);
  color: var(--ink);

  text-align: left;
  cursor: pointer;

  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.42);

  transform:
    translateY(var(--arc-y, 45px))
    rotateZ(var(--arc-rotation, 0deg))
    rotateY(var(--arc-yaw, 0deg))
    scale(var(--arc-scale, 0.95));

  transform-origin: center 45%;
  transform-style: preserve-3d;

  transition:
    box-shadow 250ms ease,
    filter 250ms ease;

  .photo {
    display: block;
    width: 100%;
    height: calc(100% - 31px);
    min-height: 0;

    object-fit: cover;
    object-position: center;
    background: #211f1b;
  }

  .caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    height: 31px;
    padding: 0 3px;
    overflow: hidden;
  }

  .caption-title {
    min-width: 0;
    overflow: hidden;

    font-family: "Manrope", sans-serif;
    font-size: clamp(11px, 1vw, 14px);
    font-weight: 800;
    letter-spacing: -0.035em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .caption-index {
    flex: 0 0 auto;
    color: #777066;
    font: 7px "DM Mono", monospace;
  }

  &:hover {
    z-index: 10;
    filter: brightness(1.04);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.6);
  }

  &:focus-visible {
    outline: 2px solid var(--orange);
    outline-offset: 5px;
  }

  @media (max-width: 650px) {
    .caption-title {
      font-size: 11px;
    }
  }
`;

const CenterContent = styled.header`
  position: relative;
  z-index: 2;

  width: min(760px, 90%);
  margin: -4px auto 0;
  padding: 0 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .stamp {
    position: relative;
    display: grid;
    place-items: center;

    width: 72px;
    height: 72px;
    margin-bottom: 19px;
  }

  .stamp-ring {
    position: absolute;
    inset: 0;

    border: 1px solid rgba(243, 77, 43, 0.9);
    border-radius: 50%;

    animation: ${spin} 16s linear infinite;

    &::before {
      content: "";
      position: absolute;
      inset: 6px;

      border: 1px dashed rgba(243, 77, 43, 0.42);
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      top: -3px;
      left: calc(50% - 3px);

      width: 6px;
      height: 6px;

      border-radius: 50%;
      background: var(--orange);
    }
  }

  .stamp-text {
    position: relative;

    color: var(--orange);
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.1em;
    line-height: 1.5;
    text-transform: uppercase;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 0 12px;

    color: var(--muted);
    font: 9px "DM Mono", monospace;
    letter-spacing: 0.14em;
    text-transform: uppercase;

    &::before {
      content: "";
      width: 19px;
      height: 1px;
      background: var(--orange);
    }
  }

  h2 {
    margin: 0;

    color: #f4f1e8;
    font-family: "Manrope", sans-serif;
    font-size: clamp(41px, 5.8vw, 76px);
    font-weight: 800;
    line-height: 0.97;
    letter-spacing: -0.08em;

    .orange {
      color: var(--orange);
    }
  }

  .description {
    max-width: 560px;
    margin: 16px auto 0;

    color: #aaa49b;
    font-size: 13px;
    line-height: 1.8;
  }

  @media (max-width: 650px) {
    margin-top: 0;

    .stamp {
      width: 58px;
      height: 58px;
      margin-bottom: 15px;
    }

    h2 {
      font-size: clamp(39px, 10vw, 55px);
    }

    .description {
      font-size: 12px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .stamp-ring {
      animation: none;
    }
  }
`;

const CarouselMeta = styled.div`
  position: absolute;
  top: 15px;
  left: 5vw;
  right: 5vw;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  color: #8d867d;
  font: 8px "DM Mono", monospace;
  letter-spacing: 0.11em;
  text-transform: uppercase;

  .orange {
    color: var(--orange);
  }

  @media (max-width: 650px) {
    font-size: 7px;
  }
`;

const PlayerBar = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 18px;

  width: min(980px, 90%);
  margin: 32px auto 0;
  padding: 12px 17px;

  border: 1px solid rgba(228, 190, 139, 0.31);
  border-radius: 100px;

  background:
    radial-gradient(
      ellipse at 7% 50%,
      rgba(174, 94, 37, 0.16),
      transparent 48%
    ),
    linear-gradient(100deg, #1a1511, #0e0e0d 55%, #17120e);

  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.25);

  .player-left {
    display: flex;
    align-items: center;
    gap: 11px;
    min-width: 0;
  }

  .art {
    display: grid;
    place-items: center;
    flex: 0 0 39px;
    height: 39px;

    border-radius: 8px;
    background: var(--orange);
    color: #080807;

    font: 800 10px "DM Mono", monospace;
  }

  .player-copy {
    min-width: 0;
  }

  .eyebrow {
    margin: 0 0 4px;

    color: #c68c57;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .title {
    overflow: hidden;
    max-width: 280px;
    margin: 0;

    color: #f4f1e8;
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .subtitle {
    margin: 3px 0 0;
    color: #938b80;
    font-size: 9px;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  button {
    display: grid;
    place-items: center;

    width: 30px;
    height: 30px;
    padding: 0;

    border: 0;
    border-radius: 50%;
    background: transparent;
    color: #e8e0d3;

    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  button.main {
    width: 38px;
    height: 38px;

    background: #f0e9dc;
    color: #111;

    &:hover {
      background: var(--orange);
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }

  .status {
    color: #928b80;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .equalizer {
    display: flex;
    align-items: center;
    gap: 3px;
    height: 21px;
  }

  .equalizer span {
    width: 3px;
    height: 13px;
    border-radius: 3px;
    background: var(--orange);
    transform-origin: center;
    animation: ${equalizer} 700ms ease-in-out infinite;
  }

  .equalizer span:nth-child(2) {
    height: 18px;
    animation-delay: 120ms;
  }

  .equalizer span:nth-child(3) {
    height: 9px;
    animation-delay: 240ms;
  }

  .equalizer span:nth-child(4) {
    height: 15px;
    animation-delay: 80ms;
  }

  &.paused .equalizer span {
    animation-play-state: paused;
    transform: scaleY(0.3);
  }

  .progress {
    height: 2px;
    overflow: hidden;
    margin-top: 7px;
    background: rgba(255, 255, 255, 0.12);
  }

  .progress-fill {
    height: 100%;
    background: #f4e4c5;
    transition: width 250ms ease;
  }

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
    width: 92%;
    padding: 11px 12px;
    border-radius: 18px;

    .right {
      display: none;
    }

    .controls {
      gap: 3px;
    }

    .title {
      max-width: 160px;
    }
  }
`;

const PlayerProgress = styled.div`
  height: 2px;
  overflow: hidden;
  margin-top: 7px;
  background: rgba(255, 255, 255, 0.12);

  .fill {
    height: 100%;
    background: #f4e4c5;
    transition: width 250ms ease;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  margin: 23px 5vw 0;
  padding-top: 13px;

  border-top: 1px solid rgba(244, 241, 232, 0.13);

  color: #777169;
  font: 8px "DM Mono", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  .orange {
    color: var(--orange);
  }
`;

const ViewerOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(15px);

  animation: ${modalEnter} 220ms ease both;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 17px;
  right: 19px;
  z-index: 20;

  display: grid;
  place-items: center;

  width: 38px;
  height: 38px;

  border: 1px solid rgba(244, 241, 232, 0.25);
  border-radius: 50%;

  background: #111;
  color: #f4f1e8;
  font-size: 23px;

  cursor: pointer;

  &:hover {
    background: var(--orange);
    color: #090909;
  }
`;

const ScreenFrame = styled.div`
  position: relative;

  width: min(1000px, 92vw);
  max-height: 84vh;
  aspect-ratio: 16 / 9;

  padding: clamp(6px, 0.8vw, 10px);
  overflow: hidden;

  border: 1px solid #555550;
  border-radius: 12px;

  background: linear-gradient(145deg, #343431, #111110 75%);

  box-shadow:
    0 26px 85px rgba(0, 0, 0, 0.68),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);

  animation: ${screenEnter} 650ms cubic-bezier(0.2, 0.75, 0.2, 1) both;

  &::before {
    content: "";
    position: absolute;
    z-index: 5;
    top: 3px;
    left: calc(50% - 2px);

    width: 4px;
    height: 4px;

    border-radius: 50%;
    background: #070707;
  }

  @media (max-width: 650px) {
    width: 95vw;
    max-height: 80vh;
    aspect-ratio: 4 / 5;
    padding: 6px;
  }
`;

const ScreenContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;

  border: 1px solid #080808;
  border-radius: 5px;

  background:
    radial-gradient(
      ellipse at 80% 0%,
      rgba(243, 77, 43, 0.12),
      transparent 45%
    ),
    #090909;
`;

const ScreenTopbar = styled.div`
  flex: 0 0 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  padding: 0 13px;
  overflow: hidden;

  border-bottom: 1px solid rgba(244, 241, 232, 0.1);

  color: #938b80;
  font: 7px "DM Mono", monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  .signal {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    color: var(--orange);
    white-space: nowrap;
  }

  .signal::before {
    content: "";
    flex: 0 0 5px;

    width: 5px;
    height: 5px;

    border-radius: 50%;
    background: var(--orange);
  }

  @media (max-width: 650px) {
    flex-basis: 24px;
    padding: 0 8px;
    font-size: 6px;
  }
`;

const ScreenBody = styled.div`
  flex: 1;
  display: grid;

  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(12px, 1.6vw, 20px);

  min-height: 0;
  padding: clamp(12px, 1.6vw, 20px);
  overflow: hidden;

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 8px;
    padding: 8px;
  }
`;

const ProjectDetails = styled.div`
  min-width: 0;
  min-height: 0;
  overflow: hidden;

  .eyebrow {
    margin: 0 0 7px;

    color: var(--orange);
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .playlist-title {
    margin: 0 0 12px;

    color: #f4f1e8;
    font-family: "Manrope", sans-serif;
    font-size: clamp(18px, 2.3vw, 30px);
    font-weight: 800;
    line-height: 0.97;
    letter-spacing: -0.065em;
  }

  .project-name {
    margin: 0 0 6px;

    color: #f4f1e8;
    font-family: "Manrope", sans-serif;
    font-size: clamp(15px, 1.8vw, 22px);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.05em;
  }

  .category {
    margin: 0 0 8px;

    color: #c3a78b;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .description {
    margin: 0;

    color: #b3ada3;
    font-size: clamp(8px, 0.88vw, 10px);
    line-height: 1.6;
  }

  .highlight {
    margin: 8px 0 0;
    padding-left: 7px;

    border-left: 2px solid var(--orange);
    color: #e5d3bc;

    font-size: 9px;
    line-height: 1.4;
  }

  .tech-title {
    margin: 11px 0 6px;

    color: #89847c;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .technologies span {
    padding: 4px 5px;

    border: 1px solid rgba(244, 241, 232, 0.15);
    border-radius: 3px;

    color: #d4cec2;
    font: 7px "DM Mono", monospace;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    margin-top: 10px;
    padding: 7px 9px;

    border: 1px solid rgba(243, 77, 43, 0.7);
    border-radius: 3px;

    color: #f4f1e8;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.07em;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      background: var(--orange);
      color: #090909;
    }
  }

  .missing-link {
    display: block;
    margin-top: 10px;

    color: #837b70;
    font: 7px "DM Mono", monospace;
    line-height: 1.5;
    text-transform: uppercase;
  }

  @media (max-width: 650px) {
    .eyebrow {
      font-size: 6px;
      margin-bottom: 5px;
    }

    .playlist-title {
      font-size: clamp(14px, 3vw, 20px);
      margin-bottom: 7px;
    }

    .project-name {
      font-size: clamp(11px, 2.5vw, 15px);
    }

    .category {
      font-size: 6px;
      margin-bottom: 5px;
    }

    .description {
      font-size: 7px;
      line-height: 1.45;
    }

    .highlight {
      display: none;
    }

    .tech-title {
      margin: 7px 0 4px;
      font-size: 6px;
    }

    .technologies span {
      font-size: 6px;
      padding: 3px 4px;
    }

    .project-link,
    .missing-link {
      margin-top: 7px;
      font-size: 6px;
    }
  }
`;

/* Four landscape-oriented screenshot frames in a 2 × 2 grid. */
const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));

  gap: clamp(7px, 0.9vw, 11px);
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;

  .screenshot {
    position: relative;
    min-width: 0;
    min-height: 0;
    overflow: hidden;

    border: 1px solid rgba(244, 241, 232, 0.16);
    border-radius: 3px;
    background: #080807;
  }

  .screenshot img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
    background: #080807;
  }

  .screenshot-index {
    position: absolute;
    right: 6px;
    bottom: 6px;

    padding: 4px 6px;
    background: rgba(0, 0, 0, 0.78);

    color: #f4f1e8;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.07em;
  }

  @media (max-width: 650px) {
    gap: 5px;

    .screenshot-index {
      right: 3px;
      bottom: 3px;
      padding: 3px 4px;
      font-size: 6px;
    }
  }
`;

const ScreenFooter = styled.div`
  flex: 0 0 23px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  padding: 0 12px;
  overflow: hidden;

  border-top: 1px solid rgba(244, 241, 232, 0.1);

  color: #777169;
  font: 6px "DM Mono", monospace;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  .now-playing {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    color: #c4a17c;
    white-space: nowrap;
  }

  @media (max-width: 650px) {
    flex-basis: 18px;
    padding: 0 8px;
    font-size: 5px;
  }
`;

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  /* Three copies make the moving card sequence loop smoothly. */
  const orbitItems = Array.from(
    { length: PROJECTS.length * 3 },
    (_, index) => ({
      project: PROJECTS[index % PROJECTS.length],
      projectIndex: index % PROJECTS.length,
      index,
    })
  );

  /* Bend the moving cards into one broad, open arc. */
  useEffect(() => {
    let frameId = 0;
    let mounted = true;

    const updateArc = () => {
      if (!mounted) return;

      const viewport = carouselRef.current;

      if (viewport) {
        const rect = viewport.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const spread = Math.max(rect.width * 0.66, 1);

        const cards =
          viewport.querySelectorAll<HTMLElement>(".orbit-card");

        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;

          const normalized = Math.max(
            -1,
            Math.min(1, (cardCenter - centerX) / spread)
          );

          const edge = Math.abs(normalized);
          const verticalOffset = Math.pow(edge, 1.65) * 68;
          const rotation = normalized * 9;
          const yaw = normalized * -11;
          const scale = 1 - edge * 0.06;

          card.style.setProperty("--arc-y", `${verticalOffset}px`);
          card.style.setProperty("--arc-rotation", `${rotation}deg`);
          card.style.setProperty("--arc-yaw", `${yaw}deg`);
          card.style.setProperty("--arc-scale", `${scale}`);
        });
      }

      frameId = window.requestAnimationFrame(updateArc);
    };

    frameId = window.requestAnimationFrame(updateArc);

    return () => {
      mounted = false;
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  function openProject(project: Project) {
    const index = PROJECTS.findIndex((item) => item.id === project.id);

    setActiveIndex(index);
    setSelectedProject(project);
    setIsPlaying(false);
  }

  function closeProject() {
    setSelectedProject(null);
  }

  function changeProject(direction: number) {
    setActiveIndex((current) => {
      return (
        (current + direction + PROJECTS.length) %
        PROJECTS.length
      );
    });
  }

  const activeProject = PROJECTS[activeIndex];

  return (
    <Section id="work">
      <CarouselMeta>
        <span>
          <span className="orange">Project gallery</span>
          {" / Landscape Polaroids"}
        </span>

        <span>Hover to pause · Click to explore ↗</span>
      </CarouselMeta>

      <Carousel ref={carouselRef}>
        <MovingTrack className={isPlaying ? "" : "paused"}>
          {orbitItems.map(({ project, projectIndex, index }) => (
            <Polaroid
              key={`${project.id}-${index}`}
              className="orbit-card"
              type="button"
              aria-label={`Open ${project.title} project`}
              onClick={() => openProject(project)}
            >
              <img
                className="photo"
                src={project.cover}
                alt={project.title}
                loading={index < PROJECTS.length ? "eager" : "lazy"}
                draggable={false}
              />

              <span className="caption">
                <span className="caption-title">
                  {project.title}
                </span>

                <span className="caption-index">
                  {String(projectIndex + 1).padStart(2, "0")}
                </span>
              </span>
            </Polaroid>
          ))}
        </MovingTrack>
      </Carousel>

      <CenterContent>
        <div className="stamp" aria-hidden="true">
          <span className="stamp-ring" />

          <span className="stamp-text">
            Selected
            <br />
            work
            <br />
            portfolio
          </span>
        </div>

        <p className="eyebrow">Selected work</p>

        <h2>
          Proof over <span className="orange">promises.</span>
        </h2>

        <p className="description">
          A collection of digital products, AI-powered ideas and
          interfaces built around useful ideas. Select a Polaroid
          to open the screen and explore the project.
        </p>
      </CenterContent>

      <PlayerBar className={isPlaying ? "" : "paused"}>
        <div className="player-left">
          <div className="art">MI.</div>

          <div className="player-copy">
            <p className="eyebrow">
              Currently playing projects
            </p>

            <p className="title">{activeProject.title}</p>
            <p className="subtitle">{activeProject.category}</p>

            <PlayerProgress>
              <div
                className="fill"
                style={{
                  width: `${
                    ((activeIndex + 1) / PROJECTS.length) * 100
                  }%`,
                }}
              />
            </PlayerProgress>
          </div>
        </div>

        <div className="controls">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => changeProject(-1)}
          >
            |◀
          </button>

          <button
            className="main"
            type="button"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? "Ⅱ" : "▶"}
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={() => changeProject(1)}
          >
            ▶|
          </button>
        </div>

        <div className="right">
          <span className="status">
            {isPlaying ? "In rotation" : "On pause"}
          </span>

          <div className="equalizer" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </PlayerBar>

      <Footer>
        <span>Software · Product · AI · Interface</span>

        <span className="orange">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(PROJECTS.length).padStart(2, "0")}
        </span>
      </Footer>

      {selectedProject && (
        <ViewerOverlay
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeProject();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeProject();
            }
          }}
          tabIndex={-1}
        >
          <CloseButton
            type="button"
            onClick={closeProject}
            aria-label="Close project"
          >
            ×
          </CloseButton>

          <ScreenFrame>
            <ScreenContent>
              <ScreenTopbar>
                <span>MI. / DIGITAL WORKS</span>

                <span className="signal">
                  Currently playing projects
                </span>
              </ScreenTopbar>

              <ScreenBody>
                <ProjectDetails>
                  <p className="eyebrow">
                    Project collection
                  </p>

                  <h2 className="playlist-title">
                    Playlist of
                    <br />
                    Projects.
                  </h2>

                  <h3 className="project-name">
                    {selectedProject.title}
                  </h3>

                  <p className="category">
                    {selectedProject.category}
                  </p>

                  <p className="description">
                    {selectedProject.description}
                  </p>

                  <p className="highlight">
                    {selectedProject.highlight}
                  </p>

                  <p className="tech-title">
                    Built with / Tools used
                  </p>

                  <div className="technologies">
                    {selectedProject.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  
{selectedProject.link.startsWith("http") ? (
  <a
    className="project-link"
    href={selectedProject.link}
    target="_blank"
    rel="noreferrer"
  >
    Open project ↗
  </a>
) : (
  <span className="missing-link">
    {selectedProject.link === "under development"
      ? "Under development"
      : "Add the real project URL in the project data"}
  </span>
)}

                </ProjectDetails>

                <ScreenshotGrid>
                  {selectedProject.gallery.map((image, index) => (
                    <div
                      className="screenshot"
                      key={`${selectedProject.id}-${image}`}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        loading="lazy"
                        onError={(event) => {
                          const element = event.currentTarget;
                          element.onerror = null;
                          element.src = selectedProject.cover;
                        }}
                      />

                      <span className="screenshot-index">
                        VIEW {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </ScreenshotGrid>
              </ScreenBody>

              <ScreenFooter>
                <span className="now-playing">
                  <span>●</span>
                  Currently playing projects
                </span>

                <span>
                  {selectedProject.technologies
                    .slice(0, 2)
                    .join(" · ")}
                </span>
              </ScreenFooter>
            </ScreenContent>
          </ScreenFrame>
        </ViewerOverlay>
      )}
    </Section>
  );
}

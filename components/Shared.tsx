
"use client";

import styled, { createGlobalStyle, keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const flyAcross = keyframes`
  0% { transform: translate(-45vw, 20vh) rotate(-20deg); }
  100% { transform: translate(55vw, -20vh) rotate(10deg); }
`;

export const rain = keyframes`
  from { background-position: 0 0; }
  to { background-position: -100px 300px; }
`;

export const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const pulse = keyframes`
  0%, 100% { opacity: .45; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(6px); }
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

  :root {
    --black: #101010;
    --cream: #f4f1e8;
    --orange: #f34d2b;
    --yellow: #f6e84e;
    --bluegray: #222d34;
    --muted: #a5a29b;
    --line: rgba(20,20,20,.25);
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
  }

  body {
    margin: 0;
    background: var(--black);
    color: var(--cream);
    font-family: 'DM Sans', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, button, a {
    -webkit-tap-highlight-color: transparent;
  }

  button, a { font: inherit; }

  a {
    color: inherit;
    text-decoration: none;
  }

  button { color: inherit; }

  ::selection {
    background: var(--orange);
    color: var(--black);
  }

  img { max-width: 100%; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`;

export const Section = styled.section<{ $tone?: string }>`
  position: relative;
  padding: clamp(85px, 11vw, 150px) 4.5vw;
  background: ${({ $tone }) => $tone || "var(--cream)"};
  color: ${({ $tone }) =>
    $tone === "var(--black)" ? "var(--cream)" : "var(--black)"};
`;

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0 0 10px;
  font: 500 10px 'DM Mono', monospace;
  letter-spacing: .13em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: var(--orange);
    flex-shrink: 0;
  }
`;

export const SectionTitle = styled.h2`
  max-width: 1050px;
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(48px, 8vw, 106px);
  line-height: .95;
  letter-spacing: -.075em;
  font-weight: 700;

  .orange { color: var(--orange); }
  .yellow { color: var(--yellow); }
`;

export const SectionNumber = styled.span`
  position: absolute;
  top: 50%;
  right: 4.5vw;
  transform: translateY(-50%);
  color: #6f6b64;
  font: 10px 'DM Mono', monospace;
  letter-spacing: .1em;
  text-transform: uppercase;

  @media (max-width: 650px) {
    position: static;
    display: block;
    transform: none;
    margin-top: 22px;
  }
`;

export const TwoColumn = styled.div`
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

export const BodyCopy = styled.div`
  font-size: clamp(15px, 1.3vw, 18px);
  line-height: 1.9;
  color: #68655f;

  p { margin: 0 0 18px; }

  .lead {
    color: var(--black);
    font-size: clamp(24px, 3vw, 34px);
    line-height: 1.4;
    letter-spacing: -.04em;
  }
`;

export const Rule = styled.div<{ $dark?: boolean }>`
  height: 1px;
  width: 100%;
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.25)"};
`;

export const Ticker = styled.div`
  background: var(--yellow);
  color: var(--black);
  overflow: hidden;
  white-space: nowrap;
  padding: 15px 0;
  font: 700 12px 'DM Mono', monospace;
  letter-spacing: .07em;

  .track {
    display: inline-flex;
    width: max-content;
    animation: ${marquee} 30s linear infinite;
  }

  span { padding: 0 22px; }

  @media (prefers-reduced-motion: reduce) {
    .track { animation: none; }
  }
`;

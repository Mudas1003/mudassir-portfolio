
"use client";

import styled from "styled-components";

const Navigation = styled.nav`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 27px 4.5vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  color: var(--cream, #f4f1e8);
  pointer-events: none;

  /* Subtle readability over moving or changing backgrounds */
  background: transparent;

  .logo {
    pointer-events: auto;

    color: var(--cream, #f4f1e8);
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.07em;
    text-decoration: none;
    white-space: nowrap;
  }

  .logo span {
    color: var(--orange, #f34d2b);
  }

  .links {
    display: flex;
    align-items: center;
    gap: clamp(16px, 3.1vw, 42px);
    pointer-events: auto;
  }

  .links a {
    font: 500 10px "DM Mono", monospace;
    color: #c4c1b8;
    letter-spacing: 0.04em;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .links a:hover {
    color: var(--yellow, #f6e84e);
  }

  @media (max-width: 600px) {
    padding: 22px 5vw;
    align-items: flex-start;
    gap: 12px;

    .links {
      gap: 13px;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 75%;
    }

    .links a {
      font-size: 9px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .links a {
      transition: none;
    }
  }
`;

export default function Navbar() {
  return (
    <Navigation aria-label="Main navigation">
      <a className="logo" href="#top" aria-label="Mudassir Imam">
        M<span>.</span>I
      </a>

      <div className="links">
        <a href="#engineering">ENGINEERING</a>
        <a href="#work">WORK</a>
        <a href="#creative">CREATIVE</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
    </Navigation>
  );
}

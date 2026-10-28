
"use client";

import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: clamp(680px, 59vw, 850px);
  overflow: hidden;
  background: #101010;
  color: #101010;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 700px) {
    min-height: 780px;
  }
`;

const FireArtwork = styled.img`
  position: absolute;
  z-index: -1;
  inset: 0;

  width: 100%;
  height: 100%;
  display: block;

  object-fit: fill;
  object-position: center;

  pointer-events: none;
  user-select: none;
`;

const FooterTop = styled.div`
  position: absolute;

  /* Move the navigation and other footer details upward. */
  top: 53%;
  left: 4.5%;
  right: 4.5%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 700px) {
    top: 49%;
    left: 5%;
    right: 5%;

    grid-template-columns: 1fr 1fr;
    gap: 28px 18px;
  }

  @media (max-width: 430px) {
    top: 46%;
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FooterColumn = styled.div`
  min-width: 0;
  font-size: 12px;
  line-height: 1.9;

  h3 {
    margin: 0 0 7px;
    font-size: 14px;
    font-weight: 800;
  }

  a {
    display: block;
    width: fit-content;
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 180ms ease, transform 180ms ease;
  }

  a:hover {
    opacity: 1;
    transform: translateX(3px);
  }
`;

const Greeting = styled(FooterColumn)`
  position: relative;
  top: 60px;
  text-align: center;

  h3 {
    margin-bottom: 0;
    font-size: 17px;
  }

  .contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    /* A little closer to "Say Hi!" after removing the paragraph. */
    margin-top: 12px;
    padding: 12px 23px;

    border-radius: 999px;
    background: #101010;
    color: #ff572f;

    font-size: 11px;
    font-weight: 800;
    opacity: 1;

    transition: transform 180ms ease, background 180ms ease;
  }

  .contact-button:hover {
    background: #29201d;
    transform: translateY(-2px);
  }

  @media (max-width: 700px) {
    grid-column: 1 / -1;
    grid-row: 1;
    text-align: center;
  }

  @media (max-width: 430px) {
    grid-column: auto;
    grid-row: auto;
    text-align: left;
  }
`;

const RightColumn = styled(FooterColumn)`
  text-align: right;

  strong {
    display: block;
    margin-top: 7px;
    font-size: 13px;
  }

  .credit {
    font-size: 10px;
    opacity: 0.8;
  }

  @media (max-width: 430px) {
    text-align: left;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;

  a {
    display: grid;
    place-items: center;

    width: 31px;
    height: 31px;
    border: 1px solid rgba(16, 16, 16, 0.35);
    border-radius: 50%;

    color: #101010;
    font-size: 10px;
    font-weight: 800;
    opacity: 1;

    transition: background 180ms ease, color 180ms ease;
  }

  a:hover {
    background: #101010;
    color: #ff572f;
    transform: none;
  }

  @media (max-width: 430px) {
    justify-content: flex-start;
  }
`;

const Wordmark = styled.div`
  position: absolute;
  left: 1.4%;
  right: 1.4%;
  bottom: 47px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding-top: 10px;
  border-top: 1px solid rgba(16, 16, 16, 0.35);

  h2 {
    width: 100%;
    margin: 0;
    color: #101010;

    font-family: "Manrope", sans-serif;
    font-size: clamp(48px, 12.5vw, 190px);
    font-weight: 900;
    line-height: 0.9;
    letter-spacing: -0.095em;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    left: 2%;
    right: 2%;
    bottom: 66px;

    h2 {
      font-size: 12vw;
      letter-spacing: -0.075em;
    }
  }
`;

const BottomLine = styled.div`
  position: absolute;
  left: 4.5%;
  right: 4.5%;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  min-height: 38px;
  padding: 9px 0;

  border-top: 1px solid rgba(16, 16, 16, 0.35);

  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    left: 5%;
    right: 5%;
    flex-wrap: wrap;
    gap: 6px 12px;
    font-size: 8px;
    line-height: 1.6;
  }
`;

export default function EndCredits() {
  return (
    <Footer id="end-credits">
      <FireArtwork
        src="/images/footer-fire.png"
        alt=""
        aria-hidden="true"
      />

      <FooterTop>
        <FooterColumn>
          <h3>Navigation</h3>
          <a href="#about">About</a>
          <a href="#skills">Skills &amp; Practice</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </FooterColumn>

        <Greeting>
          <h3>Say Hi!</h3>
          <a className="contact-button" href="#contact">
            Let&apos;s Talk ↗
          </a>
        </Greeting>

        <RightColumn>
          <Socials>
            <a
              href="https://www.linkedin.com/in/mudassir-imam-54ba03273/"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://github.com/Mudas1003"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.instagram.com/directedbymudassir/"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="https://www.youtube.com/@mudassirimam8313"
              aria-label="YouTube"
            >
              YT
            </a>
          </Socials>

          <strong>
            © {new Date().getFullYear()} Mudassir Imam
          </strong>

          <span className="credit">
            Made with intention.
          </span>
        </RightColumn>
      </FooterTop>

      <Wordmark>
        <h2>Mudassir Imam</h2>
      </Wordmark>

      <BottomLine>
        <span>Thoughtfully made. Open to thoughtful people.</span>
        <a href="#top">Back to the beginning ↑</a>
        <span>Software · Design · Film</span>
      </BottomLine>
    </Footer>
  );
}

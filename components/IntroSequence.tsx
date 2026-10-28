
"use client";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

type IntroSequenceProps = {
  onComplete: () => void;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const flyAcross = keyframes`
  0% {
    transform: translate(-100vw, 30vh) rotate(-15deg);
  }

  100% {
    transform: translate(100vw, -25vh) rotate(10deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.45;
    transform: translateY(0);
  }

  50% {
    opacity: 1;
    transform: translateY(7px);
  }
`;

const rain = keyframes`
  from {
    transform: translateY(-8%);
  }

  to {
    transform: translateY(8%);
  }
`;

const Intro = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  min-height: 570px;
  overflow: hidden;
  background: radial-gradient(
    ellipse at center,
    #171717 0%,
    #101010 65%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--cream, #f4f1e8);
`;

const IntroScene = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 24px 70px;
  text-align: center;
  animation: ${fadeIn} 800ms ease both;
`;

const Greeting = styled.h1`
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: clamp(54px, 9vw, 128px);
  letter-spacing: -0.065em;
  color: var(--cream, #f4f1e8);
`;

const IntroLine = styled.h2`
  max-width: 1100px;
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-size: clamp(28px, 5.2vw, 66px);
  line-height: 1.17;
  font-weight: 700;
  letter-spacing: -0.055em;
`;

const WeatherCard = styled.div`
  position: relative;
  width: min(950px, 90vw);
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 42px;
  background: var(--bluegray, #222d34);
  border: 1px solid #39444a;
  box-shadow: 18px 18px 0 var(--orange, #f34d2b);
  overflow: hidden;
  animation: ${fadeIn} 800ms ease both;

  &::before {
    content: "";
    position: absolute;
    inset: -100%;
    background: repeating-linear-gradient(
      115deg,
      transparent 0 30px,
      rgba(255, 255, 255, 0.07) 31px 33px,
      transparent 34px 60px
    );
    animation: ${rain} 5s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: -100px;
    right: 12%;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.055);
  }

  h2 {
    position: relative;
    z-index: 1;
    margin: 0;
    font-family: "Manrope", sans-serif;
    font-size: clamp(27px, 5.2vw, 67px);
    line-height: 1.2;
    letter-spacing: -0.055em;
  }

  strong {
    color: var(--yellow, #f6e84e);
  }
`;

const Plane = styled.div`
  position: absolute;
  z-index: 5;
  top: 43%;
  left: 42%;
  font-size: clamp(40px, 6vw, 75px);
  animation: ${flyAcross} 2.3s cubic-bezier(0.3, 0.05, 0.6, 1) both;
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.3));
`;

const FinalIntro = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 5vw 80px;
  animation: ${fadeIn} 1.2s ease both;
`;

const FinalName = styled.h1`
  margin: 0;
  color: var(--cream, #f4f1e8);
  font-family: "Manrope", sans-serif;
  font-size: clamp(46px, 11.4vw, 150px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.075em;
  text-align: center;
`;

const NativeNames = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 45px;
  color: var(--yellow, #f6e84e);
  font-size: clamp(25px, 3.3vw, 42px);
  font-weight: 600;

  .hindi {
    animation: ${fadeIn} 1s 0.5s both;
  }

  .arabic {
    animation: ${fadeIn} 1s 0.8s both;
  }
`;

const ScrollCue = styled.a`
  position: absolute;
  bottom: 27px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--cream, #f4f1e8);
  font: 500 10px "DM Mono", monospace;
  letter-spacing: 0.18em;
  white-space: nowrap;
  text-decoration: none;

  span:last-child {
    font-size: 23px;
    animation: ${pulse} 1.5s infinite;
  }
`;

const IntroCredit = styled.p`
  position: absolute;
  right: 4.5vw;
  bottom: 26px;
  color: #77736e;
  font: 10px "DM Mono", monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default function IntroSequence({
  onComplete,
}: IntroSequenceProps) {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const durations = [2500, 3500, 3000, 3000, 2600, 1800];
    const timers: ReturnType<typeof setTimeout>[] = [];

    let elapsed = 300;

    durations.forEach((duration, index) => {
      elapsed += duration;

      timers.push(
        setTimeout(() => {
          setScene(index + 1);
        }, elapsed)
      );
    });

    timers.push(
      setTimeout(() => {
        onComplete();
      }, elapsed + 1200)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <Intro id="top">
      {scene === 0 && (
        <IntroScene>
          <Greeting>नमस्कार!!</Greeting>
        </IntroScene>
      )}

      {scene === 1 && (
        <IntroScene>
          <IntroLine>
            Yatri gan, kripya karke apne kursi ki peti
            <br />
            kas ke bandh lein.
          </IntroLine>
        </IntroScene>
      )}

      {scene === 2 && (
        <IntroScene>
          <IntroLine>Kyunki vayu-mandal ke bahar ka...</IntroLine>
          <Plane aria-hidden="true">✈</Plane>
        </IntroScene>
      )}

      {scene === 3 && (
        <IntroScene>
          <WeatherCard>
            <h2>
              <strong>मौसम</strong>
            </h2>
          </WeatherCard>
        </IntroScene>
      )}

      {scene === 4 && (
        <IntroScene>
          <WeatherCard>
            <h2>
            <strong>मौसम</strong>
              <br />
              kharab hone wala hai...
            </h2>
          </WeatherCard>
        </IntroScene>
      )}

      {scene === 5 && (
        <IntroScene>
          <Greeting style={{ fontSize: "clamp(50px, 11vw, 145px)" }}>
            Hi! I am
          </Greeting>
        </IntroScene>
      )}

      {scene >= 6 && (
        <FinalIntro>
          <FinalName>Mudassir Imam</FinalName>

          <NativeNames>
            <span className="hindi">मुदस्सिर</span>
            <span className="arabic" lang="ar" dir="rtl">
              مدثر
            </span>
          </NativeNames>

          <ScrollCue href="#home">
            <span>SCROLL DOWN FOR MORE</span>
            <span>↓</span>
          </ScrollCue>

          <IntroCredit>
            A title sequence by Mudassir Imam
          </IntroCredit>
        </FinalIntro>
      )}
    </Intro>
  );
}

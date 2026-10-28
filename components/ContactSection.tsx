
"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

/* =========================================================
   CUSTOMISE YOUR DETAILS HERE
   ========================================================= */

const CONTACT_EMAIL = "iamimam4u@gmail.com";
const CONTACT_PHONE = "+91 9742362489";
const RESUME_PATH = "/Mudassir-Imam-Resume.pdf";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

/* Replace the placeholder social usernames with your own. */

const SOCIAL_LINKS = [
  {
    label: "Personal Instagram",
    value: "@mudassirafat_1976",
    href: "https://www.instagram.com/mudassirafat_1976?cplk=MWx1dWppYXdyOHI2",
  },
  {
    label: "Directed by Mudassir",
    value: "@directedbymudassir",
    href: "https://www.instagram.com/directedbymudassir?mdxt=MW83N2UyNnJobGg3Mw==",
  },
  {
    label: "X / Twitter",
    value: "@MudassirImam17",
    href: "https://x.com/MudassirImam17",
  },
];

/* =========================================================
   FOLDER DATA
   ========================================================= */

type FolderId =
  | "email"
  | "github"
  | "linkedin"
  | "instagram"
  | "resume";

type ContactFolder = {
  id: FolderId;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  value: string;
  href?: string;
  action: string;
  download?: boolean;
};

const FOLDERS: ContactFolder[] = [
  {
    id: "email",
    number: "01",
    title: "Email & Contact",
    subtitle: "The direct line",
    image: "/images/contact/folders/email.jpeg",
    description:
      "Have a project, an opportunity, or an idea worth discussing? Get in touch. I am always interested in thoughtful conversations and meaningful work.",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    action: "Write an email",
  },
  {
    id: "github",
    number: "02",
    title: "GitHub",
    subtitle: "Things I've built",
    image: "/images/contact/folders/github.jpeg",
    description:
      "Explore my frontend experiments, interface builds, and software projects. See how the ideas translate into code.",
    value: "github.com/yourusername",
    href: "https://github.com/Mudas1003",
    action: "Explore GitHub",
  },
  {
    id: "linkedin",
    number: "03",
    title: "LinkedIn",
    subtitle: "Professional life",
    image: "/images/contact/folders/linkedin.jpeg",
    description:
      "For professional conversations, opportunities, collaborations, and connecting over shared interests.",
    value: "linkedin.com/in/yourusername",
    href: "https://www.linkedin.com/in/mudassir-imam-54ba03273/",
    action: "Visit LinkedIn",
  },
  {
    id: "instagram",
    number: "04",
    title: "Instagram & Socials",
    subtitle: "The creative side",
    image: "/images/contact/folders/instagram.jpeg",
    description:
      "Find my personal updates, filmmaking work, visual experiments, and creative projects across my social profiles.",
    value: "Instagram · Film · Socials",
    action: "Explore socials",
  },
  {
    id: "resume",
    number: "05",
    title: "Resume",
    subtitle: "The professional profile",
    image: "/images/contact/folders/resume.jpeg",
    description:
      "Explore my professional background, technical skills, education, selected projects, and experience.",
    value: "Mudassir Imam · Resume",
    href: RESUME_PATH,
    action: "Download my resume",
    download: true,
  },
];

/* =========================================================
   ANIMATIONS
   ========================================================= */

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.99);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

/* =========================================================
   SECTION
   ========================================================= */

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding: clamp(66px, 7.5vw, 105px) 0 35px;

  background:
    radial-gradient(
      ellipse at 15% 42%,
      rgba(255, 255, 255, 0.035),
      transparent 43%
    ),
    #101010;

  color: #f4f1e8;

  --cream: #f4f1e8;
  --paper: #e8e5dc;
  --black: #101010;
  --muted: #aaa69d;
  --yellow: #f6e84e;
  --orange: #f34d2b;
  --line: rgba(244, 241, 232, 0.18);

  * {
    box-sizing: border-box;
  }
`;

/* =========================================================
   HEADER
   ========================================================= */

const Header = styled.header`
  width: min(1500px, 94%);
  margin: 0 auto 38px;

  animation: ${reveal} 700ms ease both;

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;

    margin: 0 0 20px;

    color: var(--cream);
    font: 600 10px "DM Mono", monospace;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eyebrow::before {
    content: "";

    width: 24px;
    height: 2px;

    background: var(--orange);
  }

  h2 {
    max-width: 1100px;
    margin: 0;

    color: var(--cream);
    font-family: "Manrope", sans-serif;
    font-size: clamp(50px, 7.5vw, 100px);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.085em;
  }

  .heading-line {
    display: block;
  }

  .heading-highlight {
    color: var(--yellow);
  }

  .header-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;

    margin-top: 29px;
    padding-top: 19px;

    border-top: 1px solid var(--line);
  }

  .intro {
    max-width: 560px;
    margin: 0;

    color: #bdb8ae;
    font-size: 14px;
    line-height: 1.85;
  }

  .availability {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    color: var(--yellow);
    font: 9px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .availability::before {
    content: "";

    width: 6px;
    height: 6px;

    border-radius: 50%;
    background: var(--yellow);
  }

  @media (max-width: 650px) {
    width: 90%;
    margin-bottom: 30px;

    .eyebrow {
      font-size: 8px;
    }

    h2 {
      font-size: clamp(42px, 11vw, 68px);
    }

    .header-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;

      margin-top: 23px;
      padding-top: 16px;
    }

    .intro {
      font-size: 13px;
    }
  }
`;

/* =========================================================
   MAIN LAYOUT
   ========================================================= */

const MainGrid = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.12fr)
    minmax(355px, 0.88fr);

  align-items: start;
  gap: clamp(27px, 3.5vw, 52px);

  width: min(1500px, 94%);
  margin: 0 auto;

  @media (max-width: 1000px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 43px;
  }

  @media (max-width: 650px) {
    width: 90%;
    gap: 36px;
  }
`;

const ColumnLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  margin-bottom: 19px;
  padding-bottom: 12px;

  border-bottom: 1px solid var(--line);

  color: #a6a196;
  font: 8px "DM Mono", monospace;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  strong {
    color: var(--orange);
    font-weight: 500;
  }
`;

/* =========================================================
   LEFT: FOLDER DIRECTORY
   ========================================================= */

const FolderColumn = styled.div`
  position: relative;
  min-width: 0;

  .folder-intro {
    max-width: 430px;
    margin: 0 0 23px;

    color: #aaa69d;
    font-size: 12px;
    line-height: 1.75;
  }
`;

const FolderStage = styled.div`
  /*
   * Move the complete folder stack left by changing -30px
   * to -40px or -50px. The extra width preserves its right edge.
   */
  position: relative;

  width: calc(100% + 30px);
  margin-left: -30px;

  height: clamp(420px, 42vw, 555px);

  overflow: visible;
  isolation: isolate;

  @media (max-width: 1000px) {
    width: calc(100% + 20px);
    margin-left: -20px;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-left: 0;
    height: 400px;
  }
`;

const Folder = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--folder-left, 0%);

  width: var(--folder-width, 43.5%);
  height: 100%;

  padding: 0;
  overflow: visible;

  border: 1px solid #aaa69d;
  border-radius: 3px 3px 2px 2px;

  background: #e8e5dc;
  color: #111;

  text-align: left;
  cursor: pointer;

  box-shadow:
    0 15px 32px rgba(0, 0, 0, 0.22),
    inset 0 0 0 1px rgba(255, 255, 255, 0.14);

  transform: translateY(var(--folder-lift, 0px));
  transform-origin: center bottom;

  transition:
    transform 260ms ease,
    box-shadow 260ms ease,
    filter 260ms ease;

  .folder-art {
    position: absolute;
    inset: 0;

    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    filter: grayscale(1) contrast(1.03);
    opacity: 0.94;
  }

  .paper-wash {
    position: absolute;
    z-index: 1;
    inset: 0;

    background:
      linear-gradient(
        180deg,
        rgba(232, 229, 220, 0.04),
        rgba(232, 229, 220, 0.01) 55%,
        rgba(16, 16, 16, 0.1)
      );

    pointer-events: none;
  }

  .folder-number {
    position: absolute;
    z-index: 3;
    top: 12px;
    left: 10px;

    color: rgba(16, 16, 16, 0.78);
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.06em;
  }

  .folder-tab {
    position: absolute;
    z-index: 4;

    top: var(--tab-top, 22%);
    right: -1px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: clamp(31px, 3.6vw, 43px);
    height: clamp(120px, 14vw, 175px);

    padding: 8px 4px;

    border: 1px solid #b2aea4;
    border-right: 0;
    border-radius: 3px 0 0 3px;

    background: #e8e5dc;
    color: #151515;

    font: 500 9px "DM Mono", monospace;
    letter-spacing: 0.045em;
    text-transform: lowercase;
    writing-mode: vertical-rl;

    transition:
      background 220ms ease,
      color 220ms ease;
  }

  .cover-title {
    position: absolute;
    z-index: 3;

    left: 9px;
    bottom: 18px;

    color: #151515;
    font-family: "Manrope", sans-serif;
    font-size: clamp(21px, 2.8vw, 34px);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.065em;

    writing-mode: vertical-rl;
    transform: rotate(180deg);

    pointer-events: none;
  }

  .folder-bottom {
    position: absolute;
    z-index: 3;

    left: 9px;
    right: 34px;
    bottom: 9px;

    color: rgba(16, 16, 16, 0.65);
    font: 6px "DM Mono", monospace;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    writing-mode: vertical-rl;
  }

  &.active {
    filter: contrast(1.04);

    box-shadow:
      0 20px 42px rgba(0, 0, 0, 0.4),
      0 0 0 2px rgba(244, 241, 232, 0.5);
  }

  &.active .folder-tab {
    background: #101010;
    border-color: #101010;
    color: #f4f1e8;
  }

  &:hover {
    filter: contrast(1.06);
    transform: translateY(-7px);
  }

  &:focus-visible {
    outline: 2px solid var(--yellow);
    outline-offset: 4px;
  }

  @media (max-width: 650px) {
    .folder-number {
      top: 9px;
      left: 7px;
      font-size: 7px;
    }

    .folder-tab {
      width: 29px;
      height: 115px;
      font-size: 7px;
    }

    .cover-title {
      left: 7px;
      font-size: 21px;
    }
  }
`;

/* =========================================================
   FOLDER DETAILS
   No image is rendered inside this dialogue.
   The folder artwork remains visible behind it.
   ========================================================= */

const DetailCard = styled.article`
  position: absolute;
  z-index: 70;

  left: 2%;
  right: auto;
  bottom: 14px;

  width: min(330px, 46%);
  max-height: calc(100% - 28px);
  overflow-y: auto;

  padding: 16px;

  border: 1px solid #77746b;
  background: #e8e5dc;
  color: #111;

  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);

  animation: ${cardReveal} 260ms ease both;

  /*
   * First three folders:
   * move the dialogue box to the right side.
   */
  &.side-right {
    left: auto;
    right: 2%;
  }

  /*
   * Instagram & Socials and Resume:
   * keep the dialogue box on the left side.
   */
  &.side-left {
    left: 2%;
    right: auto;
  }

  .detail-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    margin-bottom: 22px;
    padding-bottom: 10px;

    border-bottom: 1px solid rgba(16, 16, 16, 0.2);

    color: #5d5a50;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .close-button {
    display: grid;
    place-items: center;

    flex: 0 0 27px;
    width: 27px;
    height: 27px;

    border: 1px solid #77746b;
    background: transparent;
    color: #101010;

    font-size: 17px;
    cursor: pointer;
  }

  .close-button:hover {
    background: #101010;
    color: #f4f1e8;
  }

  .detail-number {
    display: block;
    margin-bottom: 9px;

    color: #c3422b;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.1em;
  }

  h3 {
    margin: 0;

    color: #111;
    font-family: "Manrope", sans-serif;
    font-size: clamp(24px, 2.2vw, 31px);
    font-weight: 800;
    line-height: 1.04;
    letter-spacing: -0.065em;
  }

  .subtitle {
    margin: 8px 0 0;

    color: #5b574e;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .description {
    margin: 17px 0;

    color: #49463f;
    font-size: 12px;
    line-height: 1.75;
  }

  .detail-value {
    margin: 0;
    padding-top: 12px;

    border-top: 1px solid rgba(16, 16, 16, 0.2);

    color: #171715;
    font-size: 12px;
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  .detail-label {
    display: block;
    margin-bottom: 6px;

    color: #69655b;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .detail-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 13px;

    margin-top: 18px;
  }

  .detail-action {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    width: fit-content;
    padding: 0 0 6px;

    border: 0;
    border-bottom: 1px solid #111;

    background: transparent;
    color: #111;

    font: 9px "DM Mono", monospace;
    letter-spacing: 0.07em;
    text-decoration: none;
    text-transform: uppercase;

    cursor: pointer;
  }

  .detail-action:hover {
    color: #a23825;
    border-color: var(--orange);
  }

  .phone-link {
    display: block;
    margin-top: 14px;

    color: #171715;
    font-size: 12px;
    line-height: 1.7;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  .phone-link:hover {
    text-decoration: underline;
  }

  .social-links {
    display: flex;
    flex-direction: column;

    margin-top: 5px;
    border-top: 1px solid rgba(16, 16, 16, 0.2);
  }

  .social-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    padding: 12px 0;

    border-bottom: 1px solid rgba(16, 16, 16, 0.14);

    color: #171715;
    font-size: 11px;
    text-decoration: none;
  }

  .social-link small {
    display: block;
    margin-top: 3px;

    color: #777267;
    font: 8px "DM Mono", monospace;
  }

  .social-link:hover {
    color: #a23825;
  }

  @media (max-width: 650px) {
    /*
     * On mobile, prioritise readable text and keep the
     * dialogue within the stage on either folder selection.
     */
    &.side-right,
    &.side-left {
      left: 4%;
      right: auto;
      width: 91%;
    }

    padding: 15px;

    .description {
      font-size: 11px;
    }
  }
`;

/* =========================================================
   RIGHT: CONTACT CARD
   ========================================================= */

const ContactCard = styled.div`
  min-width: 0;
  overflow: hidden;

  border: 1px solid #77746b;
  background: #e8e5dc;
  color: #101010;

  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    padding: 12px 16px;

    border-bottom: 1px solid rgba(16, 16, 16, 0.18);
    background: #dcd9d0;

    color: #4d4a42;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

/* =========================================================
   COLOUR PROFILE PHOTO
   ========================================================= */

const ProfileStrip = styled.div`
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  align-items: center;
  gap: 15px;

  padding: 16px;

  border-bottom: 1px solid rgba(16, 16, 16, 0.18);

  .profile-photo {
    position: relative;

    width: 88px;
    height: 105px;

    overflow: hidden;
    border: 1px solid #aaa69d;

    background: #c9c6bd;
  }

  .profile-photo img {
    position: absolute;
    inset: 0;

    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    filter: none;
  }

  .photo-fallback {
    position: absolute;
    inset: 0;

    display: grid;
    place-items: center;

    color: rgba(16, 16, 16, 0.5);
    font-family: "Manrope", sans-serif;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.08em;
  }

  .profile-label {
    margin: 0 0 8px;

    color: #6f6b61;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;

    color: #111;
    font-family: "Manrope", sans-serif;
    font-size: clamp(18px, 2vw, 25px);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.06em;
  }

  .profile-role {
    margin: 8px 0 0;

    color: #56534b;
    font-size: 10px;
    line-height: 1.65;
  }

  .profile-code {
    margin: 9px 0 0;

    color: #77736a;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.07em;
  }

  @media (max-width: 650px) {
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 12px;
    padding: 13px;

    .profile-photo {
      width: 72px;
      height: 88px;
    }

    h3 {
      font-size: 19px;
    }
  }
`;

/* =========================================================
   MESSAGE FORM
   ========================================================= */

const FormPanel = styled.div`
  padding: 20px 17px 18px;

  .form-kicker {
    margin: 0 0 8px;

    color: #9b3827;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h4 {
    margin: 0;

    color: #111;
    font-family: "Manrope", sans-serif;
    font-size: clamp(23px, 2.45vw, 32px);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.07em;
  }

  .form-intro {
    margin: 10px 0 21px;

    color: #615d54;
    font-size: 11px;
    line-height: 1.7;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  .field-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 11px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 7px;

    min-width: 0;

    color: #4d4940;
    font: 8px "DM Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  input,
  select,
  textarea {
    width: 100%;
    min-width: 0;

    border: 1px solid #b6b2a8;
    border-radius: 0;

    outline: none;
    background: #f4f1e8;
    color: #101010;

    font-family: inherit;
    font-size: 12px;
    letter-spacing: normal;
    text-transform: none;

    transition:
      border-color 180ms ease,
      background 180ms ease;
  }

  input,
  select {
    height: 42px;
    padding: 0 10px;
  }

  textarea {
    min-height: 105px;
    padding: 11px;
    resize: vertical;
    line-height: 1.65;
  }

  input::placeholder,
  textarea::placeholder {
    color: #858176;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #101010;
    background: #fffdf6;
  }

  select {
    color-scheme: light;
  }

  .submit-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    width: 100%;
    min-height: 47px;
    margin-top: 4px;
    padding: 0 14px;

    border: 1px solid #101010;
    background: #101010;
    color: #f4f1e8;

    font: 700 9px "DM Mono", monospace;
    letter-spacing: 0.09em;
    text-transform: uppercase;

    cursor: pointer;

    transition:
      background 180ms ease,
      color 180ms ease,
      opacity 180ms ease;
  }

  .submit-button:hover:not(:disabled) {
    background: var(--yellow);
    color: #101010;
  }

  .submit-button:disabled {
    opacity: 0.65;
    cursor: wait;
  }

  .send-arrow {
    font-size: 15px;
  }

  .form-note {
    margin: 0;

    color: #777267;
    font-size: 10px;
    line-height: 1.6;
  }

  .form-status {
    margin: 0;
    padding: 10px 11px;

    border: 1px solid #aaa69d;
    background: #f4f1e8;
    color: #292820;

    font-size: 11px;
    line-height: 1.65;
  }

  .form-status.error {
    border-color: #c3422b;
    color: #8c2e20;
  }

  .form-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    margin-top: 16px;
    padding-top: 12px;

    border-top: 1px solid rgba(16, 16, 16, 0.18);

    color: #6e695f;
    font: 7px "DM Mono", monospace;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  @media (max-width: 650px) {
    padding: 17px 13px;

    .field-row {
      grid-template-columns: minmax(0, 1fr);
    }

    h4 {
      font-size: 25px;
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
  gap: 18px;

  width: min(1500px, 94%);
  margin: 40px auto 0;
  padding-top: 16px;

  border-top: 1px solid var(--line);

  color: #9b968b;
  font: 8px "DM Mono", monospace;
  letter-spacing: 0.1em;
  line-height: 1.7;
  text-transform: uppercase;

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  a {
    color: #e5e0d5;
    text-decoration: none;
  }

  a:hover {
    color: var(--yellow);
  }

  @media (max-width: 650px) {
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .footer-links {
      gap: 15px;
    }
  }
`;

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ContactSection() {
  const [activeFolderId, setActiveFolderId] =
    useState<FolderId | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Project inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const activeFolder =
    FOLDERS.find((folder) => folder.id === activeFolderId) ??
    null;

  const activeFolderIndex = activeFolder
    ? FOLDERS.findIndex(
        (folder) => folder.id === activeFolder.id
      )
    : -1;

  /*
   * First three folders: open the dialogue on the right.
   * Last two folders: open it on the left.
   */
  const detailSide =
    activeFolderIndex >= 0 && activeFolderIndex < 3
      ? "side-right"
      : "side-left";

  function updateField(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.currentTarget;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setFormStatus("");
    setIsError(false);

    if (!FORMSPREE_ENDPOINT) {
      setIsError(true);
      setFormStatus(
        "Email delivery is not configured yet. Add your Formspree endpoint to .env.local and restart the development server."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setFormStatus(
        "Message submitted successfully. Thank you for reaching out!"
      );

      setForm({
        name: "",
        email: "",
        subject: "Project inquiry",
        message: "",
      });
    } catch {
      setIsError(true);
      setFormStatus(
        "Your message could not be submitted. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact">
      <Header>
        <p className="eyebrow">
          Open to a good conversation
        </p>

        <h2>
          <span className="heading-line">
            Have a good
          </span>

          <span className="heading-line heading-highlight">
            one in mind?
          </span>
        </h2>

        <div className="header-bottom">
          <p className="intro">
            Whether the challenge is technical, creative, or
            somewhere in between, I'm interested in thoughtful
            work and thoughtful people.
          </p>

          <span className="availability">
            Open to meaningful collaborations
          </span>
        </div>
      </Header>

      <MainGrid>
        {/* =============================================
            LEFT: FOLDER DIRECTORY
            ============================================= */}

        <FolderColumn>
          <ColumnLabel>
            <span>Contact directory</span>
            <strong>05 files</strong>
          </ColumnLabel>

          <p className="folder-intro">
            Five files. Different sides of the same person.
            Open a folder to explore.
          </p>

          <FolderStage>
            {FOLDERS.map((folder, index) => {
              const isActive = activeFolderId === folder.id;

              const leftPositions = [
                0,
                14.2,
                28.4,
                42.6,
                56.8,
              ];

              const tabPositions = [23, 35, 17, 29, 21];

              return (
                <Folder
                  key={folder.id}
                  type="button"
                  className={isActive ? "active" : ""}
                  aria-pressed={isActive}
                  aria-label={`Open ${folder.title}`}
                  onClick={() => {
                    setActiveFolderId((current) =>
                      current === folder.id ? null : folder.id
                    );
                  }}
                  style={
                    {
                      "--folder-left": `${leftPositions[index]}%`,
                      "--folder-width": "43.5%",
                      "--folder-lift": isActive ? "-9px" : "0px",
                      "--tab-top": `${tabPositions[index]}%`,
                      zIndex: isActive ? 40 : 20 - index,
                    } as React.CSSProperties
                  }
                >
                  <img
                    className="folder-art"
                    src={folder.image}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="paper-wash" />

                  <span className="folder-number">
                    {folder.number}
                  </span>

                  {index === 0 && (
                    <span className="cover-title">
                      Contact files
                    </span>
                  )}

                  <span className="folder-tab">
                    {folder.title}
                  </span>

                  <span className="folder-bottom">
                    {folder.subtitle}
                  </span>
                </Folder>
              );
            })}

            {/* The dialogue contains text only.
                The selected folder's image remains on the folder. */}
            {activeFolder && (
              <DetailCard
                key={activeFolder.id}
                className={detailSide}
              >
                <div className="detail-top">
                  <span>
                    Contact archive / {activeFolder.number}
                  </span>

                  <button
                    className="close-button"
                    type="button"
                    aria-label="Close contact details"
                    onClick={() => setActiveFolderId(null)}
                  >
                    ×
                  </button>
                </div>

                <span className="detail-number">
                  FILE {activeFolder.number} / 05
                </span>

                <h3>{activeFolder.title}</h3>

                <p className="subtitle">
                  {activeFolder.subtitle}
                </p>

                <p className="description">
                  {activeFolder.description}
                </p>

                {activeFolder.id === "email" ? (
                  <>
                    <p className="detail-value">
                      <span className="detail-label">
                        Email address
                      </span>
                      {CONTACT_EMAIL}
                    </p>

                    <a
                      className="phone-link"
                      href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
                    >
                      <span className="detail-label">
                        Phone number
                      </span>
                      {CONTACT_PHONE}
                    </a>
                  </>
                ) : activeFolder.id === "instagram" ? (
                  <div className="social-links">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        className="social-link"
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>
                          {social.label}
                          <small>{social.value}</small>
                        </span>

                        <span>↗</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="detail-value">
                    <span className="detail-label">
                      {activeFolder.id === "resume"
                        ? "Document"
                        : "Profile"}
                    </span>

                    {activeFolder.value}
                  </p>
                )}

                {activeFolder.href && (
                  <div className="detail-actions">
                    <a
                      className="detail-action"
                      href={activeFolder.href}
                      target={
                        activeFolder.download ||
                        activeFolder.id === "email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        activeFolder.download ||
                        activeFolder.id === "email"
                          ? undefined
                          : "noreferrer"
                      }
                      download={
                        activeFolder.download
                          ? "Mudassir-Imam-Resume.pdf"
                          : undefined
                      }
                    >
                      {activeFolder.action}
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </DetailCard>
            )}
          </FolderStage>
        </FolderColumn>

        {/* =============================================
            RIGHT: COLOUR PHOTO + CONTACT FORM
            ============================================= */}

        <div>
          <ColumnLabel>
            <span>Leave a message</span>
            <strong>MI / 001</strong>
          </ColumnLabel>

          <ContactCard>
            <div className="card-header">
              <span>Independent / Creative</span>
              <span>Contact file · 2026</span>
            </div>

            <ProfileStrip>
              <div className="profile-photo">
                <span className="photo-fallback">
                  MI.
                </span>

                <img
                  src="/images/contact/id-photo.jpeg"
                  alt="Portrait of Mudassir Imam"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div>
                <p className="profile-label">
                  The person behind the work
                </p>

                <h3>Mudassir Imam</h3>

                <p className="profile-role">
                  Software Engineer
                  <br />
                  Designer · Storytelling &amp; More
                </p>

                <p className="profile-code">
                  ID / MI-86709
                </p>
              </div>
            </ProfileStrip>

            <FormPanel>
              <p className="form-kicker">
                Start a conversation
              </p>

              <h4>Tell me what's on your mind.</h4>

              <p className="form-intro">
                A project, a collaboration, an opportunity, or
                simply an interesting idea. Write me a note.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <label>
                    Your name

                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="How should I call you?"
                      value={form.name}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    Your email

                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={updateField}
                      required
                    />
                  </label>
                </div>

                <label>
                  What's this about?

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={updateField}
                  >
                    <option>Project inquiry</option>
                    <option>Job opportunity</option>
                    <option>Creative collaboration</option>
                    <option>Filmmaking</option>
                    <option>Just saying hello</option>
                  </select>
                </label>

                <label>
                  Your message

                  <textarea
                    name="message"
                    placeholder="Give me a little context..."
                    value={form.message}
                    onChange={updateField}
                    required
                  />
                </label>

                <button
                  className="submit-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>
                    {isSubmitting
                      ? "Sending message..."
                      : "Send the message"}
                  </span>

                  <span className="send-arrow">
                    {isSubmitting ? "…" : "↗"}
                  </span>
                </button>

                {formStatus && (
                  <p
                    className={`form-status ${isError ? "error" : ""}`}
                    role="status"
                    aria-live="polite"
                  >
                    {formStatus}
                  </p>
                )}

                <p className="form-note">
                  Your message is submitted through the
                  configured form service.
                </p>
              </form>

              <div className="form-bottom">
                <span>Code · Design · Story</span>
                <span>Open to collaboration</span>
              </div>
            </FormPanel>
          </ContactCard>
        </div>
      </MainGrid>

      <Footer>
        <span>
          Thoughtfully made. Open to thoughtful people.
        </span>

        <div className="footer-links">
          <a href={`mailto:${CONTACT_EMAIL}`}>
            Email ↗
          </a>

          <a
            href="https://www.linkedin.com/in/mudassir-imam-54ba03273/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Mudas1003"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </Footer>
    </Section>
  );
}

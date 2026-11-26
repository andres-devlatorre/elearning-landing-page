---
name: Behow
description: A composed teaching-film landing world for an e-learning studio, with a quiet warm-neutral ground, near-black ink, one deep-teal field and numbered 16:9 frames between sprocket rows.
colors:
  ink: "#161b26"
  ink-hover: "#2a3142"
  ink-soft: "#535a68"
  ink-faint: "#666c7a"
  teal: "#1e5b57"
  ochre: "#c4973a"
  ochre-tint: "#f3ead8"
  ochre-ink: "#6b4f14"
  ground: "#f6f5f3"
  ground-tint: "#efeeea"
  panel: "#ffffff"
  leader: "#eceae6"
  line: "rgba(22, 27, 38, .12)"
  line-strong: "rgba(22, 27, 38, .22)"
typography:
  display:
    fontFamily: "Geist, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Geist, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Geist, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Geist, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Geist, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
  frame-number:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.06em"
  wordmark:
    fontFamily: "Spectral SC, Iowan Old Style, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.03em"
  end-title:
    fontFamily: "Spectral SC, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(3.4rem, 8vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  chip: "6px"
  sm: "8px"
  md: "12px"
  full: "50%"
spacing:
  gutter: "24px"
  strip-gap: "clamp(16px, 2vw, 24px)"
  cta-gap: "12px"
  sprocket-band: "18px"
  section: "clamp(80px, 10vw, 128px)"
  nav-height: "68px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.panel}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "46px"
  button-quiet-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  button-small:
    padding: "0 16px"
    height: "40px"
  button-large:
    padding: "0 26px"
    height: "52px"
  result-chip:
    backgroundColor: "{colors.ochre-tint}"
    textColor: "{colors.ochre-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "7px 10px"
  panel-list:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.md}"
    padding: "0 clamp(20px, 3vw, 36px)"
  frame-screen:
    rounded: "{rounded.md}"
  end-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.md}"
    padding: "clamp(32px, 5vw, 64px)"
  nav:
    textColor: "{colors.ink-soft}"
    height: "{spacing.nav-height}"
---

# Design System: Behow

## Overview

**Creative North Star: "The Screening Room"**

Behow presents a course the way a teaching film presents a lesson: a title card, three numbered frames on a run of film, a screening, and "The End". This revision keeps that structure but plays it with the composure of a serious software page. The ground is a quiet warm neutral, text is near-black navy ink set in one medium-weight grotesque, panels are white with hairline borders, and colour arrives as flat fields inside the frames and one deep-teal band, never as decoration around them.

Density is calm and generous: centred title card, wide section padding, one idea per row. Film is carried by structure rather than ornament: 16:9 frames, dashed sprocket rows, a film-leader countdown where a video is still missing, monospaced measurement labels, and a small-caps serif reserved for the wordmark and the closing title. Motion is stepped, like film advancing a frame at a time.

The user moved this world away from a friendly, playful version: no playful display face, no saturated action colour, no dark theme, no neon, no cream-and-serif page.

**Key Characteristics:**
- Warm-neutral ground (#f6f5f3) with white panels and hairline ink borders.
- One typeface family doing the talking: Geist at 500 for headings, 400 for body.
- Geist Mono uppercase for measurements and labels only; Spectral SC for the wordmark and "The End" only.
- Numbered 16:9 frames between dashed sprocket rows, each a flat colour field with a one-stroke scene.
- Near-black 8px-radius buttons; a single deep-teal screening band.
- Stepped, frame-advance motion that disappears entirely under reduced motion.

## Colors

A restrained neutral palette of ink on warm paper, with one deep teal field and a muted ochre used sparingly.

### Primary
- **Projection Ink** (`ink`): text, every primary button, the second frame's field, the focus ring and text selection. It is the action colour; the page has no separate bright accent.
- **Lifted Ink** (`ink-hover`): primary button hover only.

### Secondary
- **Screening Teal** (`teal`): the first frame's field and the full-bleed screening band behind the trailer, with white text on it. Also the FAQ question hover colour.

### Tertiary
- **Muted Ochre** (`ochre`): the third frame's field, drawn with ink strokes and an ink frame number.
- **Ochre Tint** (`ochre-tint`) with **Ochre Ink** (`ochre-ink`): the result chip on client screenings, the only other place ochre appears.

### Neutral
- **Warm Ground** (`ground`): page background, nav (translucent), mobile menu and booking dock.
- **Tint Ground** (`ground-tint`): alternate section background (services, about).
- **Panel White** (`panel`): ruled list panels, the end card, the play button, text on ink.
- **Leader Grey** (`leader`): the film-leader placeholder field and its caption bar.
- **Soft Ink** (`ink-soft`): secondary text, leads, nav links, captions.
- **Faint Ink** (`ink-faint`): tertiary mono labels (timings, client names) on light grounds.
- **Hairline** (`line`): panel borders, nav and footer rules.
- **Strong Hairline** (`line-strong`): sprocket dashes, dashed row dividers, quiet-button borders.

### Named Rules
**The One Field Rule.** Teal is a field, not a highlight. It fills a frame or a full band; outside those it appears only as a hover colour on text.

**The Ink Is The Action Rule.** Every primary action is near-black ink on white text. No colour button competes with it.

**The Sparing Ochre Rule.** Ochre appears in the third frame and the result chip, nowhere else.

## Typography

**Display Font:** Geist (with Helvetica Neue, Arial)
**Body Font:** Geist (with Helvetica Neue, Arial)
**Label/Mono Font:** Geist Mono (with ui-monospace, SF Mono, Menlo)
**Title Font:** Spectral SC (with Iowan Old Style, Georgia), wordmark and "The End" only

**Character:** A plain, tightly tracked grotesque at medium weight gives the page its seriousness; the mono labels read as slate and timecode markings; the small-caps serif is the film's title card, used twice.

### Hierarchy
- **Display** (500, clamp 2.75 to 5rem, 1.02, -0.04em): the title-card headline, centred, max 12em, balanced.
- **Headline** (500, clamp 2 to 3.1rem, 1.05, -0.03em): section headings.
- **Title** (500, 1.375rem, 1.2, -0.02em): frame titles and service rows (services scale to clamp 1.25 to 1.5rem).
- **Title Small** (500, 1.125rem, 1.4, -0.01em): FAQ questions and client quotes.
- **Lead** (400, clamp 1.125 to 1.25rem, 1.55): subline under headings in soft ink, max 36em.
- **Body** (400, 1.0625rem, 1.6): running text, kept to 34 to 40em in practice.
- **Label** (Geist Mono 500, 0.75 to 0.8125rem, 0.04 to 0.05em, uppercase): timings, client names, result chips, placeholder captions.
- **Frame Number** (Geist Mono 500, 0.8125rem, 0.06em): the digit in each frame's corner, rendered with a leading zero.

### Named Rules
**The One Weight Rule.** Headings are Geist 500, never bold. Hierarchy comes from size and tracking.

**The Two Title Cards Rule.** Spectral SC sets the wordmark and "The End" title (plus the footer wordmark and the name in the about heading). It never sets a section heading or body text.

**The Measurement Rule.** Mono uppercase is for measurements and labels attached to content: numbers, timings, names, results. It never sits above a heading as an introducer.

## Layout

Content sits in a 1200px container (960px for the screening and end card) with a 24px gutter. The title card is centred; sections below are left-aligned with a heading block capped at 760px. Section padding is clamp(80px, 10vw, 128px); the hero and screening are slightly tighter.

The hero strip is a three-column grid (max 1152px) with a clamp(16px, 2vw, 24px) gap. Each frame reserves an 18px band above its screen for the sprocket row and repeats one under it; the rows run continuously across the gaps. Client screenings use the same frame-on-strip grammar in a three-column grid from 720px.

Breakpoints: at 720px and up, services become a two-column row (title, description) and screenings go to three columns; at 900px and up, FAQ and about split into two columns; at 860px and below, the nav collapses to a menu toggle; at 720px and below, hero frames become rows with a 124px thumbnail beside the text, sprocket rows are hidden, the hero buttons stack, and a fixed booking dock appears once the hero buttons scroll away.

## Elevation & Depth

A mostly flat system: depth comes from white panels on the warm ground and from hairline borders. One soft shadow lifts the 16:9 screens so they read as projected images.

### Shadow Vocabulary
- **Screen lift** (`box-shadow: 0 1px 2px rgba(22, 27, 38, .06), 0 12px 32px -16px rgba(22, 27, 38, .22)`): hero frames, client screening videos, the end card.
- **Feature screen** (`box-shadow: 0 30px 60px -32px rgba(5, 20, 20, .8)` with a 1px white 22% border): the trailer on the teal band only.
- **Play button** (`box-shadow: 0 10px 24px -10px rgba(0,0,0,.45)`): the round play control on a video.
- **Title-card inset** (`inset 0 0 0 10px #fff, inset 0 0 0 11px` hairline): the inner rule that makes the end card read as a title card.

### Named Rules
**The Screens Only Rule.** Shadows belong to 16:9 screens. Panels, buttons and list rows stay flat with hairlines.

## Shapes

Gently rounded and consistent: 12px on every screen, panel and card; 8px on buttons; 6px on the result chip; a full circle for the play button; a 4px radius on focus outlines. Mobile hero thumbnails tighten to 10px. Dividers inside panels are dashed strong hairlines, echoing the sprocket dashes; outer panel borders are solid hairlines. The sprocket row is a 6px-tall dash pattern, 8px dash in a 16px period, in the strong hairline colour.

## Components

### Buttons
Composed and quiet.
- **Shape:** gently curved (8px), 1px border, min height 46px.
- **Primary:** ink fill, white text, Geist 500 1rem, 0 20px padding; hover lifts to Lifted Ink; active nudges down 1px.
- **Quiet:** transparent with a strong-hairline border and ink text; hover fills white and the border goes ink. Used for "Watch the trailer" with a 1em inline SVG play icon.
- **Sizes:** small (40px, 0 16px, 0.9375rem) in the nav; large (52px, 0 26px, 1.0625rem) in the end card; block width in the mobile dock.
- **Focus:** 2px ink outline, 3px offset.

### Chips
- **Result chip:** Ochre Tint ground, Ochre Ink mono uppercase label, 6px radius, 7px 10px padding. Sits above a client quote.

### Cards / Containers
- **Service card** (What we make): white panel, 1px hairline, 12px radius, 14px inset; opens on a 16:9 leader-grey (#eceae6) screen with an 8px radius holding a one-stroke ink drawing (2px stroke, 74% width), then a 1.375rem Geist 500 title and soft-ink body. Four across from 1080px, two from 720px, one below. Hover lifts 2px, strengthens the hairline and adds the screen shadow.
- **Ruled panel** (FAQ): white, 1px hairline, 12px radius, horizontal padding only; rows are divided by dashed strong hairlines, last row undivided.
- **FAQ rows:** disclosure rows with a CSS-drawn chevron (1.5px ink strokes) that rotates open over 0.3s.

### Navigation
- Sticky, 68px, translucent warm ground with blur and a bottom hairline. Spectral SC wordmark at left; soft-ink 0.9375rem links that go ink on hover; small primary "Book a call". Below 860px a three-line toggle (48px target) opens a full-width stacked menu with hairline-separated links.

### Numbered Frame (signature)
A 16:9 screen in a flat field (teal, ink, ochre), 12px radius, screen-lift shadow, with a one-stroke white line drawing (2.5px, round caps; ink on ochre) at 68% width. A mono frame number sits in the top-left corner with a leading zero. Under the screen: title, one-line ask in soft ink, a mono uppercase timing in faint ink. Frames sit between sprocket rows. On load the strip advances into place in three stepped jumps (0.84s, steps(3, jump-none), 0.15s delay); on mobile each row steps in from 40px in two jumps, staggered 0.12s.

### Video Screen and Film Leader
A 16:9 ink screen, 12px radius, loaded on click. With a real video: thumbnail, a 72px white round play button that scales to 1.06 on hover while the image scales to 1.02. Without one: a Leader Grey field with a film-leader countdown (two thin rings, crosshairs, a mono "3") and a mono uppercase "coming soon" caption bar along the bottom edge.

### The End Card
A white 16:9 card with the title-card inset rule and screen lift. "The End" in Spectral SC at end-title scale, a headline, a soft-ink sub, and a large primary button. Contact links sit beneath at 44px targets. On mobile the card drops its aspect ratio.

### Booking Dock
Mobile only (720px and below): a fixed bottom bar on translucent warm ground with a top hairline and a full-width primary button. Slides up once the hero buttons leave the screen and steps aside while the end card is in view.

## Do's and Don'ts

### Do:
- **Do** make every primary action an ink (#161b26) button with an 8px radius; use the quiet outlined button for the one secondary action.
- **Do** keep headings in Geist 500 with negative tracking (-0.02 to -0.04em).
- **Do** carry the film through structure: 16:9 frames, sprocket rows, mono frame numbers and timings, the film leader for missing video.
- **Do** keep colour inside fields: teal for the first frame and the screening band, ochre for the third frame and result chips.
- **Do** put shadows only on 16:9 screens and keep panels flat with hairline borders.
- **Do** make motion stepped like film advancing, and remove it under prefers-reduced-motion.

### Don't:
- **Don't** introduce a playful or condensed display face, or set headings bold.
- **Don't** add a saturated action colour; ink is the action.
- **Don't** add a dark theme or neon accents.
- **Don't** extend Spectral SC beyond the wordmark and "The End" title; no cream-and-serif page.
- **Don't** place a mono uppercase label above a heading as an eyebrow.
- **Don't** spread ochre beyond the third frame and the result chip.

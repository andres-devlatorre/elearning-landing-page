---
name: Behow
description: A teaching-film landing world for an e-learning studio, with a projector-screen ground, flat colour fields, and numbered 16:9 frames.
colors:
  mustard: "#e9b21c"
  mustard-bright: "#f2c033"
  mustard-deep: "#c9950a"
  teal: "#1f7a76"
  navy: "#1a2a4a"
  navy-raised: "#24375e"
  navy-soft: "#4a5670"
  screen: "#f5f6f2"
  paper: "#ffffff"
  tint: "#e3ede9"
  line: "rgba(26, 42, 74, .16)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Avenir Next Condensed, sans-serif"
    fontSize: "clamp(3rem, 8.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 85"
  display-end:
    fontFamily: "Bricolage Grotesque, Avenir Next Condensed, sans-serif"
    fontSize: "clamp(4rem, 11vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontVariation: "\"wdth\" 85"
  headline:
    fontFamily: "Bricolage Grotesque, Avenir Next Condensed, sans-serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 85"
  title:
    fontFamily: "Bricolage Grotesque, Avenir Next Condensed, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.015em"
    fontVariation: "\"wdth\" 85"
  quote:
    fontFamily: "Bricolage Grotesque, Avenir Next Condensed, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Alegreya Sans, Gill Sans, sans-serif"
    fontSize: "clamp(1.2rem, 1.9vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Alegreya Sans, Gill Sans, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Alegreya Sans, Gill Sans, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  label:
    fontFamily: "Alegreya Sans SC, Alegreya Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
  wordmark:
    fontFamily: "Alegreya Sans SC, Alegreya Sans, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.015em"
rounded:
  frame-sm: "12px"
  frame: "16px"
  frame-lg: "22px"
  pill: "999px"
spacing:
  gutter: "24px"
  container: "1200px"
  container-mid: "960px"
  section: "clamp(80px, 10vw, 128px)"
  section-head: "clamp(40px, 5vw, 60px)"
  nav-height: "76px"
components:
  button-primary:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.mustard-bright}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "52px"
  button-quiet-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.screen}"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.screen}"
    rounded: "{rounded.pill}"
    padding: "0 44px"
    height: "62px"
  button-navy-hover:
    backgroundColor: "{colors.navy-raised}"
  button-small:
    padding: "0 22px"
    height: "44px"
  result-chip:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  frame-screen:
    rounded: "{rounded.frame}"
  video-play:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.navy}"
    size: "84px"
  nav:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.navy-soft}"
    height: "{spacing.nav-height}"
  end-card:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.navy}"
    rounded: "{rounded.frame-lg}"
    padding: "clamp(32px, 5vw, 64px)"
---

# Design System: Behow

## Overview

**Creative North Star: "The Teaching Film"**

Behow is presented as a short educational film. The page opens on a title card, moves through numbered frames, screens the work on a coloured field, and closes on "The End". Every surface sits on a projector-screen white ground with navy ink, and the three saturated colours (mustard, teal, navy) never appear as decoration: each one owns a whole region, a whole frame, or the single action.

Density is calm and generous. Sections breathe on large vertical padding, type sits centred on title cards and left-aligned in reading sections, and long copy is held to readable measures (32 to 40em). Craft lives in a few authored devices: the condensed, heavy grotesque at title-card scale, true small-caps labels, rounded 16:9 screens with numbered corners, faint sprocket perforations above and below the hero frames, and a stepped filmstrip advance on load.

The world refuses a dark theme, neon, and the cream-and-serif look it replaced.

**Key Characteristics:**
- Projector-screen white ground (`screen`) with navy ink; pale teal (`tint`) for alternating reading sections.
- Mustard, teal and navy used as flat fields that own whole regions or frames.
- Mustard is the single action colour.
- Bricolage Grotesque at weight 800, width 85, for every heading; Alegreya Sans for reading; Alegreya Sans SC for labels and the wordmark.
- Rounded 16:9 screens with numbered corners as the recurring container.
- Stepped, frame-by-frame motion, all of it removed under reduced motion.

## Colors

A cool projector-white ground with navy ink, lit by three flat fields: warm mustard, mid teal, and deep navy.

### Primary
- **Projector Mustard** (`mustard`): the action colour. It fills every Book a call button, the play button on every video, and the result chips on client stories. As a field it owns the closing "The End" section and the third hero frame (Launch). Text on it is always navy.
- **Lit Mustard** (`mustard-bright`): hover state of the mustard button only.
- **Burnt Mustard** (`mustard-deep`): source hue of the warm glow under mustard buttons; not used as a fill.

### Secondary
- **Classroom Teal** (`teal`): the screening field behind the trailer and the first hero frame (Brief). White text on it passes AA. Also the hover colour of FAQ questions.

### Neutral
- **Ink Navy** (`navy`): all headings and body ink, the second hero frame (Produce), the navy button used on the mustard field, focus rings, and the 2px top rules that open lists.
- **Raised Navy** (`navy-raised`): hover state of the navy button.
- **Soft Navy** (`navy-soft`): secondary text: leads, sublines, frame asks, list descriptions, nav links, footer.
- **Projector Screen** (`screen`): the page ground, the nav (translucent with blur), the end card, the mobile dock.
- **Paper White** (`paper`): the 10px mat around the featured trailer and white text and strokes on teal and navy fields.
- **Pale Teal Field** (`tint`): alternating section ground (services, about).
- **Hairline** (`line`): 1px dividers between list rows, section rules, nav and footer borders.

### Named Rules
**The Colour Field Rule.** Mustard, teal and navy appear as flat fields that own a whole region or a whole frame. They are not used as tinted backgrounds for small cards, gradients, or sprinkled accents.

**The One Action Rule.** Mustard means "book a call". Every primary action is mustard with navy text; on the mustard field the button flips to navy with screen-white text. No other element competes in mustard except the play button and result chips, which are the proof the action rests on.

## Typography

**Display Font:** Bricolage Grotesque, variable, self-hosted (with Avenir Next Condensed, sans-serif)
**Body Font:** Alegreya Sans, self-hosted (with Gill Sans, sans-serif)
**Label Font:** Alegreya Sans SC, self-hosted (with Alegreya Sans)

**Character:** A heavy, slightly condensed grotesque reads like the title cards of an old classroom film; the humanist Alegreya Sans keeps the reading warm and plain; true small caps from the same family give labels and the wordmark a printed, credit-roll quality without shouting.

### Hierarchy
- **Display** (800, clamp(3rem, 8.4vw, 6rem), line-height 1, width 85): the hero title card headline only, centred, max 11.5em.
- **Display End** (800, clamp(4rem, 11vw, 7.5rem), line-height 0.9): "The End" on the closing card only.
- **Headline** (800, clamp(2.1rem, 4.6vw, 3.5rem), line-height 1): section headings.
- **Title** (800, 1.6rem; 1.75rem on hero frames; clamp(1.6rem, 2.6vw, 2.1rem) on service rows; 1.3rem on FAQ questions at weight 700): item headings.
- **Quote** (600, 1.35rem, line-height 1.3): client quotes in the display face.
- **Lead** (400, clamp(1.2rem, 1.9vw, 1.4rem)): sublines under headings, in soft navy, max 32 to 34em.
- **Body** (400, 1.1875rem, line-height 1.6): reading text, max 34 to 40em.
- **Label** (Alegreya Sans SC 700, 0.95rem, letter-spacing 0.05em): frame timings, result chips, client names (1.2rem), pending-video notes.
- **Wordmark** (Alegreya Sans SC 800, 2rem): "behow", set lowercase so it renders in small caps.

### Named Rules
**The Title Card Rule.** Headings are always Bricolage Grotesque at weight 800 with `"wdth" 85` and negative tracking (-0.015em to -0.04em). Reading text never uses the grotesque.

**The True Small Caps Rule.** Labels use the Alegreya Sans SC face, not uppercase text with wide tracking. There is no `text-transform: uppercase` in the system.

## Layout

A single-column narrative sequence. Content sits in a 1200px container with a 24px side gutter (960px for the trailer section). Sections use clamp(80px, 10vw, 128px) block padding and alternate between the screen ground, the pale teal field, and a hairline-ruled screen section; the trailer section (teal) and The End (mustard) are full-bleed colour fields.

The hero is centred: headline, subline, two buttons, then the three-frame strip in a 3-column grid (gap clamp(16px, 2.4vw, 32px), max 1152px). Lists (services, FAQ) open with a 2px navy rule and separate rows with 1px hairlines rather than cards. Client stories sit in three columns from 720px.

Breakpoints: 720px (client stories go to 3 columns, service rows to a 2-column label/description grid), 860px (nav collapses to a toggle menu below), 900px (FAQ and about go to two columns). Below 720px the hero strip becomes a stacked list with a 132px thumbnail frame beside its text, and a mustard Book a call dock fixes to the bottom of the viewport.

## Elevation & Depth

Mostly flat, with soft projected-light shadows under screens. Shadows use a large blur with a negative spread so they pool below the object rather than outlining it, and they are tinted navy (or warm brown under mustard) rather than black. The nav uses a translucent screen ground with backdrop blur. The closing card uses a double inset border (a screen-white mat, then a faint navy line) to read as a framed title card.

### Shadow Vocabulary
- **Screen** (`box-shadow: 0 18px 36px -18px rgba(26, 42, 74, .35)`): hero frames and the about photo.
- **Feature screen** (`box-shadow: 0 34px 60px -30px rgba(10, 30, 40, .7)`): the featured trailer on the teal field.
- **Mustard glow** (`box-shadow: 0 10px 20px -12px rgba(201, 149, 10, .9)`): primary buttons at rest; deepens on hover.
- **End card** (`box-shadow: 0 30px 50px -30px rgba(90, 60, 0, .55), inset 0 0 0 10px #f5f6f2, inset 0 0 0 12px rgba(26, 42, 74, .25)`): the closing title card on the mustard field.

### Named Rules
**The Projected Light Rule.** Shadows are soft, negative-spread and tinted toward the surface below. No hard offset shadows and no black shadows.

## Shapes

Rounded rectangles and pills. Screens use a gently rounded 16px corner (12px for the mobile thumbnail frames, 22px for the featured trailer and the end card). Every button and chip is a full pill (999px); the play button is a circle. Video and frame screens keep a 16:9 aspect ratio; the founder photo is the one 6:7 exception. Illustrations inside frames are drawn in a single round-capped 3.5px stroke, white on teal and navy, navy on mustard.

### Named Rules
**The Numbered Screen Rule.** A screen is a rounded 16:9 rectangle with a number in its top-left corner, set in the display face at weight 800 (1, 2, 3 on hero frames; 00 to 03 on videos).

## Components

### Buttons
Confident pills with a warm lift.
- **Shape:** full pill (999px), 2px border matching the fill, 52px tall, 30px side padding.
- **Primary:** mustard fill, navy text, Alegreya Sans 700 at 1.1rem, mustard glow shadow.
- **Hover / Focus:** brightens to lit mustard and lifts 2px with a deeper glow (0.25s, expo ease-out); returns to rest on press. Focus is a 3px navy outline with 3px offset.
- **Quiet:** transparent with a navy border and navy text; fills navy with screen text on hover. Used for the secondary hero action.
- **Navy:** navy fill and screen text, used only on the mustard field.
- **Sizes:** small (44px, nav), large (62px, 44px padding, end card), block (full width, mobile dock). An inline SVG icon may lead the label at 1.1em.

### Chips
- **Result chip:** mustard pill, navy small-caps label (0.95rem, 0.04em tracking), 8px by 14px padding. Sits above each client quote.

### Cards / Containers
- **Hero frame:** a 16:9 screen in teal, navy or mustard with a numbered corner and a one-stroke illustration, followed by a title, a soft-navy "what it asks of you" line, and a small-caps timing label. No card chrome around the text.
- **List rows (services, FAQ):** no cards. A 2px navy top rule opens the list; rows are separated by 1px hairlines with 22 to 28px block padding.
- **End card:** a screen-white 16:9 card with a 3px navy border, 22px corners and the double inset mat, centred on the mustard field.

### Navigation
- **Style:** sticky, 76px tall, translucent screen ground with blur and a hairline bottom border. Small-caps wordmark left; soft-navy links (Alegreya Sans 500) with 32px gaps and a small mustard Book a call right.
- **States:** links darken to navy and underline on hover.
- **Mobile (860px and below):** a three-line toggle (48px target) that morphs into an X; the menu drops below the bar as stacked hairline-separated links with the button at the foot.

### Video Screen
The signature proof container. A rounded 16:9 navy screen with a soft top-left light sheen, a numbered corner, and a centred 84px mustard play button that scales up on hover. Clicking swaps in a privacy-mode YouTube embed. While an ID is still a placeholder, the screen shows a film-leader countdown (concentric rings, crosshairs, a large "3") on a pale ground, with a small-caps note in a hairline-topped band along the bottom edge, instead of a broken player.

### Filmstrip Strip
The hero's three frames run between two rows of faint sprocket perforations (8px-tall repeating 10px navy dashes at 20% opacity, one row above the screens and one below, bridging the gaps so the three read as one run of film) and advance in on load in three stepped jumps (0.84s, `steps(3, jump-none)`). On mobile the perforations are dropped and each frame instead steps in over two steps, staggered by 0.12s.

## Do's and Don'ts

### Do:
- **Do** keep the page on the projector-screen ground with navy ink, and give mustard, teal and navy whole regions or whole frames.
- **Do** make every Book a call mustard with navy text, flipping to the navy button only on a mustard field.
- **Do** set every heading in Bricolage Grotesque 800 at `"wdth" 85` with negative tracking, and every label in Alegreya Sans SC.
- **Do** present video and process content as rounded 16:9 screens with numbered corners.
- **Do** use stepped timing (`steps()`) for signature motion and the expo ease-out `cubic-bezier(.16, 1, .3, 1)` for state changes, and remove all of it under `prefers-reduced-motion`.
- **Do** separate list content with a 2px navy top rule and 1px hairlines instead of cards.

### Don't:
- **Don't** introduce a dark theme, neon colour, or a cream ground with a serif face.
- **Don't** use uppercase-tracked eyebrows or kickers above headings; small-caps labels sit below or beside the content they describe.
- **Don't** use hard offset shadows or black drop shadows.
- **Don't** use the saturated colours as gradients or as small tinted card backgrounds.
- **Don't** set body copy in the grotesque or headings in the humanist face.
- **Don't** use glyph or icon-font icons; icons are inline SVG.

# SPECTRA Design Direction

## Three Directions Considered

### Theme Name: Orbital Lab Console
Very Brief Intro: A restrained government-aerospace interface that combines deep navy technical surfaces, white analysis paper, and precise orange instrumentation accents. The tone is operational, calm, and research-led.
Probability: 0.07

### Theme Name: White Mission Brief
Very Brief Intro: A light-first editorial system modeled on mission documentation and engineering briefs, with navy type, orange annotations, and large breathable sections. The tone is transparent, formal, and report-oriented.
Probability: 0.03

### Theme Name: Signal Cartography
Very Brief Intro: A dark scientific workspace inspired by spectrum maps and RF laboratory instruments, using restrained linework and measured data visualizations. The tone is analytical and quietly technical.
Probability: 0.08

## Selected Direction: Orbital Lab Console

### Design Movement
Contemporary aerospace instrumentation and Indian public-sector engineering systems: functional modernism, information design, and laboratory-grade clarity without decorative excess.

### Core Principles
1. Every element must communicate system state, workflow progress, or an actionable next step.
2. Use asymmetric working layouts with a stable navigation spine, not a dense wall of dashboard cards.
3. Treat whitespace, thin rules, and compact metadata as structural instruments.
4. Reserve orange for activation, progression, attention, and decisive actions.

### Color Philosophy
Deep navy establishes the trusted technical shell and keeps the interface grounded in mission-control seriousness. White and off-white surfaces provide an analysis-paper contrast for charts, tables, and reports. ISRO-inspired orange is scarce by design: it marks the active step, primary action, progress, and important signal events so the eye always knows what is live. Restrained green and red are limited to system status semantics.

### Layout Paradigm
A persistent left navigation rail and compact header frame a breathable workspace. Primary pages use a three-zone analysis composition—progress rail, central work area, and signal context—while dashboard pages use a few wide sections rather than uniform card grids. On mobile, the navigation becomes a drawer and the three zones stack in workflow order.

### Signature Elements
- Instrument orange hairlines and step markers that behave like calibrated indicators.
- Small uppercase section labels paired with monospace technical metadata.
- A subtle orbital-grid texture used sparingly in navy shell areas, never behind dense body copy.

### Interaction Philosophy
Interactions should feel deliberate and reversible. Buttons show clear pressed states, navigation explains active location, workflow steps remain unavailable until logically ready, and placeholder actions report that the feature is planned rather than pretending to perform it. Theme switching preserves the same hierarchy in both modes.

### Animation
Use short 160–240ms transitions with a strong ease-out curve. Animate opacity and transform only. On page entry, reveal the title and primary work surface in a small stagger; on workflow progression, move the active orange indicator and update supporting metadata without shifting the layout. Respect reduced-motion preferences and keep frequent table/navigation interactions nearly instant.

### Typography System
Use Inter for readable interface text and IBM Plex Mono for frequencies, analysis IDs, signal values, and processing metadata. Page titles are compact and medium-bold rather than oversized. Section labels are uppercase with increased tracking. Technical values use monospace at a slightly smaller size to create an instrument-readout feeling without harming readability.

### Brand Essence
SPECTRA is a trustworthy RF intelligence workspace for analysts, researchers, and engineering teams who need raw signals turned into explainable classifications through a disciplined eight-step workflow. Personality: precise, composed, mission-ready.

### Brand Voice
Headlines are direct and operational; CTAs use clear verbs; microcopy explains state without hype. Avoid generic filler and exaggerated AI claims.

Example lines:
- “From raw RF signals to reliable intelligence.”
- “Advance when the signal is ready for the next instrument.”

### Wordmark & Logo
Use a compact geometric mark based on three nested spectrum arcs intersected by a vertical calibration bar, paired with a custom-spaced SPECTRA wordmark. The symbol must remain recognizable at favicon size and should be used without text as the app icon.

### Signature Brand Color
ISRO Orange — `#F58220`.

## Implementation Notes

The site should include a clean login view, dashboard console, signal analysis workspace, eight-step workflow, result/report views, model learning area, settings, help, collapsible sidebar, responsive mobile navigation, and persistent light/dark theme support. The visual system stays within navy, white/off-white, and orange, with restrained semantic status colors. The application is a functional front-end prototype; it must not imply real government authentication or fabricate user reviews, ratings, or testimonials.

## Style Decisions

The primary console frame uses a deep navy navigation and header shell; light surfaces are reserved for active analysis, tables, charts, and reports. The SPECTRA identity is carried by the nested spectrum-arc calibration-bar mark and custom-spaced wordmark in the application frame. Orange `#F58220` is reserved for active workflow state, primary actions, progress, and important signal events; it is not used as a decorative glow or general-purpose fill.

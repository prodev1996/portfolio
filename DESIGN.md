# Portfolio design direction

Reading this as a developer portfolio for hiring teams and clients, with a playful, experimental visual language and tangible project work.

- DESIGN_VARIANCE: 6. Aligned image-led project grid, tactile portrait, expressive typography.
- MOTION_INTENSITY: 7. Type entrance, pointer spring, filter transitions, section reveals, smooth anchor navigation.
- VISUAL_DENSITY: 5. Compact hero and continuous section spacing. Four featured projects; two secondary projects; concise biography; direct contact.
- Foundation: existing Next.js App Router, Tailwind v4, native CSS, installed Framer Motion. No component framework migration.
- Type: Bricolage Grotesque for display, Manrope for text. Self-hosted by next/font.
- Color: citrus, ink, neutral paper. System theme with explicit toggle. Project screenshots retain their own brand colors.
- Shape: 4px media surfaces, full-round controls. Screenshots fill their frames, with a subtle zoom on hover or keyboard focus.
- Motion: transforms and opacity, cleaned-up Lenis instance, reduced-motion support. Native touch scrolling.
- Assets: authentic graduation photographs and actual project screenshots. Data projects clearly identified as synthetic datasets.
- Routes: all six existing project routes and /resume preserved. Legacy section anchors resolve to concise background content.
- Content removed from homepage: repeated recruiter explanations, dense skills and credential grids, duplicated experience descriptions, game launcher, custom cursor, scroll rail, redundant calls to action.
- Flow refinement: reduced hero padding, compact work heading with counted filters, aligned project rows, no colored image mats or rotated previews. Section padding is 28–60px, with no artificial offsets between project columns.

## Research

- https://www.helloelva.com/ : expressive typography, concise navigation, large project imagery.
- https://rauno.me/ : interaction feedback, direct presentation, careful details.
- https://www.creativebloq.com/portfolios/examples-712368 : curated work and distinct project art direction.

## Baseline

Original site: Inter + Space Grotesk, black and amber surfaces, glowing network illustration, round portrait with degree badge, six nav anchors plus resume and duplicate contact action, long repeated content, custom cursor and background game.
Existing project facts, contact integration, PDF, analytics, metadata and route inventory are preserved.

## Writing section

The homepage moves from selected work to background, a two-article Writing preview, and contact. The archive uses typographic rows with small category/date labels, concise summaries, and restrained arrow feedback. It continues the paper-and-ink palette without adding large colored panels or decorative article thumbnails.

Reading pages use a 700px text column, 17px body text, a sticky contents list on larger screens, and horizontal scrolling within code examples and tables. Mobile layouts collapse to one column. Native links, semantic headings, visible focus, live search-result counts, and reduced-motion styles preserve navigation and accessibility. Seven source-linked technology articles form the initial collection.

The Keystatic editor is isolated from public navigation and smooth scrolling. Local drafts have a separate preview route and never enter public listings or the feed; production editing requires explicit GitHub authentication configuration.

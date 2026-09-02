# Design Principles

Two frameworks govern design decisions in this project. Every visual, copy, or
structural change should be checked against both before shipping.

Sources:
- **Perception-First Design (PFD)** — https://github.com/skovalik/perception-first-design
- **Design with Intent** — https://designwithintent.ai/

---

## 1. Perception-First Design

A diagnostic framework grounded in cognitive psychology (~100 peer-reviewed
citations). Instead of debating aesthetics, diagnose **which perceptual layer
fails** and fix layers in order — each one is a gate the visitor must pass
before the next layer matters.

### The five layers (fix in this order)

| Layer | Gate | Rule | Failure mode |
|---|---|---|---|
| **L0 — Cognitive Load** | Working memory holds ~3–5 chunks (Cowan) | Externalize location and parallel-task tracking visibly; never make the visitor hold state in their head | Visitor is overwhelmed and leaves before processing anything |
| **L1 — First Impression** | Visual verdict forms in ~50 ms (Lindgaard 2006) | Key affordances must be discoverable within the first 50 ms on every device | Attention never activates; nothing downstream matters |
| **L2 — Processing Fluency** | Easy to process = feels true | If you break an established schema, replace it with an equally consistent alternative; preserve programmatic access | Trust erodes subconsciously — users can't articulate why they distrust it |
| **L3 — Perception Bias** | Users decide on autopilot, then rationalize | Measure behavior, not survey claims or stated preferences | You design for what people say, not what they do |
| **L4 — Decision Architecture** | Structure shapes choice | Preserve clear navigation control and an obvious path to action | Interested visitors can't find the path to convert |

### Protocol

- **Rule Zero:** do not propose any solution until all 5 layers are analyzed.
- **Three modes:**
  - *Analyze* — walk all 5 layers as predictive lenses; surface cascading consequences.
  - *Solve* — derive requirements R1–R5 bottom-up (L0 first), then propose solutions that satisfy all five filters.
  - *Evaluate* — audit an existing artifact against the layer rubric.
- **The Ralph Loop:** iterate until exit conditions hold under re-evaluation.
  Depth scales with stakes: quick decision ≈ 1 pass, feature spec ≈ 5,
  landing page ≈ 10, systems architecture ≈ 50+.

---

## 2. Design with Intent

A UX strategy system built on one premise: **every design decision should have
a reason.** Good decisions sit where user needs and business clarity align.

### Six positions

1. **Frame the problem** — define the challenge before proposing solutions; understand users within their constraints.
2. **Protect user autonomy** — no dark patterns; never exploit psychology in ways that undermine trust.
3. **Ground decisions in evidence** — research over opinion; align user needs with business goals.
4. **Systems over screens** — design systems and outcomes, not isolated interfaces.
5. **Design for everyone** — a billion people worldwide have a disability; accessibility is a first-class discipline, not a compliance checklist.
6. **Measure what matters** — define success metrics that connect user and business objectives.

### Skill vocabulary (for framing work)

Foundation: `intent` · Strategy: `blueprint`, `investigate`, `strategize` ·
Experience: `articulate` (words), `journey` (end-to-end flows), `organize`
(information architecture), `wireframe` · Quality: `evaluate`, `fortify`
(edge cases beyond the happy path), `include` (accessibility) · Adaptation:
`localize`, `transpose` · Measurement: `measure` · Handoff: `specify` ·
Cross-cutting: `philosopher`, `storytelling`.

Documented anti-patterns to avoid: deceptive practices, addictive design
mechanics, and AI-specific manipulation.

---

## How these combine on this project

For any design change to the portfolio (layout, copy, imagery, navigation):

1. **Frame first** (Design with Intent): state the problem and the reason for the change before touching code.
2. **Diagnose by layer** (PFD): identify which of L0–L4 the current design fails, and fix from L0 upward — never polish L4 while L1 is broken.
3. **Justify every decision** with either a cognitive principle (PFD) or evidence (Design with Intent) — "it looks nicer" is not a rationale.
4. **Check autonomy and accessibility** on every change: no dark patterns, keyboard/screen-reader viable, sufficient contrast.
5. **Re-evaluate after changing** (Ralph Loop): re-audit the layers; fixing one layer often exposes the next failure.

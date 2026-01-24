# fe-utilities

A small, Bootstrap-style CSS utility module using **singular, composable classes** — all safely prefixed with **`fe-`** to avoid conflicts with existing frameworks (Bootstrap, Tailwind, etc) and custom component styles.

This file is intentionally “boring and predictable”:

- one class = one job
- `!important` used consistently so utilities win when applied
- spacing options provided in **rem**, **em**, and **px**
- flex utilities included for quick layout building

---

## Why this exists

Sometimes you want the speed of utility classes **without bringing in a full framework**.

This file gives you the common stuff you reach for constantly:

- spacing (`padding` / `margin`)
- flex + alignment
- sizing helpers
- truncation
- a few accessibility helpers (like `sr-only`)

### The unit philosophy (important)

This module supports a simple rule:

- **`rem` = global layout spacing**
  - scales with the site's root font size
  - consistent across the entire UI (good for page rhythm)

- **`em` = component-internal spacing**
  - scales with the _component’s_ font size
  - perfect for buttons, badges, cards, etc

- **`px` = “absolute nudge” spacing**
  - use when you want fixed, exact spacing (icons, fine-tuning)

This keeps your spacing system consistent:

- the entire page scales together via `rem`
- individual components can scale themselves via `em`

---

## Installation

### Option A: Simple CSS import

Put the file somewhere like:

```

src/styles/fe-utilities.css

```

Then import it:

#### Vite / React / modern bundlers

```js
import "./styles/fe-utilities.css";
```

#### Plain HTML

```html
<link rel="stylesheet" href="/css/fe-utilities.css" />
```

### Option B: npm with css import

Install it in the command line:

```bash
npm i @fraserelliott/fe-utilities
```

Then import it in a javascript file:

```js
import "@fraserelliott/fe-utilities/fe-utilities.css";
```

Absolutely — here’s a clean **Option C** you can drop straight into your README under Installation.

````md
### Option C: Install with npm (CSS + optional presets)

If you want to use the utility CSS **and** the optional JavaScript presets (pre-composed class strings), install via npm and import both.

#### 1) Install

```bash
npm i @fraserelliott/fe-utilities
```
````

#### 2) Import the CSS (required for utilities)

In your app entry file (eg `main.jsx` / `main.js`):

```js
import "@fraserelliott/fe-utilities/fe-utilities.css";
```

#### 3) Import presets (optional)

Presets give you reusable, pre-composed class names you can apply directly via `className`.

```js
import { FEComponents } from "@fraserelliott/fe-utilities/presets";
```

Example:

```jsx
export function Example() {
  return (
    <div className={FEComponents.Card}>
      <button className={FEComponents.Btn}>Click me</button>
    </div>
  );
}
```

#### 4) Optional: use the `cx()` helper

If you want a clean way to combine classes conditionally:

```js
import { cx } from "@fraserelliott/fe-utilities/cx";
```

Example:

```jsx
export function Example({ isPrimary }) {
  return (
    <button className={cx(FEComponents.Btn, isPrimary && "app-btn--primary")}>
      Save
    </button>
  );
}
```

> ✅ Tip: Keep colours and branding project-level (`app-btn--primary`, etc) so the utility library stays neutral and reusable.

---

## Why presets?

The utility classes in `fe-utilities.css` are designed to be **small and composable** — but once you start building real UIs, you’ll often notice you’re repeatedly typing the same “bundles” of classes (eg a card layout, a button base, a flex row with consistent alignment).

That’s what **presets** solve.

Presets are **pre-composed class strings** you can reuse across your app:

- consistent layout and spacing without rethinking it every time
- fewer missing/forgotten utility classes
- faster UI building (especially when prototyping)
- easier to update a common pattern in one place later

Example:

```jsx
import { FEComponents } from "@fraserelliott/fe-utilities/presets";

export function Example() {
  return (
    <div className={FEComponents.Card}>
      <button className={FEComponents.Btn}>Save</button>
    </div>
  );
}
```

Presets are intentionally **optional** — if you prefer writing raw utility classes directly in your markup, you can ignore them completely and just use the CSS file.

---

### Project-specific presets (recommended)

The presets included with this package are meant to be a helpful starting point, not “the one true way”.

In most projects, you’ll quickly end up with your own app-specific variants (brand colours, button styles, layout rules, etc). A good pattern is to create a small file in your project that composes your own presets on top of the base `FEComponents` values.

Example: `src/styles/components.js`

```js
import { FEComponents } from "@fraserelliott/fe-utilities/presets";
import { cx } from "@fraserelliott/fe-utilities/cx";

export const UI = {
  Card: (...extra) => cx(FEComponents.Card, ...extra),

  Btn: (...extra) => cx(FEComponents.Btn, ...extra),
  BtnPrimary: (...extra) => cx(FEComponents.Btn, "app-btn--primary", ...extra),
  BtnSecondary: (...extra) =>
    cx(FEComponents.Btn, "app-btn--secondary", ...extra),
};
```

Usage:

```jsx
import { UI } from "../styles/components";

export function Example() {
  return (
    <div className={UI.Card()}>
      <button className={UI.BtnPrimary()}>Save</button>
      <button className={UI.BtnSecondary()}>Cancel</button>
    </div>
  );
}
```

This keeps the library neutral and reusable, while still letting each project define its own “design language” cleanly.

---

## Naming conventions

All utilities are prefixed:

- `fe-...`

### Spacing naming

These follow the same patterns you’d expect from Bootstrap/Tailwind-ish utilities:

#### Rem-based spacing

- `fe-p-*` / `fe-m-*` for padding/margin
- `fe-px-*` / `fe-mx-*` for left+right
- `fe-py-*` / `fe-my-*` for top+bottom
- `fe-pt-*`, `fe-pr-*`, `fe-pb-*`, `fe-pl-*`
- `fe-mt-*`, `fe-mr-*`, `fe-mb-*`, `fe-ml-*`

#### Em-based spacing

- `fe-p-em-*`
- `fe-m-em-*`

#### Px-based spacing

- `fe-p-px-*`
- `fe-m-px-*`

---

## Utility scale

### Rem spacing scale

| Class | Value     |
| ----- | --------- |
| `*-0` | `0`       |
| `*-1` | `0.25rem` |
| `*-2` | `0.5rem`  |
| `*-3` | `1rem`    |
| `*-4` | `1.5rem`  |
| `*-5` | `2rem`    |

Examples:

```html
<div class="fe-p-3">...</div>
<div class="fe-mt-4">...</div>
<div class="fe-px-2 fe-py-1">...</div>
```

### Em spacing scale

| Class    | Value    |
| -------- | -------- |
| `*-em-0` | `0`      |
| `*-em-1` | `0.25em` |
| `*-em-2` | `0.5em`  |
| `*-em-3` | `1em`    |
| `*-em-4` | `1.5em`  |
| `*-em-5` | `2em`    |

Examples:

```html
<button class="fe-p-em-2">Button</button>
<span class="fe-m-em-1">Inline spacing</span>
```

### Px spacing scale

| Class     | Value  |
| --------- | ------ |
| `*-px-0`  | `0px`  |
| `*-px-4`  | `4px`  |
| `*-px-8`  | `8px`  |
| `*-px-12` | `12px` |
| `*-px-16` | `16px` |
| `*-px-24` | `24px` |

Examples:

```html
<div class="fe-p-px-8">...</div>
<div class="fe-m-px-16">...</div>
```

---

## Included utilities

### Display

- `fe-d-none`
- `fe-d-block`
- `fe-d-inline`
- `fe-d-inline-block`
- `fe-d-flex`
- `fe-d-inline-flex`

---

### Flex direction + wrapping

- `fe-flex-row`
- `fe-flex-column`
- `fe-flex-row-reverse`
- `fe-flex-column-reverse`
- `fe-flex-wrap`
- `fe-flex-nowrap`

---

### Justify content

- `fe-justify-start`
- `fe-justify-center`
- `fe-justify-end`
- `fe-justify-between`
- `fe-justify-around`
- `fe-justify-evenly`

---

### Align items

- `fe-items-start`
- `fe-items-center`
- `fe-items-end`
- `fe-items-stretch`
- `fe-items-baseline`

---

### Align self

- `fe-self-start`
- `fe-self-center`
- `fe-self-end`
- `fe-self-stretch`

---

### Flex grow/shrink

- `fe-grow-0`
- `fe-grow-1`
- `fe-shrink-0`
- `fe-shrink-1`

---

### Gap (rem-based)

- `fe-gap-0`
- `fe-gap-1`
- `fe-gap-2`
- `fe-gap-3`
- `fe-gap-4`
- `fe-gap-5`

Examples:

```html
<div class="fe-d-flex fe-gap-3">
  <div>One</div>
  <div>Two</div>
</div>
```

---

### Sizing

- `fe-w-100`
- `fe-h-100`
- `fe-w-auto`
- `fe-h-auto`
- `fe-min-w-0`
- `fe-min-h-0`

> ✅ `fe-min-w-0` is especially useful inside flex containers to prevent overflow issues.

---

### Text utilities

- `fe-text-left`
- `fe-text-center`
- `fe-text-right`
- `fe-fw-normal`
- `fe-fw-bold`
- `fe-text-muted`
- `fe-nowrap`
- `fe-break-word`
- `fe-truncate`

Example:

```html
<div class="fe-truncate fe-min-w-0">
  A long line that should not wrap and will ellipsis...
</div>
```

---

### Position utilities

- `fe-pos-relative`
- `fe-pos-absolute`
- `fe-pos-fixed`
- `fe-pos-sticky`

---

### Overflow utilities

- `fe-overflow-hidden`
- `fe-overflow-auto`
- `fe-overflow-x-auto`
- `fe-overflow-y-auto`

---

### Border radius

- `fe-rounded-0`
- `fe-rounded-1`
- `fe-rounded-2`
- `fe-rounded-3`
- `fe-rounded-pill`

---

### Accessibility helpers

- `fe-sr-only`

Example:

```html
<button>
  <span class="fe-sr-only">Close modal</span>
  ✕
</button>
```

## Animations / micro-interactions

`fe-utilities` includes a small set of optional animation helpers intended to add subtle “life” to interactive elements, without becoming distracting.

### `.fe-pressable` (hover + press feedback)

Adds a slight lift on hover and a subtle “pressed in” scale on click/tap.

```html
<button class="fe-pressable">Click me</button>
<a class="fe-pressable" href="#">Link</a>
```

Notes:

- Works well on buttons, clickable cards, icon buttons, and links
- Includes a `:focus-visible` outline for keyboard accessibility

---

### `.fe-anim-pulse` (attention / CTA pulse)

A gentle pulse animation intended for _temporary_ emphasis (eg “Next step” buttons).

```html
<button class="fe-anim-pulse">Continue</button>
```

> Tip: Use this sparingly. If everything pulses, nothing feels important.

---

### Reduced motion support

Animations and transitions are automatically disabled when the user has enabled reduced motion in their OS/browser settings:

- `prefers-reduced-motion: reduce`

---

## Example usage patterns

### Card layout

```html
<section class="fe-p-4 fe-d-flex fe-flex-column fe-gap-3">
  <h2 class="fe-m-0">Title</h2>
  <p class="fe-m-0 fe-text-muted">Body content goes here.</p>

  <div class="fe-d-flex fe-justify-between fe-items-center fe-gap-3">
    <button class="fe-p-em-2 fe-rounded-pill">Action</button>
    <span class="fe-truncate fe-min-w-0">
      A long secondary label that should truncate nicely...
    </span>
  </div>
</section>
```

### Simple horizontal toolbar

```html
<div class="fe-d-flex fe-items-center fe-gap-2 fe-py-2 fe-px-3">
  <button class="fe-p-em-2">Back</button>
  <div class="fe-grow-1"></div>
  <button class="fe-p-em-2">Save</button>
</div>
```

---

## Customising

### Change the spacing scale

If you want this to behave like a design system, the best next step is turning it into a small SCSS generator so the spacing scale lives in one place.

If you want, you can also:

- add `fe-gap-em-*` for component gaps
- add `fe-border-*` utilities
- add `fe-shadow-*` utilities
- add `fe-color-*` utilities (or keep colors as component styles)

---

## Notes / limitations

- These utilities intentionally use `!important` so they behave predictably.
- This is _not_ intended to replace a full design system.
- The goal is speed + consistency + no naming collisions.

---

## License

Use it however you like — this is a simple utility module intended for personal projects and portfolios.

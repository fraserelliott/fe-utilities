# fe-utilities.css

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

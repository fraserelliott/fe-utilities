# fe-utilities

A lightweight collection of reusable JavaScript utilities and atomic CSS layout helpers, designed to make styling and composition straightforward.

Works independently or alongside `@fraserelliott/fe-components` and `@fraserelliott/fe-slate`.

---

## Overview

`fe-utilities` provides small, composable tools for building user interfaces without introducing a component framework or enforcing a particular visual theme.

It is designed to be:

- **Lightweight** – focused utilities with minimal abstraction.
- **Composable** – combine styles and class names without repetitive boilerplate.
- **Framework-independent** – JavaScript utilities are not tied to React.
- **Predictable** – later styles override earlier ones.
- **Reusable** – share styling patterns across projects.

The package includes JavaScript composition functions and namespaced CSS utilities for layout and structure.

---

## Installation

```bash
npm install @fraserelliott/fe-utilities
```

---

## JavaScript utilities

### cx

`cx` combines class names into a single string, ignoring falsy values.

```javascript
import { cx } from "@fraserelliott/fe-utilities";

const className = cx(
  "button",
  isActive && "button-active",
  isDisabled && "button-disabled",
  customClassName
);
```

This is particularly useful when class names depend on component state or consumer-provided overrides.

### sx

`sx` combines JavaScript style objects, merging nested objects recursively.

```javascript
import { sx } from "@fraserelliott/fe-utilities";

const baseStyle = {
  padding: "1rem",
  color: "#ffffff",
  border: {
    width: 1,
    style: "solid",
  },
};

const overrideStyle = {
  color: "#e2e8f0",
  border: {
    width: 2,
  },
};

const result = sx(baseStyle, overrideStyle);
```

Result:

```javascript
{
  padding: "1rem",
  color: "#e2e8f0",
  border: {
    width: 2,
    style: "solid"
  }
}
```

Later values take precedence, while properties not explicitly overridden are preserved.

Falsy top-level inputs can also be used for conditional composition:

```javascript
const style = sx(
  baseStyle,
  isActive && activeStyle,
  isDisabled && disabledStyle
);
```

#### Removing properties with null

`sx` supports removing existing properties by setting them to `null` in a later style object.

```javascript
const result = sx(
  {
    padding: "1rem",
    backgroundColor: "#1e293b",
    color: "#ffffff",
  },
  {
    backgroundColor: null,
    color: "#e2e8f0",
  }
);
```

Result:

```javascript
{
  padding: "1rem",
  color: "#e2e8f0"
}
```

This is useful when composing default styles with theme or consumer overrides, particularly when an earlier value should be removed rather than replaced.

**Note:** `null` removes a property during the merge in which it is encountered. It is not preserved as a deletion instruction for subsequent merges.

### feStyle

`feStyle` combines style objects and class names into a single object suitable for spreading onto a JSX element.

```jsx
import { feStyle } from "@fraserelliott/fe-utilities";

const buttonProps = feStyle(
  [
    { padding: "0.5rem 1rem" },
    { borderRadius: "0.5rem" },
  ],
  [
    "button",
    isActive && "button-active",
  ]
);

<button {...buttonProps}>Save</button>
```

The resulting object contains:

```javascript
{
  style: {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem"
  },
  className: "button button-active"
}
```

The `style` property is composed using `sx`, while `className` is composed using `cx`.

This is particularly useful when building reusable components that combine default styling, theme styling, and consumer overrides.

---

## CSS layout utilities

`fe-utilities` also provides namespaced atomic CSS utilities for layout and structure.

These use the `fe-` prefix to minimise naming conflicts with application styles.

Examples include:

- `fe-d-flex` – flexbox display.
- `fe-d-inline-flex` – inline flexbox display.
- `fe-flex-column` – vertical flex direction.
- `fe-items-center` – cross-axis alignment.
- `fe-justify-center` – main-axis alignment.
- `fe-gap-2` – spacing between elements.
- `fe-rounded-2` – border radius.

Example:

```html
<div class="fe-d-flex fe-flex-column fe-gap-2 fe-items-center">
  <div>First item</div>
  <div>Second item</div>
</div>
```

These utilities focus on structure rather than application-specific colours, typography, or visual identity.

### Using utility style objects

The package also exports a `utilities` object containing reusable inline style equivalents.

```javascript
import { sx, utilities } from "@fraserelliott/fe-utilities";

const layout = sx(
  utilities["fe-d-flex"],
  utilities["fe-flex-column"],
  utilities["fe-gap-2"],
  utilities["fe-items-center"]
);
```

This allows the same structural utilities to be used when composing inline styles.

---

## Working with fe-slate

`fe-utilities` and `fe-slate` have complementary responsibilities:

- `fe-utilities` provides structural styling and composition.
- `fe-slate` provides colours, typography, shadows, and other appearance tokens.

For example:

```javascript
import { sx, utilities } from "@fraserelliott/fe-utilities";
import { styles } from "@fraserelliott/fe-slate";

const panelStyle = sx(
  utilities["fe-d-flex"],
  utilities["fe-flex-column"],
  utilities["fe-gap-2"],
  utilities["fe-p-em-1"],
  styles.BGSecondary,
  styles.TextPrimary,
  styles.GlassBorder,
  styles.ShadowSubtle
);
```

This produces a reusable panel style without coupling layout to a particular theme.

---

## Working with fe-components

`fe-components` uses the same composition approach through its `useFEStyles` hook and `FEStyleProvider`.

The styling system combines component defaults, theme configuration, and consumer overrides to produce standard React `style` and `className` props.

`fe-utilities` provides the underlying composition helpers, but can be used independently of the component library.

---

## Design philosophy

`fe-utilities` focuses on small, reusable building blocks rather than large abstractions.

It does not provide:

- React components.
- Application state management.
- A complete visual theme.
- Opinionated component designs.

Instead, it provides the tools to combine styling from different sources while retaining control over the final result.

The goal is to make common styling operations simple, consistent, and reusable.

---

## Summary

`fe-utilities` provides a foundation for composing UI styles and class names.

- Use **`cx`** to combine conditional class names.
- Use **`sx`** to recursively merge style objects and remove properties with `null`.
- Use **`feStyle`** to generate combined `style` and `className` props.
- Use **CSS utilities** or the exported `utilities` object for layout and structure.
- Combine with **`fe-slate`** and **`fe-components`** for a complete reusable styling system.

Each package can be used independently, while sharing a consistent approach to styling.
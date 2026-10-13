export const utilities = {
  // Display
  "fe-d-none": { display: "none" },
  "fe-d-block": { display: "block" },
  "fe-d-inline": { display: "inline" },
  "fe-d-inline-block": { display: "inline-block" },
  "fe-d-flex": { display: "flex" },
  "fe-d-inline-flex": { display: "inline-flex" },

  // Flex direction and wrap
  "fe-flex-row": { flexDirection: "row" },
  "fe-flex-column": { flexDirection: "column" },
  "fe-flex-row-reverse": { flexDirection: "row-reverse" },
  "fe-flex-column-reverse": { flexDirection: "column-reverse" },
  "fe-flex-wrap": { flexWrap: "wrap" },
  "fe-flex-nowrap": { flexWrap: "nowrap" },

  // Flex alignment and justification
  "fe-justify-start": { justifyContent: "flex-start" },
  "fe-justify-center": { justifyContent: "center" },
  "fe-justify-end": { justifyContent: "flex-end" },
  "fe-justify-between": { justifyContent: "space-between" },
  "fe-justify-around": { justifyContent: "space-around" },
  "fe-justify-evenly": { justifyContent: "space-evenly" },

  "fe-items-start": { alignItems: "flex-start" },
  "fe-items-center": { alignItems: "center" },
  "fe-items-end": { alignItems: "flex-end" },
  "fe-items-stretch": { alignItems: "stretch" },
  "fe-items-baseline": { alignItems: "baseline" },

  "fe-self-start": { alignSelf: "flex-start" },
  "fe-self-center": { alignSelf: "center" },
  "fe-self-end": { alignSelf: "flex-end" },
  "fe-self-stretch": { alignSelf: "stretch" },

  // Flex grow and shrink
  "fe-grow-0": { flexGrow: 0 },
  "fe-grow-1": { flexGrow: 1 },
  "fe-shrink-0": { flexShrink: 0 },
  "fe-shrink-1": { flexShrink: 1 },

  // Gap (rem)
  "fe-gap-0": { gap: 0 },
  "fe-gap-1": { gap: "0.25rem" },
  "fe-gap-2": { gap: "0.5rem" },
  "fe-gap-3": { gap: "1rem" },
  "fe-gap-4": { gap: "1.5rem" },
  "fe-gap-5": { gap: "2rem" },

  // Padding (rem) - all sides
  "fe-p-0": {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  "fe-p-1": {
    paddingTop: "0.25rem",
    paddingRight: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.25rem",
  },
  "fe-p-2": {
    paddingTop: "0.5rem",
    paddingRight: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.5rem",
  },
  "fe-p-3": {
    paddingTop: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
  },
  "fe-p-4": {
    paddingTop: "1.5rem",
    paddingRight: "1.5rem",
    paddingBottom: "1.5rem",
    paddingLeft: "1.5rem",
  },
  "fe-p-5": {
    paddingTop: "2rem",
    paddingRight: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "2rem",
  },

  // Padding X
  "fe-px-0": { paddingLeft: 0, paddingRight: 0 },
  "fe-px-1": { paddingLeft: "0.25rem", paddingRight: "0.25rem" },
  "fe-px-2": { paddingLeft: "0.5rem", paddingRight: "0.5rem" },
  "fe-px-3": { paddingLeft: "1rem", paddingRight: "1rem" },
  "fe-px-4": { paddingLeft: "1.5rem", paddingRight: "1.5rem" },
  "fe-px-5": { paddingLeft: "2rem", paddingRight: "2rem" },

  // Padding Y
  "fe-py-0": { paddingTop: 0, paddingBottom: 0 },
  "fe-py-1": { paddingTop: "0.25rem", paddingBottom: "0.25rem" },
  "fe-py-2": { paddingTop: "0.5rem", paddingBottom: "0.5rem" },
  "fe-py-3": { paddingTop: "1rem", paddingBottom: "1rem" },
  "fe-py-4": { paddingTop: "1.5rem", paddingBottom: "1.5rem" },
  "fe-py-5": { paddingTop: "2rem", paddingBottom: "2rem" },

  // Padding top
  "fe-pt-0": { paddingTop: 0 },
  "fe-pt-1": { paddingTop: "0.25rem" },
  "fe-pt-2": { paddingTop: "0.5rem" },
  "fe-pt-3": { paddingTop: "1rem" },
  "fe-pt-4": { paddingTop: "1.5rem" },
  "fe-pt-5": { paddingTop: "2rem" },

  // Padding right
  "fe-pr-0": { paddingRight: 0 },
  "fe-pr-1": { paddingRight: "0.25rem" },
  "fe-pr-2": { paddingRight: "0.5rem" },
  "fe-pr-3": { paddingRight: "1rem" },
  "fe-pr-4": { paddingRight: "1.5rem" },
  "fe-pr-5": { paddingRight: "2rem" },

  // Padding bottom
  "fe-pb-0": { paddingBottom: 0 },
  "fe-pb-1": { paddingBottom: "0.25rem" },
  "fe-pb-2": { paddingBottom: "0.5rem" },
  "fe-pb-3": { paddingBottom: "1rem" },
  "fe-pb-4": { paddingBottom: "1.5rem" },
  "fe-pb-5": { paddingBottom: "2rem" },

  // Padding left
  "fe-pl-0": { paddingLeft: 0 },
  "fe-pl-1": { paddingLeft: "0.25rem" },
  "fe-pl-2": { paddingLeft: "0.5rem" },
  "fe-pl-3": { paddingLeft: "1rem" },
  "fe-pl-4": { paddingLeft: "1.5rem" },
  "fe-pl-5": { paddingLeft: "2rem" },

  // Margin (rem) - all sides
  "fe-m-0": { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 },
  "fe-m-1": {
    marginTop: "0.25rem",
    marginRight: "0.25rem",
    marginBottom: "0.25rem",
    marginLeft: "0.25rem",
  },
  "fe-m-2": {
    marginTop: "0.5rem",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    marginLeft: "0.5rem",
  },
  "fe-m-3": {
    marginTop: "1rem",
    marginRight: "1rem",
    marginBottom: "1rem",
    marginLeft: "1rem",
  },
  "fe-m-4": {
    marginTop: "1.5rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    marginLeft: "1.5rem",
  },
  "fe-m-5": {
    marginTop: "2rem",
    marginRight: "2rem",
    marginBottom: "2rem",
    marginLeft: "2rem",
  },

  // Margin X
  "fe-mx-0": { marginLeft: 0, marginRight: 0 },
  "fe-mx-1": { marginLeft: "0.25rem", marginRight: "0.25rem" },
  "fe-mx-2": { marginLeft: "0.5rem", marginRight: "0.5rem" },
  "fe-mx-3": { marginLeft: "1rem", marginRight: "1rem" },
  "fe-mx-4": { marginLeft: "1.5rem", marginRight: "1.5rem" },
  "fe-mx-5": { marginLeft: "2rem", marginRight: "2rem" },

  // Margin Y
  "fe-my-0": { marginTop: 0, marginBottom: 0 },
  "fe-my-1": { marginTop: "0.25rem", marginBottom: "0.25rem" },
  "fe-my-2": { marginTop: "0.5rem", marginBottom: "0.5rem" },
  "fe-my-3": { marginTop: "1rem", marginBottom: "1rem" },
  "fe-my-4": { marginTop: "1.5rem", marginBottom: "1.5rem" },
  "fe-my-5": { marginTop: "2rem", marginBottom: "2rem" },

  // Auto margins
  "fe-mx-auto": { marginLeft: "auto", marginRight: "auto" },
  "fe-my-auto": { marginTop: "auto", marginBottom: "auto" },
  "fe-ml-auto": { marginLeft: "auto" },
  "fe-mr-auto": { marginRight: "auto" },

  // Padding (em)
  "fe-p-em-0": {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  "fe-p-em-1": {
    paddingTop: "0.25em",
    paddingRight: "0.25em",
    paddingBottom: "0.25em",
    paddingLeft: "0.25em",
  },
  "fe-p-em-2": {
    paddingTop: "0.5em",
    paddingRight: "0.5em",
    paddingBottom: "0.5em",
    paddingLeft: "0.5em",
  },
  "fe-p-em-3": {
    paddingTop: "1em",
    paddingRight: "1em",
    paddingBottom: "1em",
    paddingLeft: "1em",
  },
  "fe-p-em-4": {
    paddingTop: "1.5em",
    paddingRight: "1.5em",
    paddingBottom: "1.5em",
    paddingLeft: "1.5em",
  },
  "fe-p-em-5": {
    paddingTop: "2em",
    paddingRight: "2em",
    paddingBottom: "2em",
    paddingLeft: "2em",
  },

  // Margin (em)
  "fe-m-em-0": { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 },
  "fe-m-em-1": {
    marginTop: "0.25em",
    marginRight: "0.25em",
    marginBottom: "0.25em",
    marginLeft: "0.25em",
  },
  "fe-m-em-2": {
    marginTop: "0.5em",
    marginRight: "0.5em",
    marginBottom: "0.5em",
    marginLeft: "0.5em",
  },
  "fe-m-em-3": {
    marginTop: "1em",
    marginRight: "1em",
    marginBottom: "1em",
    marginLeft: "1em",
  },
  "fe-m-em-4": {
    marginTop: "1.5em",
    marginRight: "1.5em",
    marginBottom: "1.5em",
    marginLeft: "1.5em",
  },
  "fe-m-em-5": {
    marginTop: "2em",
    marginRight: "2em",
    marginBottom: "2em",
    marginLeft: "2em",
  },

  // Padding (px)
  "fe-p-px-0": {
    paddingTop: "0px",
    paddingRight: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
  },
  "fe-p-px-4": {
    paddingTop: "4px",
    paddingRight: "4px",
    paddingBottom: "4px",
    paddingLeft: "4px",
  },
  "fe-p-px-8": {
    paddingTop: "8px",
    paddingRight: "8px",
    paddingBottom: "8px",
    paddingLeft: "8px",
  },
  "fe-p-px-12": {
    paddingTop: "12px",
    paddingRight: "12px",
    paddingBottom: "12px",
    paddingLeft: "12px",
  },
  "fe-p-px-16": {
    paddingTop: "16px",
    paddingRight: "16px",
    paddingBottom: "16px",
    paddingLeft: "16px",
  },
  "fe-p-px-24": {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "24px",
    paddingLeft: "24px",
  },

  // Margin (px)
  "fe-m-px-0": {
    marginTop: "0px",
    marginRight: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
  },
  "fe-m-px-4": {
    marginTop: "4px",
    marginRight: "4px",
    marginBottom: "4px",
    marginLeft: "4px",
  },
  "fe-m-px-8": {
    marginTop: "8px",
    marginRight: "8px",
    marginBottom: "8px",
    marginLeft: "8px",
  },
  "fe-m-px-12": {
    marginTop: "12px",
    marginRight: "12px",
    marginBottom: "12px",
    marginLeft: "12px",
  },
  "fe-m-px-16": {
    marginTop: "16px",
    marginRight: "16px",
    marginBottom: "16px",
    marginLeft: "16px",
  },
  "fe-m-px-24": {
    marginTop: "24px",
    marginRight: "24px",
    marginBottom: "24px",
    marginLeft: "24px",
  },

  // Sizing
  "fe-w-100": { width: "100%" },
  "fe-h-100": { height: "100%" },
  "fe-w-auto": { width: "auto" },
  "fe-h-auto": { height: "auto" },
  "fe-min-w-0": { minWidth: 0 },
  "fe-min-h-0": { minHeight: 0 },

  // Text
  "fe-text-left": { textAlign: "left" },
  "fe-text-center": { textAlign: "center" },
  "fe-text-right": { textAlign: "right" },
  "fe-fw-normal": { fontWeight: 400 },
  "fe-fw-bold": { fontWeight: 700 },
  "fe-text-muted": { opacity: 0.7 },
  "fe-nowrap": { whiteSpace: "nowrap" },
  "fe-break-word": { overflowWrap: "break-word" },

  // Single-line truncation
  "fe-truncate": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  // Positioning
  "fe-pos-relative": { position: "relative" },
  "fe-pos-absolute": { position: "absolute" },
  "fe-pos-fixed": { position: "fixed" },
  "fe-pos-sticky": { position: "sticky" },

  // Z-index
  "fe-z-auto": { zIndex: "auto" },
  "fe-z-0": { zIndex: 0 },
  "fe-z-1": { zIndex: 1 },
  "fe-z-10": { zIndex: 10 },
  "fe-z-100": { zIndex: 100 },
  "fe-z-1000": { zIndex: 1000 },
  "fe-z-9999": { zIndex: 9999 },

  // Overflow
  "fe-overflow-hidden": { overflow: "hidden" },
  "fe-overflow-auto": { overflow: "auto" },
  "fe-overflow-x-auto": { overflowX: "auto" },
  "fe-overflow-y-auto": { overflowY: "auto" },

  // Border radius
  "fe-rounded-0": { borderRadius: 0 },
  "fe-rounded-1": { borderRadius: "0.25rem" },
  "fe-rounded-2": { borderRadius: "0.5rem" },
  "fe-rounded-3": { borderRadius: "1rem" },
  "fe-rounded-pill": { borderRadius: "9999px" },
};

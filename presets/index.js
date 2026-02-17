export const FEPresets = Object.freeze({
  // Containers / layout
  Card: "fe-d-flex fe-flex-column fe-gap-3 fe-p-3 fe-rounded-2",
  Stack: "fe-d-flex fe-flex-column fe-gap-2",
  Row: "fe-d-flex fe-flex-row fe-items-center fe-gap-2",

  // Buttons (shape + spacing only; colours and animations live in the app)
  Btn: "fe-d-inline-flex fe-items-center fe-justify-center fe-gap-2 fe-p-em-2 fe-rounded-2",
  BtnPill:
    "fe-d-inline-flex fe-items-center fe-justify-center fe-gap-2 fe-p-em-2 fe-rounded-pill",

  // Text helpers
  Muted: "fe-text-muted",
  Truncate: "fe-truncate fe-min-w-0",
});

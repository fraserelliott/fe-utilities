import { utilities } from "./utilities";
import { sx } from "./styles";

export const FEPresetsInline = Object.freeze({
  // Containers / layout
  Card: sx(
    utilities["fe-d-flex"],
    utilities["fe-flex-column"],
    utilities["fe-gap-3"],
    utilities["fe-p-3"],
    utilities["fe-rounded-2"],
  ),

  Stack: sx(
    utilities["fe-d-flex"],
    utilities["fe-flex-column"],
    utilities["fe-gap-2"],
  ),

  Row: sx(
    utilities["fe-d-flex"],
    utilities["fe-flex-row"],
    utilities["fe-items-center"],
    utilities["fe-gap-2"],
  ),

  // Buttons (shape + spacing only; colours and animations live in the app)
  Btn: sx(
    utilities["fe-d-inline-flex"],
    utilities["fe-items-center"],
    utilities["fe-justify-center"],
    utilities["fe-gap-2"],
    utilities["fe-p-em-2"],
    utilities["fe-rounded-2"],
  ),

  BtnPill: sx(
    utilities["fe-d-inline-flex"],
    utilities["fe-items-center"],
    utilities["fe-justify-center"],
    utilities["fe-gap-2"],
    utilities["fe-p-em-2"],
    utilities["fe-rounded-pill"],
  ),

  // Text helpers
  Muted: sx(utilities["fe-text-muted"]),

  Truncate: sx(utilities["fe-truncate"], utilities["fe-min-w-0"]),
});

export const FEPresetsClasses = Object.freeze({
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

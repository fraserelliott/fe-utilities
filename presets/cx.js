export function cx(...inputs) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];

      if (typeof input === "function") {
        return cx(input());
      }

      if (Array.isArray(input)) {
        return input;
      }

      return input;
    })
    .filter(Boolean)
    .join(" ");
}

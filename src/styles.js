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

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function mergePair(a, b) {
  const result = { ...a };

  for (const [key, value] of Object.entries(b)) {
    if (value === null) {
      delete result[key];
      continue;
    }

    if (Array.isArray(value) || Array.isArray(result[key])) {
      throw new TypeError(`sx(): Arrays are not supported at "${key}"`);
    }

    const existing = result[key];

    if (isObject(value)) {
      if (existing !== undefined && !isObject(existing)) {
        throw new TypeError(`sx(): Incompatible types at "${key}"`);
      }

      result[key] = mergePair(existing ?? {}, value);
    } else {
      if (isObject(existing)) {
        throw new TypeError(`sx(): Incompatible types at "${key}"`);
      }

      result[key] = value;
    }
  }

  return result;
}

export function sx(...inputs) {
  return inputs.filter(Boolean).reduce((result, input) => {
    if (!isObject(input)) {
      console.log(inputs);
      throw new TypeError("sx(): Expected a style object");
    }

    return mergePair(result, input);
  }, {});
}

export function feStyle(styles = [], classNames = []) {
  const style = sx(...styles.filter((s) => s != null));
  const className = cx(...classNames.filter((c) => c != null));

  return {
    ...(Object.keys(style).length > 0 && { style }),
    ...(className && { className }),
  };
}

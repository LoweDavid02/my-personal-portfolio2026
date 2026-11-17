/**
 * Safe localStorage helpers that prevent crashes in restricted or test environments.
 */

export function readStorage(key, fallback = null) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return fallback;
    }
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : raw;
  } catch {
    return fallback;
  }
}

export function readStorageJson(key, fallback = null) {
  const raw = readStorage(key, null);
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export function writeStorageJson(key, value) {
  try {
    return writeStorage(key, JSON.stringify(value));
  } catch {
    return false;
  }
}

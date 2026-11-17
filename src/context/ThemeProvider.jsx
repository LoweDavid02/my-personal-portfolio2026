import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../hooks/useTheme.js';
import { readStorage, writeStorage } from '../utils/storage.js';

const THEME_STORAGE_KEY = 'ld-portfolio-theme';
const VALID_PREFERENCES = new Set(['light', 'dark', 'system']);

function getSystemDark() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return true;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getInitialPreference() {
  const stored = readStorage(THEME_STORAGE_KEY, 'system');
  return VALID_PREFERENCES.has(stored) ? stored : 'system';
}

export function ThemeProvider({ children }) {
  const [preference, setPreferenceState] = useState(getInitialPreference);
  const [systemDark, setSystemDark] = useState(getSystemDark);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setSystemDark(event.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resolvedTheme = preference === 'system' ? (systemDark ? 'dark' : 'light') : preference;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', resolvedTheme === 'dark');
    root.dataset.theme = resolvedTheme;
    root.dataset.themePreference = preference;
    root.style.colorScheme = resolvedTheme;

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', resolvedTheme === 'dark' ? '#0B0F14' : '#FFFFFF');
    }
  }, [preference, resolvedTheme]);

  const setThemePreference = useCallback((nextPref) => {
    const validated = VALID_PREFERENCES.has(nextPref) ? nextPref : 'system';
    setPreferenceState(validated);
    writeStorage(THEME_STORAGE_KEY, validated);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';
    setThemePreference(next);
  }, [resolvedTheme, setThemePreference]);

  const value = useMemo(
    () => ({
      preference,
      resolvedTheme,
      isDark: resolvedTheme === 'dark',
      setThemePreference,
      toggleTheme,
    }),
    [preference, resolvedTheme, setThemePreference, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

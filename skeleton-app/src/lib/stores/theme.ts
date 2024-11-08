import { writable, get } from "svelte/store";
import { browser } from "$app/environment";

const themeNames = [
  "skeleton",
  "wintry",
  "modern",
  "rocket",
  "seafoam",
  "vintage",
  "sahara",
  "hamlindigo",
  "gold-nouveau",
  "crimson",
] as const;

type ThemeName = (typeof themeNames)[number];

interface Theme {
  name: ThemeName;
  dark: boolean;
}

const defaultTheme: Theme = { name: themeNames[0], dark: false };
const savedTheme =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem("theme") || JSON.stringify(defaultTheme))
    : defaultTheme;

const themeStore = writable<Theme>(savedTheme);

export function applyTheme() {
  const theme = get(themeStore);
  if (browser) {
    document.body.setAttribute("data-theme", theme.name);

    const currentMode = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const mode = theme.dark ? "dark" : "light";
    if (currentMode !== mode) {
      document.documentElement.classList.remove(currentMode);
      document.documentElement.classList.add(mode);
    }
  }
}

export function setTheme(theme: Theme) {
  themeStore.set(theme);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", JSON.stringify(theme));
  }

  applyTheme();
}

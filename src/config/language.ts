import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";

export const langs = {
  javascript,
  jsx: () => javascript({ jsx: true }),
  typescript: () => javascript({ typescript: true }),
  tsx: () => javascript({ jsx: true, typescript: true }),
  json,
  html,
  css,
  python,
  java,
  rust,
  cpp,
  php,
};

interface Extension {
  [key: string]: string;
}

export const extensions: Extension = {
  javascript: "js",
  jsx: "jsx",
  typescript: "ts",
  tsx: "tsx",
  vue: "vue",
  json: "json",
  html: "html",
  css: "css",
  python: "py",
  java: "java",
  rust: "rust",
  cpp: "cpp",
  php: "php",
  go: "go",
};

export const getExt = (lang: string) => extensions[lang];
export const langNames = Object.keys(langs) as LanguageName[];
export type LanguageName = keyof typeof langs;

export function loadLanguage(name: LanguageName) {
  return langs[name] ? langs[name]() : null;
}

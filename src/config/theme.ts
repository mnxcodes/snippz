import {
  darcula,
  tokyoNightDay,
  nord,
  sublime,
  solarizedDark,
  solarizedLight,
  noctisLilac,
  gruvboxDark,
  tokyoNightStorm,
  atomone,
} from "@uiw/codemirror-themes-all";

interface Theme {
  [key: string]: any;
}

export const themes: Theme = {
  atomone: atomone,
  darcula: darcula,
  gruvboxDark: gruvboxDark,
  nord: nord,
  tokyoNightDay: tokyoNightDay,
  tokyoNightStorm: tokyoNightStorm,
  sublime: sublime,
  solarizedDark: solarizedDark,
  solarizedLight: solarizedLight,
  noctisLilac: noctisLilac,
};

export type Themes = keyof typeof themes;

export const editorThemes = Object.keys(themes) as Themes[];

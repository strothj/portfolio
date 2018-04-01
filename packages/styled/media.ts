import { css, ThemedCssFunction } from "styled-components";

const breakpoints = {
  width: {
    huge: 1440,
    large: 1170,
    medium: 768,
    small: 450,
  },
  height: {},
};

interface MediaQueries extends MediaQueryUtils<"width"> {
  width: MediaQueryUtils<"width">;
  height: MediaQueryUtils<"height">;
}

type Ranges<T extends "width" | "height"> = keyof typeof breakpoints[T];

interface MediaQueryUtils<T extends "width" | "height"> {
  lessThan: (breakpoint: Ranges<T>) => ThemedCssFunction<any>;
  between: (begin: Ranges<T>, end: Ranges<T>) => ThemedCssFunction<any>;
  atLeast: (breakpoint: Ranges<T>) => ThemedCssFunction<any>;
}

const media: Record<string, any> = { width: {}, height: {} };

type Css = (strings: any, ...interpolations: any[]) => any;

["width", "height"].forEach(dir => {
  const b = breakpoints as any;

  media[dir].lessThan = (breakpoint: string): Css => (s, ...i) =>
    css`
      @media (max-width: ${b[dir][breakpoint] - 1}px) {
        ${css(s, ...i)};
      }
    `;

  media[dir].between = (B: string, end: string): Css => (s, ...i) =>
    css`
      @media (min-width: ${b[dir][B]}px) and (max-width: ${b[dir][end] - 1}px) {
        ${css(s, ...i)};
      }
    `;

  media[dir].atLeast = (breakpoint: string): Css => (s, ...i) =>
    css`
      @media (min-width: ${b[dir][breakpoint]}px) {
        ${css(s, ...i)};
      }
    `;

  if (dir === "width") {
    Object.entries(media.width).forEach(([key, value]) => {
      media[key] = value;
    });
  }
});

export default media as MediaQueries;

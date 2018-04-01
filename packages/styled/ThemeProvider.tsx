import React, { SFC } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "./styled";
import theme from "./theme";

const ThemeProvider: SFC<object> = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);

export default ThemeProvider;

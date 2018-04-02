import React, { SFC } from "react";
import {
  ThemeProvider as StyledComponentsThemeProvider,
  injectGlobal,
} from "./styled";
import { Helmet } from "react-helmet";
import theme from "./theme";

const ThemeProvider: SFC<object> = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  </StyledComponentsThemeProvider>
);

export default ThemeProvider;

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
  }
`;

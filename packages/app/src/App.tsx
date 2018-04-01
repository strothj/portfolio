import React, { SFC } from "react";
import Placeholder from "components/Placeholder";
import styled, { ThemeProvider } from "styled";

const Button = styled.button`
  padding: 48px;
  border: 1px solid #eee;
  color: #eee;
  background-color: blue;

  ${props => props.theme.media.lessThan("medium")`
    background-color: red;
  `};

  ${props => props.theme.media.between("medium", "large")`
    padding: 64px;
  `};
`;

const App: SFC<object> = () => (
  <ThemeProvider>
    <>
      <Placeholder />
      <Button>Some Button</Button>
    </>
  </ThemeProvider>
);

export default App;

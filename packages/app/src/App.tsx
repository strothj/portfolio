import React, { SFC, StrictMode } from "react";
import { ThemeProvider } from "styled";

const App: SFC<{}> = () => (
  <ThemeProvider>
    <StrictMode>
      <>Placeholder</>
    </StrictMode>
  </ThemeProvider>
);

export default App;

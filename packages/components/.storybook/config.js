import React, { StrictMode } from "react";
import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { ThemeProvider } from "styled";

addDecorator(story => (
  <StrictMode>
    <ThemeProvider>{story()}</ThemeProvider>
  </StrictMode>
));

setDefaults({
  inline: true,
});

// automatically import all files ending in *.stories.js
const req = require.context("..", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import React, { StrictMode } from "react";
import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled";

addDecorator(story => (
  <StrictMode>
    <ThemeProvider>{story()}</ThemeProvider>
  </StrictMode>
));
addDecorator(withKnobs);

setDefaults({
  inline: true,
});

// automatically import all files ending in *.stories.js
const req = require.context("..", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

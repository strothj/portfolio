import React from "react";
import { storiesOf } from "@storybook/react";
import HeroGoogleMap from "./HeroGoogleMap";

storiesOf("Components", module).add("HeroGoogleMap", () => (
  <div style={{ width: "100%", height: 300 }}>
    <HeroGoogleMap />
  </div>
));

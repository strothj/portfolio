import React from "react";
import { storiesOf } from "@storybook/react";
import { GoogleMapsApiProvider } from "../GoogleMapsApi";
import HeroGoogleMap from "./HeroGoogleMap";

storiesOf("Components", module).add("HeroGoogleMap", () => (
  <div style={{ width: "100%", height: 300 }}>
    <GoogleMapsApiProvider>
      <HeroGoogleMap />
    </GoogleMapsApiProvider>
  </div>
));

import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { GoogleMapsApiProvider } from "../GoogleMapsApi";
import HeroGoogleMap from "./HeroGoogleMap";
import LoadingPlaceholder from "./LoadingPlaceholder";

const stories = storiesOf("Components", module);

stories.add(
  "HeroGoogleMap",
  withInfo({
    propTablesExclude: [GoogleMapsApiProvider as any],
  })(() => (
    <div style={{ width: "100%", height: 500 }}>
      <GoogleMapsApiProvider>
        {boolean("Loading", false) ? <LoadingPlaceholder /> : <HeroGoogleMap />}
      </GoogleMapsApiProvider>
    </div>
  )),
);

stories.add(
  "HeroGoogleMap - loading",
  withInfo({
    text:
      "State displayed while the Google Maps API Javascript library is loading.",
  })(() => (
    <div style={{ width: "100%", height: 500 }}>
      <HeroGoogleMap />
    </div>
  )),
);

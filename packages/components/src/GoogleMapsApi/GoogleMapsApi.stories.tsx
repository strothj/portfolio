import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import GoogleMapsApiConsumer from "./GoogleMapsApiConsumer";
import GoogleMapsApiProvider from "./GoogleMapsApiProvider";

storiesOf("Utilities", module).add(
  "GoogleMapsApiProvider",
  withInfo({
    text: `
      Loads the Google Maps API and provides the status to children.

      ~~~
      <GoogleMapsApiProvider>
        <GoogleMapsApiConsumer>
          {({ loaded }) => (
            <div>Google Maps Api initialization status: {loaded.toString()}</div>
          )}
        </GoogleMapsApiConsumer>
      </GoogleMapsApiProvider>
      ~~~

      ~~~
      interface GoogleMapsApiLoadStatus {
        /** The loading status of the Google Maps API. */
        loaded: boolean;
      };
      ~~~
    `,
    // propTablesExclude: [GoogleMapsApiProvider as any],
    source: false,
  })(() => (
    <GoogleMapsApiProvider>
      <GoogleMapsApiConsumer>
        {({ loaded }) => (
          <div>Google Maps Api initialization status: {loaded.toString()}</div>
        )}
      </GoogleMapsApiConsumer>
    </GoogleMapsApiProvider>
  )),
);

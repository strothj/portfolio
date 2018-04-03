import React, { ReactElement } from "react";
import GoogleMapsApiLoadStatus from "./GoogleMapsApiLoadStatus";
import { Consumer } from "./GoogleMapsApiContext";

interface GoogleMapsApiConsumerProps {
  /**
   * Render function which is passed the current loading status of the Google
   * Maps API.
   */
  children: (value: GoogleMapsApiLoadStatus) => ReactElement<any>;
}

/**
 * Provides the loading status of the Google Maps API through the use of a
 * render function.
 *
 * ```
 * <GoogleMapsApiConsumer>
 *   {({ loaded }) => (
 *     <div>Status: {loaded.toString()}</div>
 *   )}
 * </GoogleMapsApiConsumer>
 * ```
 */
export const GoogleMapsApiConsumer = ({
  children,
}: GoogleMapsApiConsumerProps): ReactElement<any> => (
  <Consumer>{children}</Consumer>
);

export default GoogleMapsApiConsumer;

import { createContext } from "react";
import GoogleMapsApiLoadStatus from "./GoogleMapsApiLoadStatus";

const { Provider, Consumer } = createContext<GoogleMapsApiLoadStatus>({
  loaded: false,
});

export { Provider, Consumer };

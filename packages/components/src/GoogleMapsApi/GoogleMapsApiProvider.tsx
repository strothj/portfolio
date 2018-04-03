import React, { Component, ReactElement } from "react";
import apiLoadingStatus from "./apiLoadingStatus";
import GoogleMapsApiLoadStatus from "./GoogleMapsApiLoadStatus";
import { Provider } from "./GoogleMapsApiContext";

export class GoogleMapsApiProvider extends Component<
  {
    /**
     * Children which will be provided access to the GoogleMapsApiLoadStatus
     * through the context api (GoogleMapsApiConsumer).
     */
    children: ReactElement<any>;
  },
  GoogleMapsApiLoadStatus
> {
  state = { loaded: false };

  async componentDidMount() {
    await apiLoadingStatus;
    this.setState({ loaded: true });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default GoogleMapsApiProvider;

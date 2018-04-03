import React, { Component, SFC } from "react";
import styled from "styled";
import { GoogleMapsApiConsumer } from "../GoogleMapsApi";
import LoadingPlaceholder from "./LoadingPlaceholder";
import createMap from "./createMap";

class HeroGoogleMap extends Component {
  private div: HTMLDivElement | null = null;

  componentDidMount() {
    createMap(this.div!);
  }

  render() {
    // prettier-ignore
    return <GoogleMapDiv innerRef={c => { this.div = c; }} />
  }
}

/**
 * Display a Google Map near my location to provide a backdrop for the hero
 * section of the portfolio landing page.
 */
export const HeroGoogleMapContainer: SFC<{}> = () => (
  <GoogleMapsApiConsumer>
    {({ loaded }) => (loaded ? <HeroGoogleMap /> : <LoadingPlaceholder />)}
  </GoogleMapsApiConsumer>
);

export default HeroGoogleMapContainer;

const GoogleMapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

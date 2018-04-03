import React, { Component, SFC } from "react";
import styled from "styled";
import { GoogleMapsApiConsumer } from "../GoogleMapsApi";
import mapStyles from "./mapStyles.json";

interface HeroGoogleMapProps {
  googleMapsApiLoaded: boolean;
}

class HeroGoogleMap extends Component<HeroGoogleMapProps> {
  private static createMap = (div: HTMLDivElement) => {
    const map = new google.maps.Map(div, {
      styles: mapStyles,
      center: { lat: 26.2445, lng: -80.2064 },
      zoom: 9,
      scrollwheel: false,
    });

    // tslint:disable-next-line:no-unused-expression
    new google.maps.Marker({
      map,
      position: { lat: 26.2445, lng: -80.2064 },
      title: "Margate, FL",
    });
  };

  private div: HTMLDivElement | null = null;

  componentDidMount() {
    if (this.props.googleMapsApiLoaded) HeroGoogleMap.createMap(this.div!);
  }

  componentDidUpdate(prevProps: HeroGoogleMapProps) {
    if (
      !this.props.googleMapsApiLoaded ||
      prevProps.googleMapsApiLoaded === this.props.googleMapsApiLoaded
    ) {
      return;
    }
    HeroGoogleMap.createMap(this.div!);
  }

  render() {
    return (
      <GoogleMapDiv
        innerRef={c => {
          this.div = c;
        }}
      >
        {this.props.googleMapsApiLoaded ? null : "Loading"}
      </GoogleMapDiv>
    );
  }
}

const HeroGoogleMapContainer: SFC<{}> = () => (
  <GoogleMapsApiConsumer>
    {({ loaded }) => <HeroGoogleMap googleMapsApiLoaded={loaded} />}
  </GoogleMapsApiConsumer>
);

export default HeroGoogleMapContainer;

const GoogleMapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

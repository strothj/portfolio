import React, { Component } from "react";
import styled from "styled";
import styles from "./styles.json";

class HeroGoogleMap extends Component {
  state = { loading: true };
  div: HTMLDivElement | null = null;

  async componentDidMount() {
    await googleMapsApiInitializationStatus;

    const map = new google.maps.Map(this.div!, {
      styles,
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
  }

  render() {
    return (
      <Container
        innerRef={c => {
          this.div = c;
        }}
      >
        {this.state.loading ? "Placeholder" : null}
      </Container>
    );
  }
}

export default HeroGoogleMap;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const googleMapsApiInitializationStatus = new Promise((resolve, reject) => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  if (googleMapsApiKey === undefined) {
    reject("Missing Google Maps API key.");
    return;
  }

  (window as any).googleMapsApiCallback = () => {
    resolve();
  };

  const scriptEl = document.createElement("script");
  scriptEl.async = true;
  scriptEl.defer = true;
  scriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=googleMapsApiCallback`;
  document.body.insertBefore(scriptEl, null);
});

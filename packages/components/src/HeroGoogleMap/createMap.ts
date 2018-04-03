import mapStyles from "./mapStyles.json";

const createMap = (div: HTMLDivElement) => {
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

export default createMap;

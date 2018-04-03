const buildApiUrl = (apiKey: string, callback: string) =>
  `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callback}`;

const apiLoadingStatus = new Promise((resolve, reject) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  if (apiKey == null) {
    reject("Missing Google Maps API key.");
    return;
  }

  (window as any).googleMapsApiCallback = () => {
    resolve();
    delete (window as any).googleMapsApiCallback;
  };

  const scriptEl = document.createElement("script");
  scriptEl.async = true;
  scriptEl.defer = true;
  scriptEl.src = buildApiUrl(apiKey, "googleMapsApiCallback");
  document.body.insertBefore(scriptEl, null);
});

export default apiLoadingStatus;

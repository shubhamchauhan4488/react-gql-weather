export const getLatLng = (setLocation) => {

  const successCallback = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setLocation({ lat, lng })
    return
  }

  const errorCallback = () => {
    alert("Geocoder failed");
    return null
  }

  let options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  }
}
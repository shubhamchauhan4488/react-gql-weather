export const getLatLng = (setLocation) => {

  let lat = '';
  let lng = '';

  const successCallback = (position) => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
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
    maximumAge: 20
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  }
}
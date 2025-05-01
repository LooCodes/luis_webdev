let map;

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        map = new google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 14,
        })

        new google.maps.Marker({
          map: map,
          position: userLocation,
          title: "You are here!",
        })
      },
      () => {
        handleLocationError(true)
      }
    )
  } else {
    handleLocationError(false)
  }
}

function handleLocationError(browserHasGeolocation) {
  alert(
    browserHasGeolocation
      ? "Error: Geolocation failed."
      : "Error: Your browser doesn't support geolocation."
  )
}

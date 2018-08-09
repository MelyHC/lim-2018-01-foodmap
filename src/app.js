const spacePlace = document.getElementById('splash');
const mapDetails = document.getElementById('map-details');

window.setTimeout(() => {
  spacePlace.setAttribute('class', 'w3-hide');
  mapDetails.setAttribute('class', 'w3-show space-place');
}, 2000);

let map;
// var infowindow;

window.onload = () => {
  // Creamos un mapa con las coordenadas actuales
  navigator.geolocation.getCurrentPosition(pos => {

    lat = pos.coords.latitude;
    lon = pos.coords.longitude;

    const myLatlng = new google.maps.LatLng(lat, lon);
    const mapOptions = {
      center: myLatlng,
      zoom: 15,
    };

    map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

    // Creamos el infowindow
    // infowindow = new google.maps.InfoWindow();
    // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
    // var request = {
    //   location: myLatlng,
    //   radius: 600,
    //   types: ['restaurant']
    // };

    // Creamos el servicio PlaceService y enviamos la petición.
    // var service = new google.maps.places.PlacesService(map);

    // service.nearbySearch(request, function (results, status) {
    //   // console.log(results);
    //   if (status === google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //       console.log(results[i]);
    //       crearMarcador(results[i]);
    //     }
    //   }
    // });
  });
}

// function crearMarcador(place) {
//   // Creamos un marcador
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   // Asignamos el evento click del marcador
//   google.maps.event.addListener(marker, 'click', function () {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }

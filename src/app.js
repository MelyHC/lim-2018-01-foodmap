const splashTime = document.getElementById('splash');
const mapDetails = document.getElementById('map-details');
const googleMap = document.getElementById("google-map");
const infoMap = document.getElementById('info-map');
const typeFood = document.getElementById('type-food');
const district = document.getElementById('district');
const searchRest = document.getElementById('search-rest')

window.setTimeout(() => {
  splashTime.setAttribute('class', 'w3-hide');
  mapDetails.setAttribute('class', 'w3-show w3-light-grey');
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

    map = new google.maps.Map(googleMap, mapOptions);

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

const optionsFilter = {
  restaurants: null,
  addres: '',
  name: '',
  type: ''
}

const printRestaurant = (arrRestaurant) => {
  let output = '';
  arrRestaurant.forEach(restaurant => {
    output +=
      `<div id="info-restaurant" class="w3-card w3-margin w3-white" onclick="document.getElementById('${restaurant.name}').style.display='block'">
      <img class="w3-image" href="${restaurant.photo}" alt="Plato" width="30%" height="30%">${restaurant.name}</div>
      <div id="${restaurant.name}" class="w3-modal">
        <div class="w3-modal-content">
          <div class="w3-container">
            <span onclick="document.getElementById('${restaurant.name}').style.display='none'" class="w3-button w3-display-topright">&times;</span>
            <h3>${restaurant.name}</h3>
            <p>Dirección: ${restaurant.addres} <br> 
            Puntuación: ${restaurant.puntuación}★</p>
          </div>
        </div>
      </div>`;
     console.log(restaurant.photo) 
  });
  return output;
}

fetch('../data-restaurant/restaurants.json')
  .then(response => response.json())
  .then(arrRest => {
    optionsFilter.restaurants = arrRest;
    infoMap.innerHTML = printRestaurant(arrRest)
  })
  .catch(error => console.log(error))

typeFood.addEventListener('change', () => {
  optionsFilter.type = typeFood.value;
})

district.addEventListener('change', () => {
  optionsFilter.addres = district.value;
})

searchRest.addEventListener('keyup', () => {
  optionsFilter.name = searchRest.value;
})

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

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
      `<div id="info-restaurant" class="w3-margin w3-white w3-third w3-center" onclick="document.getElementById('${restaurant.name}').style.display='block'">
      <span>${restaurant.name}</span><br><img class="w3-image w3-margin" src="${restaurant.photo}" alt="Plato"></div>
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

let markerRest = null;

fetch('../data-restaurant/restaurants.json')
  .then(response => response.json())
  .then(arrRest => {
    optionsFilter.restaurants = arrRest;
    markerRest = arrRest;
    infoMap.innerHTML = printRestaurant(arrRest)
  })
  .catch(error => console.log(error))

typeFood.addEventListener('change', () => {
  optionsFilter.type = typeFood.value;
  infoMap.innerHTML = printRestaurant(selecRest(optionsFilter));
})

district.addEventListener('change', () => {
  optionsFilter.addres = district.value;
  infoMap.innerHTML = printRestaurant(selecRest(optionsFilter));
})

searchRest.addEventListener('keyup', () => {
  optionsFilter.name = searchRest.value;
  infoMap.innerHTML = printRestaurant(selecRest(optionsFilter));
})

const createMarker = (place) => {
  // Creamos un marcador
  const marker = new google.maps.Marker({
    map: map,
    position: place.coordinates
  });

  // Asignamos el evento click del marcador
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

let map;
let infowindow;

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
    infowindow = new google.maps.InfoWindow();
    markerRest.forEach(colocationMarker => createMarker(colocationMarker))
  });
}

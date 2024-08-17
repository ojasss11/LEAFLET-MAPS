// MAP INITILIZATION
// KARJAT CO ORDINATES
var map = L.map("map").setView([18.9102, 73.3283], 13);
// var map = L.map("map").setView([18.9102, 73.3283], 18); // Increased zoom level from 13 to 18

// MY HOME CO-ORDINATES
// var map = L.map("map").setView([18.912623, 73.322249], 13);
// first map
let osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19, // Adjust this if needed
});
osm.addTo(map);
// JUST FOR DEMO
// SECOND MAP
var CyclOSM = L.tileLayer(
  "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);
// CyclOSM.addTo(map);
// Darker mode
// third map
var Stadia_AlidadeSmoothDark = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
  {
    minZoom: 0,
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: "png",
  }
);
// Stadia_AlidadeSmoothDark.addTo(map);
// Google streets--FOURTH MAP
var googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
// googleStreets.addTo(map);
// satellite view
/*
var googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleSat.addTo(map);
*/
// MARKER

var singleMarker = L.marker([18.912623, 73.322249]);
singleMarker.bindPopup("MY HOME " + singleMarker.getLatLng()).openPopup();
singleMarker.addTo(map);

// L.marker([18.912623, 73.322249]).addTo(map);
var myIcon = L.icon({
  iconUrl: "IMAGES/black_marker.png",
  iconSize: [38, 95],
  /*
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: "my-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
  */
});
var secondMarker = L.marker([18.91030004137826, 73.32351862703473], {
  icon: myIcon,
  // draggable: true,
});
var popup = secondMarker
  .bindPopup("SATTU VADAPAV " + secondMarker.getLatLng())
  .openPopup();
popup.addTo(map);
console.log(secondMarker.toGeoJSON());
var baseMaps = {
  OSM: osm,
  Cyclo: CyclOSM,
  DARK: Stadia_AlidadeSmoothDark,
  "GOOGLE STREETS": googleStreets,
};

var overlayMaps = {
  Cities: cities,
};

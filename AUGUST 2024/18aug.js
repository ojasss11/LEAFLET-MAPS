// map initialization
const map = L.map("map").setView([18.9123, 73.3219], 13);
// osm layer

let osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

// L.marker([18.9123, 73.3219]).addTo(map).bindPopup("HOME").openPopup();
//topo maps
let topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
});
topo.addTo(map);
// MAPTILER
/*
let maptiler = L.tileLayer(
  "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=243PFp589RrlynHlEusu",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
);
maptiler.addTo(map);
*/
// google streets maps
let googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleStreets.addTo(map);
let googleHybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleHybrid.addTo(map);
// home coordinates
let myIcon = L.icon({
  iconUrl: "MARKERS/red 1.png",
  iconSize: [30, 30],
  /*
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: "my-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
  */
});

// let homeMark = L.marker([18.9123, 73.3219], { icon: myIcon, draggable: false });
// EXCLUDED THE ICON
let homeMark = L.marker([18.9123, 73.3219]);
/*
homeMark
  .addTo(map)
  .bindPopup("HOMING " + homeMark.getLatLng().toString())
  .openPopup();
  */
// EXCLUDED THE getLatLng() method
// GOOGLE SATELLITE
let googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleSat.addTo(map);
//google terrain
let googleTerrain = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleTerrain.addTo(map);
homeMark.addTo(map).bindPopup("HOMING ").openPopup();
let workPlace = L.marker([19.0166, 73.1046]);
workPlace
  .addTo(map)
  .bindPopup("Mahatma Gandhi Mission's College of Engineering and Technology")
  .openPopup();
let itmIhs = L.marker([19.0033, 73.128]);
itmIhs.addTo(map).bindPopup("ITM IHS college of Nursing").openPopup();
// 18.993289269586707, 73.1158742 -->orion mall
let orionMall = L.marker([18.9932, 73.115]);
orionMall.addTo(map).bindPopup("ORION MALL").openPopup();

// LAYER CONTROLLER
var baseMaps = {
  "OSM DEMO": osm,
  "GOOGLE STREES": googleStreets,
  "GOOGLE HYBRID": googleHybrid,
  "GOOGLE TERRAIN": googleTerrain,
  "GOOGLE SATELLITE": googleSat,
  // MAPTILER: maptiler,
};

var overlayMaps = {
  HOME: homeMark,
  College: workPlace,
};
let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

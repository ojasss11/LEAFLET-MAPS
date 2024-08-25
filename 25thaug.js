const map = L.map("map").setView([18.912, 73.322], 13);
let googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
// google
let googleHybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleHybrid.addTo(map);
googleStreets.addTo(map);
let markHome = L.marker([18.912, 73.322]).bindPopup("HOME KARJAT").openPopup(); // Open the popup automatically
markHome.addTo(map);
/*
let workPlace = L.marker([19.0166, 73.1046]);
workPlace
  .addTo(map)
  .bindPopup("Mahatma Gandhi Mission's College of Engineering and Technology")
  .openPopup();
  */
// Create a marker at the specified coordinates
let workPlace = L.marker([19.0166, 73.1046]);
// Add the marker to the map
workPlace.addTo(map);
// Bind a popup to the marker with the specified content
workPlace.bindPopup(
  "Mahatma Gandhi Mission's College of Engineering and Technology"
);

// Open the popup automatically
workPlace.openPopup();
// LAYER CONTROLLER
var baseMaps = {
  HYBRID: googleHybrid,
  "GOOGLE MAPS": googleStreets,
};
// Add layer control to the map
L.control.layers(baseMaps).addTo(map);
// ROUTING
L.Routing.control({
  waypoints: [L.latLng(18.912, 73.322), L.latLng(19.0166, 73.1046)],
}).addTo(map);

const map = L.map("map").setView([18.912, 73.322], 13);

let tileLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
  }
);
tileLayer.addTo(map);
let googleStreet = (googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
));
googleStreet.addTo(map);
let markHome = L.marker([18.912, 73.322]).bindPopup("HOME KARJAT").openPopup();
markHome.addTo(map);

let workPlace = L.marker([19.0166, 73.1046]);
workPlace
  .addTo(map)
  .bindPopup("Mahatma Gandhi Mission's College of Engineering and Technology")
  .openPopup();

L.Routing.control({
  waypoints: [L.latLng(18.912, 73.322), L.latLng(19.0166, 73.1046)],
  routeWhileDragging: false,
}).addTo(map);

var baseMaps = {
  OpenStreetMap: L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
    }
  ),
  GOOGLE: googleStreet,
};

L.control.layers(baseMaps).addTo(map);
/*
map.on("click", function (e) {
  // console.log(e);
  let secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  L.Routing.control({
    waypoints: [L.latLng(18.912, 73.322), L.latLng(e.latlng.lat, e.latlng.lng)],
    routeWhileDragging: false,
  }).addTo(map);
});
*/
// Variable to hold the routing control instance
let routingControl = null;
let isRouteVisible = false; // Flag to check if route is displayed

// Function to toggle the navigation route
function toggleRoute() {
  if (!isRouteVisible) {
    // Add routing control if it doesn't exist
    routingControl = L.Routing.control({
      waypoints: [L.latLng(18.912, 73.322), L.latLng(19.0166, 73.1046)],
      routeWhileDragging: false,
    }).addTo(map);
    isRouteVisible = true;
  } else {
    // Remove routing control if it exists
    map.removeControl(routingControl);
    routingControl = null;
    isRouteVisible = false;
  }
}

// Add event listener to the button
document.getElementById("navButton").addEventListener("click", toggleRoute);

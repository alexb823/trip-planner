const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYWxleGI4MjMiLCJhIjoiY2pzZmZlYjl6MGowcDN5cnRya2pmbDAxNSJ9.yZt1n8jvejD0jPcko2dZRA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map);

// Create a map object
var myMap = L.map("map", {
 center: [15.5994, -28.6731],
 zoom: 2
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
 attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
 maxZoom: 2,
 id: "mapbox.streets-basic",
 accessToken: API_KEY
}).addTo(myMap);

// Country data
var countries = [
 {

   name: "Canada",
   location: [56.41117, -96.69812],
   points: 227
 },
 {   name: "Germany", //Euro Region
   location: [51.1657, 10.4515],
   points: 218
 },
 {

   name: "Mexico",
   location: [19.432608, -99.133209],
   points: 156
 },
 {

   name: "China",
   location: [35.8592948, 104.1361118],
   points: 140
 },

];
// Add circles to map
 //L.circle(countries[i].location, {
   //fillOpacity: 0.75,
   //color: "white",
   //fillColor: color,

   // Adjust radius
   //radius: countries[i].points * 1500
 //}).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);


 // Add our marker cluster layer to the map
 //myMap.addLayer(markers);

 // Initialize SELECTION LayerGroups to create filters by state and month/year comparisons
//var layers = {
//  COUNTRY: new L.LayerGroup()};

// Create a control for our layers, add our overlay layers to it
//L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
var info = L.control({
  position: top
});

// When the layer control is added, insert a div with the class of "legend"
//info.onAdd = function() {
  //var div = L.DomUtil.create("div", "legend");
  //return div;
//};
// Add the info legend to the map
//info.addTo(myMap);

//create new markers

var Canmarker = L.marker( [56.41117, -96.69812])
    .bindPopup ("<h4> Canada and US</h4> <br> <h3>Imports</h3> 2017YTD - $197,519,122,560 <br> 2018YTD = $215,482,647,147 <p> <h3>Exports</h3> 2017YTD= $154,430,185,091 <br> 2018YTD= $166,861,006,6466")
    .addTo(myMap)
    .openPopup(Canmarker);


var Chinmarker = L.marker( [35.8592948, 104.1361118])
    .bindPopup("<h4>China and US</h4> <br> <h3>Imports</h3> <br> 2017YTD = $$327,076,981,881 <br> 2018YTD = $356,876,583,676 <p> <h3>Exports</h3> 2017YTD  $119,978,922,069 <br> 2018YTD= $76,637,783,832")
    .addTo(myMap)
    .openPopup(Chinmarker);

  var Mexmarker = L.marker( [19.432608, -99.133209])
      .bindPopup ("<h4>Mexico and US</h4> <br> <h3>Import</h3> 2017YTD $206,358,101,678 <br> 2018YTD=$229,618,923,850 <br> <p> <h3> Exports</h3> <br> 2017YTD-$123,061,512,353 <br> 2018YTD = $135,602,098,408")
      .addTo(myMap)
      .openPopup(Mexmarker);

var Euromarker = L.marker( [51.1657, 10.4515])
    .bindPopup ("<h4>EURO 15 and US</h4> <br> <h3> Imports</h3> <br> 2017YTD=$264,534,153,997 <br> 2018YTD=$306,018,666,369 <p> <h3>Exports</h3> 2017YTD= $502,978,891,172 <br> 2018YTD=$552,658,802,368<br>")
    .addTo(myMap)
    .openPopup(Euromarker)

//function onEachFeature(feature, layer) {
 // layer.bindPopup("<h3>" + feature.properties.place +
 //   "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");


// Binding a pop-up to our marker
//marker.bindPopup("Hello There!");
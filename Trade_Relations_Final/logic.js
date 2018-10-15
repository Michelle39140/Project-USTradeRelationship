// Create a map object
var myMap = L.map("map", {
 center: [15.5994, -28.6731],
 zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
 attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
 maxZoom: 18,
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
    .bindPopup ("CANADA <br> 2017-Total US Imports from Canada to US = $298,616,595,151 <br> 2017-Total US Exports from US to Canada = $233,705,104,333 <br> 2018-Total US Imports from Canada to US =$215,482,647,147 <br> 2018-Total US Exports from US to Canada = $166,861,006,646")
    .addTo(myMap)
    .openPopup(Canmarker);


var Chinmarker = L.marker( [35.8592948, 104.1361118])
    .bindPopup("China <br> 2017-Total US Imports from China to US = $517,490,666,110<br> 2017-Total US Exports from US to China = $119,978,922,069 <br> 2018-Total US Imports from China to US = $356,876,583,676 <br> 2018-Total US Exports from US to China = $76,637,783,832")
    .addTo(myMap)
    .openPopup(Chinmarker);

  var Mexmarker = L.marker( [19.432608, -99.133209])
      .bindPopup ("Mexico <br> 2017-Total US Imports from Mexico to US = $313,558,563,322 <br> 2017-Total US Exports from US to Mexico = $186,987,213,975 <br> 2018-Total US Imports from Mexico to US =$229,618,923,850 <br> 2018-Total US Exports from US to Mexico = $135,602,098,408")
      .addTo(myMap)
      .openPopup(Mexmarker);

var Euromarker = L.marker( [51.1657, 10.4515])
    .bindPopup ("EURO 15 <br> 2017-Total US Imports from Euro15 to US = $410,564,388,038 <br> 2017-Total US Exports from US to Euro15 = $772,838,432,472 <br> 2018-Total US Imports from Euro15 to US = $306,018,666,369 <br>  2018-Total US Exports from US to Euro15 = $552,658,802,368")
    .addTo(myMap)
    .openPopup(Euromarker)

//function onEachFeature(feature, layer) {
 // layer.bindPopup("<h3>" + feature.properties.place +
 //   "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");


// Binding a pop-up to our marker
//marker.bindPopup("Hello There!");
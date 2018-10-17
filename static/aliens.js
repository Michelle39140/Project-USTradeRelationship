var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetimeinput");
var $cityInput = document.querySelector("#cityinput");
var $stateInput = document.querySelector("#stateinput");
var $countryInput = document.querySelector("#countryinput");
var $sitc_numInput = document.querySelector("#sitc_numinput");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredalliens = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable(filteredalliens) {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredalliens.length; i++) {
    // Get get the current address object and its fields
    var ufosightings = filteredalliens[i];
    var fields = Object.keys(ufosightings);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);

    for (var j = 0; j < fields.length; j++) {
      // For every field in the ufosightings object, create a new cell and set its inner text to be the current value at the current ufosightings's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufosightings[field];
    }
  }
}

function handleSearchButtonClick() {
  //format the user's search by removing leading and trailing whitespace, lowercase the string
  filteredalliens = dataSet;
 // var filterDate = $datetimeInput.value.trim();
  //var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  console.log("filterState:", filterState);
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filtersitc_num = $sitc_numInput.value.trim().toLowerCase();
  console.log("filterCountry",filterCountry);

  // Set filteredalliens to an array 
  /*filteredalliens = dataSet.filter(function(ufodata) {
    var ufodatetime = ufodata.datetime;
    var ufoCity = ufodata.city.toLowerCase();
    var ufoState = ufodata.state.toLowerCase();
    var ufoCountry = ufodata.country.toLowerCase();
    var ufoShape = ufodata.shape.toLowerCase();
  

  // If true, add the address to the filteredalliens, otherwise don't add it to filteredalliens
   if ((ufodatetime === filterDate || filterDate == '') &&
       (ufoCity === filterCity || filterCity == '') &&
       (ufoState === filterState || filterState == '') &&
       (ufoCountry === filterCountry || filterCountry == '') &&
       (ufoShape === filterShape || filterShape == '')
      ){
       	return true;
      }
      return false;
  });*/

  /*filteredalliens = dataSet.filter(function(ufodata) {
    var ufoState = ufodata.state.toLowerCase();
    var ufoCountry = ufodata.country.toLowerCase();
    console.log("values ", ufoCountry, ufoState);

  // If true, add the address to the filteredalliens, otherwise don't add it to filteredalliens
   if (
       (ufoState == filterState || filterState == '') &&
       (ufoCountry == filterCountry || filterCountry == '')
      ){
       	return true;
      }
      return false;
  });*/

  filteredalliens = dataSet.filter(row => (
      (row.state.trim().toLowerCase() == filterState || filterState == '') && 
      (row.country.trim().toLowerCase() == filterCountry || filterCountry == '') &&
      (row.sitc_num.trim().toLowerCase() == filtersitc_num ||filtersitc_num == ''))
  );
  console.log("filteredalliens",filteredalliens);
  loadList();
 }

var pageList = new Array();
var currentPage = 1;
var numberPerPage = 25;
var numberOfPages = 1;

function getNumberOfPages(list) {
    return Math.ceil(filteredalliens.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}


function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = filteredalliens.slice(begin, end);
    renderTable(pageList);
    numberOfPages = getNumberOfPages(filteredalliens)
    document.getElementById("Page").value = "Page: " + currentPage;
    check();
}
    

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

    
loadList();
    


// Critilytics -- GT Data Science Class 10.09.2108
var switcher = {
  "0":'0 FOOD AND LIVE ANIMALS',
  "1":'1 BEVERAGES AND TOBACCO',
  "2":'2 CRUDE MATERIALS, INEDIBLE, EXCEPT FUELS',
  "3":'3 MINERAL FUELS, LUBRICANTS AND RELATED MATERIALS',
  "4":'4 ANIMAL AND VEGETABLE OILS, FATS AND WAXES',
  "5":'5 CHEMICALS AND RELATED PRODUCTS, N.E.S.',
  "6":'6 MANUFACTURED GOODS CLASSIFIED CHIEFLY BY MATERIAL',
  "7":'7 MACHINERY AND TRANSPORT EQUIPMENT',
  "8":'8 MISCELLANEOUS MANUFACTURED ARTICLES',
  "9":'9 COMMODITIES AND TRANSACTIONS NOT CLASSIFIED ELSEWHERE IN THE SITC'
}



function buildCharts(country,sitc) {
  //function to build pie chart and bubble chart
var lineData1={}
var lineData2={}
d3.json("/imports/"+country+"/"+sitc).then(
    (sdata) => {
      // 1. line chart for imports------------------------------------------
      // create a line chart with selected samples
      lineData1 = [{
        y: sdata,
        x: ['JAN17',
        'FEB17',
        'MAR17',
        'APR17',
        'MAY17',
        'JUN17',
        'JUL17',
        'AUG17',
        'SEP17',
        'OCT17',
        'NOV17',
        'DEC17',
        'JAN18',
        'FEB18',
        'MAR18',
        'APR18',
        'MAY18',
        'JUN18',
        'JUL18'],
        textinfo: "label", // set text to "label" instead of "text"
        type: 'line',
        tooltip:sdata
      }];
      
  var Layout = {
    title: `Imports from ${country}`
  }
  Plotly.newPlot('pie', lineData1,Layout);
    })

d3.json("/exports/"+country+"/"+sitc).then(
    (sdata) => {

      // 1. line chart for imports------------------------------------------
      // create a line chart with selected samples
      lineData2 = [{
        y: sdata,
        x: ['JAN17',
        'FEB17',
        'MAR17',
        'APR17',
        'MAY17',
        'JUN17',
        'JUL17',
        'AUG17',
        'SEP17',
        'OCT17',
        'NOV17',
        'DEC17',
        'JAN18',
        'FEB18',
        'MAR18',
        'APR18',
        'MAY18',
        'JUN18',
        'JUL18'],
        textinfo: "label", // set text to "label" instead of "text"
        type: 'line',
        tooltip:sdata
      }];    

      var Layout = {
        title: `Exports to ${country}`
      }
      Plotly.newPlot('gauge', lineData2,Layout);
    })

}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  var countries = ['Canada', 'China', 'EURO', 'Mexico']
  // Use the list of sample names to populate the select options
  countries.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    var selector = d3.select("#selcom");
    var COMMODITIES = ['0 FOOD AND LIVE ANIMALS',
    '1 BEVERAGES AND TOBACCO',
    '2 CRUDE MATERIALS, INEDIBLE, EXCEPT FUELS',
    '3 MINERAL FUELS, LUBRICANTS AND RELATED MATERIALS',
    '4 ANIMAL AND VEGETABLE OILS, FATS AND WAXES',
    '5 CHEMICALS AND RELATED PRODUCTS, N.E.S.',
    '6 MANUFACTURED GOODS CLASSIFIED CHIEFLY BY MATERIAL',
    '7 MACHINERY AND TRANSPORT EQUIPMENT',
    '8 MISCELLANEOUS MANUFACTURED ARTICLES',
    '9 COMMODITIES AND TRANSACTIONS NOT CLASSIFIED ELSEWHERE IN THE SITC'
  ]
  // Use the list of sample names to populate the select options
  COMMODITIES.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = "Canada";
    const firstcom = "Canada";
    buildCharts(firstSample,"0");
  };

d3.select("#run").on("click", function(){
  var sel1 = d3.select("#selDataset");
  newSample = sel1.property("value");
  console.log(newSample)
  var sel2 = d3.select("#selcom");
  newcom = sel2.property("value").split(" ")[0];
  console.log(newcom)
  // Fetch new data each time a new sample is selected
  buildCharts(newSample,newcom);
})

// Initialize the dashboard
init();

// resize charts when window size changes
function resize(){
  var rSample = d3.select("#selDataset").property("value");
  console.log("sample",rSample);
  buildCharts(rSample);
}
d3.select(window).on('resize', resize);
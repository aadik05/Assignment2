// This script draws every chart on the page. It runs at the end of <body>, so all the empty
// chart boxes (<div id="chart1"> etc.) already exist when it runs.

// One line per chart: the id of its box in index.html (the # means "the element with this id"),
// then the path to its Vega-Lite JSON file. Every line except the last one must end with a comma,
// or none of the charts will load.
var charts = [
  ["#chart1", "js/charts/01_australia_land_trend.vg.json"],
  ["#chart2", "js/charts/02_world_organic_share_map.vg.json"],
  ["#chart3", "js/charts/03_world_organic_area_symbols.vg.json"],
  ["#chart4", "js/charts/04_australia_states_map.vg.json"],
  ["#chart5", "js/charts/05_world_share_waffle.vg.json"],
  ["#chart6", "js/charts/06_australia_world_stacked_area.vg.json"],
  ["#chart7", "js/charts/07_cost_pressures_heatmap.vg.json"],
  ["#chart8", "js/charts/08_export_flow_map.vg.json"]
];

// Loop over the list. For each chart, vegaEmbed (from the vega-embed library loaded in the <head>)
// fetches the JSON file, compiles the Vega-Lite spec to Vega, and draws it inside the box.
// chart[0] is the box id, chart[1] is the file.
// "actions: false" hides the small "..." export menu, which would be clutter on a presentation page.
// vegaEmbed returns a promise; .catch(console.error) prints any problem (such as a wrong file name)
// in the browser console instead of failing silently.
charts.forEach(function (chart) {
  vegaEmbed(chart[0], chart[1], { actions: false }).catch(console.error);
});

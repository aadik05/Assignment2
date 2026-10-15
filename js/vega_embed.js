// One line per chart: the id of its box in index.html, then its JSON file.
// Every line except the last one must end with a comma.
var charts = [
  ["#chart1", "js/charts/01_australia_land_trend.vg.json"],
  ["#chart2", "js/charts/02_world_organic_share_map.vg.json"],
  ["#chart3", "js/charts/03_world_organic_area_symbols.vg.json"],
  ["#chart4", "js/charts/04_australia_states_map.vg.json"],
  ["#chart5", "js/charts/05_world_share_waffle.vg.json"]
];

// Draw each chart in its box. "actions: false" hides the small export menu.
charts.forEach(function (chart) {
  vegaEmbed(chart[0], chart[1], { actions: false }).catch(console.error);
});
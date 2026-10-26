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
  ["#chart8", "js/charts/08_export_flow_map.vg.json"],
  ["#chart9", "js/charts/09_export_products_isotype.vg.json"],
  ["#chart10", "js/charts/10_sales_growth_waterfall.vg.json"],
  ["#chart11", "js/charts/11_category_movers_bars.vg.json"],
  ["#chart12", "js/charts/12_where_shoppers_buy_bar.vg.json"],
  ["#chart13", "js/charts/13_barriers_slope.vg.json"]
];

// Loop over the list. For each chart, vegaEmbed (from the vega-embed library loaded in the <head>)
// fetches the JSON file, compiles the Vega-Lite spec to Vega, and draws it inside the box.
charts.forEach(function (chart) {
  vegaEmbed(chart[0], chart[1], { actions: false }).catch(console.error);
});

// One line per chart: the id of its box in index.html, then its JSON file.
var charts = [
];

// Draw each chart in its box. "actions: false" hides the small export menu.
charts.forEach(function (chart) {
  vegaEmbed(chart[0], chart[1], { actions: false }).catch(console.error);
});
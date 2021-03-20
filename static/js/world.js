var earth;
function initialize() {
  earth = new WE.map('earth_div');
  earth.setView([46.8011, 8.2266], 2);
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(earth);

  var marker3 = WE.marker([37.090, -95.713]).addTo(earth);
  marker3.bindPopup("<b><span style='color:#999'>USA</span></b><br><span style='color:#999'> CO2 Emissions: 5,514,029,294 tonnes</span><br><span style='color:#999'> Population: 316.1 Million</span>", {maxWidth: 120, closeButton: false}).openPopup();

  var marker = WE.marker([36.205, 138.253]).addTo(earth);
  marker.bindPopup("<b><span style='color:#999'>Japan</span></b><br><span style='color:#999'> CO2 Emissions: 1,314,702,999 tonnes</span><br><span style='color:#999'> Population: 127.4 Million</span>", {maxWidth: 150, closeButton: true});

  var marker2 = WE.marker([35.862, 104.195]).addTo(earth);
  marker2.bindPopup("<b><span style='color:#999'>China</span></b><br><span style='color:#999'> CO2 Emissions: 9,796,526,887 tonnes</span><br><span style='color:#999'> Population: 1.357 Billion</span>", {maxWidth: 120, closeButton: false});

  var marker4 = WE.marker([61.524, 105.319]).addTo(earth);
  marker4.bindPopup("<b><span style='color:#999'>Russia</span></b><br><span style='color:#999'> CO2 Emissions: 1,619,172,892 tonnes</span><br><span style='color:#999'> Population: 143.5 Million</span>", {maxWidth: 120, closeButton: false});

  var marker5 = WE.marker([20.594, 78.963]).addTo(earth);
  marker5.bindPopup("<b><span style='color:#999'>India</span></b><br><span style='color:#999'> CO2 Emissions: 2,033,412,295 tonnes</span><br><span style='color:#999'> Population: 1.281 Billion</span>", {maxWidth: 120, closeButton: false});

  // Start a simple rotation animation
  var before = null;
  requestAnimationFrame(function animate(now) {
      var c = earth.getPosition();
      var elapsed = before? now - before: 0;
      before = now;
      earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
      requestAnimationFrame(animate);
  });
}
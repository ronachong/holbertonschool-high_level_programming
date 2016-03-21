// Initialize the platform object:
var platform = new H.service.Platform({
    'app_id': 'FWq7yjj4AFPO0BG9w1z4',
    'app_code': '-vHGFodH5h74Yxf79ZhCIQ'
});

var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
        zoom: 16,
        center: { lng: -122.40028, lat: 37.7920807 }
    });

function setUpClickListener(map) {
  // Attach an event listener to map display
  // obtain the coordinates an display in an alert box.
  //
  var TOUCH = H.maps.dom.Page.browser.touch,
    CLICK = TOUCH ? 'tap' : 'click';
  map.addListener(CLICK, function (evt) {
    var coord = map.pixelToGeo(evt.displayX, evt.displayY);
    alert('Clicked at ' + coord);
  });
}

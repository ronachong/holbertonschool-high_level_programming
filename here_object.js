// Add window resize listener to adjust the map dimensions.
window.addEventListener('resize', function() {
    map.getViewPort().resize();
});
// Initialize the platform object:
var platform = new H.service.Platform({
    'app_id': 'BErGSfkWWcdKvQrOCfsw',
    'app_code': 'X4eLQ9jUTNaEL5AK5NYX2Q'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
        zoom: 16,
        center: { lng: -122.40028, lat: 37.7920807 }
    });

// Create the default UI; show default controls as well as the Context Menu control
var ui = H.ui.UI.createDefault(map, defaultLayers);

var zoomRectangle = ui.getControl('zoomrectangle');

// Create an info bubble object at a specific geographic location:
var bubble = new H.ui.InfoBubble({ lng: -122.39962, lat: 37.79229 }, {
        content: '<b>Hello Holberton!</b>'
   });

var bubble2 = new H.ui.InfoBubble({ lng: -122.39962, lat: 37.79229 }, {
        content: '<b>Hello again!</b>'
   });

// Create a Zoom Rectangle?
ui.addcontrol.ZoomRectangle;
/*
var opt_options = { H.ui.ZoomRectangle.Options= }
    }; */

/* var opt_options = {
        opt_options: { H.ui.ZoomRectangle.Options= }
    }; */

/* var zoomrectangle = new H.ui.ZoomRectangle(opt_options); */

/* H.ui.ZoomRectangle(opt_options); */
/* opt_options:    {H.ui.ZoomRectangle.Options=}; */

/*
var zoomrectangle = new H.ui.ZoomRectangle(
    opt_options,
    {
        opt_options: { H.ui.ZoomRectangle.Options= }
    });
*/

// Enable map events, like "contextmenu"
var events = new H.mapevents.MapEvents(map);
var behavior = new H.mapevents.Behavior(events);

// Add 'Zoom in' context menu item
map.addEventListener('contextmenu', onContextMenuRequested);


function onContextMenuRequested(e) {
    e.items.push(new H.util.ContextItem({
    label: 'Hello Holberton School',
    callback: function() {
        map.setZoom(map.getZoom() + 1);
  }
  }));
    
   var coord = map.screenToGeo(e.viewportX, e.viewportY);
    console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
    ((coord.lat > 0) ? 'N' : 'S') +
    ' ' + Math.abs(coord.lng.toFixed(4)) +
     ((coord.lng > 0) ? 'E' : 'W'));
    
    var rgcParams = {
        prox: 'coord.lat,coord.lng,100'
        mode: 'retrieveAddresses'
        maxresults: '1'
    }
    
    // Send the RGC request over.
    gc.reverseGeocode(rgcParams, function(result) {
      onRGCResult(result, contextMenuEvent);
    }, function(error) {
      console.log(error);
    });
}

// Add info bubble to the UI:
ui.addBubble(bubble);





// Initialize the platform object:
var platform = new H.service.Platform({
    'app_id': 'FWq7yjj4AFPO0BG9w1z4',
    'app_code': '-vHGFodH5h74Yxf79ZhCIQ'
});

      // Retrieve the target element for the map:
      var targetElement = document.getElementById('mapContainer');
      // Obtain the default map types from the platform object:
      var defaultLayers = platform.createDefaultLayers();
      // Instantiate the map:
      var map = new H.Map (
      document.getElementById('mapContainer'),
      defaultLayers.normal.map,
      {
        zoom: 16,
        center: { lng: -122.40028, lat: 37.7920807 }
      });
      // Enable map events, like "contextmenu"
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      // create default UI
      var ui = H.ui.UI.createDefault(map, defaultLayers);
      // Add zoomrectangle UI feature
      ui.addControl('zoomrectangle', new H.ui.ZoomRectangle);
      var zoomrectangle = ui.getControl('zoomrectangle');
      zoomrectangle.setAlignment('right-middle');
      /*
       * Processes reverse geocoder response and
       * adds a context menu item showing the associated address.
       */
      function onRGCResult(result, e) {
        var addressLabel = result.Response.View[0].Result[0];
        e.items.push(new H.util.ContextItem({
        label: addressLabel.Location.Address.Label,
        }));
        // Dispatch the context menu event again for all attached listeners
        e.currentTarget.dispatchEvent(e);
        e.stopPropagation();
      }
      function onContextMenuRequested(e) {
        var coord = map.screenToGeo(e.viewportX, e.viewportY);
        var gc = platform.getGeocodingService();
        var rgcParams = {
            prox: coord.lat + ", " + coord.lng,
            mode: 'retrieveAddresses',
            maxresults: 1
        };
        // Send the RGC request over.
        gc.reverseGeocode(rgcParams, function(result)  {
          onRGCResult(result, e);
        }, function(error) {
          console.log(error);
        });
      };
      // Add eventlistener for contextmenu event.
      map.addEventListener('contextmenu', onContextMenuRequested);
      function onMapTap(e) {
        //extracts the screen coords and tanslates them to geo coords:
        var coord = map.screenToGeo(e.currentPointer.viewportX, e.currentPointer.viewportY);
        // Create the parameters for the routing request:
        var routingParams = {
          'mode': 'fastest;pedestrian',
          'start': coord.lat + ", " + coord.lng,
          'time': 'PT0H10M',
        };
      };
      // Add event listener for resize
      window.addEventListener('resize', function () {
      map.getViewPort().resize();
    });

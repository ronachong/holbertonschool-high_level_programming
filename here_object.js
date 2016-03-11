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


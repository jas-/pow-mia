/* globalize the map & data objects */
var map;
var data;

/* initialize defaults for the map */
function initialize() {
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(30.448674,56.777344),
        mapTypeId: google.maps.MapTypeId.HYBRID,
        mapTypeControl: false,
        streetViewControl: false,
        panControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    }

    /* display the map */
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

/* load the requested kml overlay */
function _loader(file) {

    /* unset any existing overlays first */
    if (data) data.setMap(null);

    /* loop over specified array of kml data overlays to display */
    for (var i=0; i<file.length; i++) {
        if (files[file[i]]) {
            data = new google.maps.KmlLayer(files[file[i]], {
                map: map
            });

            /* bind click events & information dialogs to any markers within the kml data file */
            google.maps.event.addListener(data, 'click', function(kmlEvent) {
                _modal(kmlEvent.featureData.description);
            });
        }
    }
}

/* modal window for details */
function _modal(data) {

    /* create div and assign id & css for overlay element */
    var _w = document.createElement('div');
    _w.setAttribute('id', 'overlay');
    _w.setAttribute('style', 'z-index: 9999999; position: fixed,top: 0,left: 0,width: 100%,height: 100%,background: #000,opacity: 0.5,filter: alpha(opacity=50)');

    /* create div and assign id & css for modal window wrapper */
    var _m = document.createElement('div');
    _m.setAttribute('id', 'modal');
    _m.setAttribute('style', 'position: absolute,background: rgba(0,0,0,0.2),border-radius: 14px,padding: 8px,width: 60%');

    /* create div and assign id & css for content element */
    var _c = document.createElement('div');
    _c.setAttribute('id', 'content');
    _c.setAttribute('css', 'border-radius: 8px,background: #fff,padding: 20px');

    /* our modal window needs a close method & link */
    var _x = document.createElement('div');
    _x.setAttribute('style', 'text-align: right');
    _x.innerHTML = "<a style='cursor: pointer' onclick='document.getElementById('map').remove(document.getElementById('overlay'))' id='close'>[X]</a>";
    _x.innerHTML += data;

    /* build & append */
    _c.appendChild(_x);
    _m.appendChild(_c);
    _w.appendChild(_m);

    /* display it */
    document.getElementById('map').appendChild(_w);
}

/* spoof links for users */
function _spoof(link) {
    link.style.cursor = 'pointer';
}

/* change page title */
function _title(text) {
    document.title = text;
}

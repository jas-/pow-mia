/* google needs this URL to be publicly accessible & should be root path of kml files */
var url = 'http://dev.in-my-cloud.com/pow-mia/kml/';

/* disable google's caching of kml data (enabled for debugging) */
var date = (new Date()).valueOf();

/* associative array of kml data files */
var files = new Array();

/* kml data files associated with WWI */
files['wwi']              = (date) ? url+'pow-mia-wwi.kml?r='+date : url+'pow-mia-wwi.kml';
files['wwi-army']         = (date) ? url+'pow-mia-wwi-army.kml?r='+date : url+'pow-mia-wwi-army.kml';
files['wwi-navy']         = (date) ? url+'pow-mia-wwi-navy.kml?r='+date : url+'pow-mia-wwi-navy.kml';
files['wwi-marines']      = (date) ? url+'pow-mia-wwi-marines.kml?r='+date : url+'pow-mia-wwi-marines.kml';
files['wwi-air-force']    = (date) ? url+'pow-mia-wwi-air-force.kml?r='+date : url+'pow-mia-wwi-airforce.kml';

/* kml data files associated with WWI */
files['wwii']              = (date) ? url+'pow-mia-wwii.kml?r='+date : url+'pow-mia-wwii.kml';
files['wwii']['army']      = (date) ? url+'pow-mia-wwii-army.kml?r='+date : url+'pow-mia-wwii-army.kml';
files['wwii']['navy']      = (date) ? url+'pow-mia-wwii-navy.kml?r='+date : url+'pow-mia-wwii-navy.kml';
files['wwii']['marines']   = (date) ? url+'pow-mia-wwii-marines.kml?r='+date : url+'pow-mia-wwii-marines.kml';
files['wwii']['air-force'] = (date) ? url+'pow-mia-wwii-air-force.kml?r='+date : url+'pow-mia-wwwii-airforce.kml';

/* kml data files associated with Korea */
files['korea']              = (date) ? url+'pow-mia-korea.kml?r='+date : url+'pow-mia-korea.kml';
files['korea']['army']      = (date) ? url+'pow-mia-korea-army.kml?r='+date : url+'pow-mia-korea-army.kml';
files['korea']['navy']      = (date) ? url+'pow-mia-korea-navy.kml?r='+date : url+'pow-mia-korea-navy.kml';
files['korea']['marines']   = (date) ? url+'pow-mia-korea-marines.kml?r='+date : url+'pow-mia-korea-marines.kml';
files['korea']['air-force'] = (date) ? url+'pow-mia-korea-air-force.kml?r='+date : url+'pow-mia-korea-airforce.kml';

/* kml data files associated with Vietnam */
files['vietnam']          = (date) ? url+'pow-mia-vietnam.kml?r='+date : url+'pow-mia-vietnam.kml';

/* kml data files associated with the cold war */
files['cold-war']         = (date) ? url+'pow-mia-cold-war.kml?r='+date : url+'pow-mia-cold-war.kml';

/* kml data files associated with desert storm */
files['desert-storm']     = (date) ? url+'pow-mia-desert-storm.kml?r='+date : url+'pow-desert-storm.kml';

/* kml data files associated with iraqi freedom */
files['iraqi-freedom']    = (date) ? url+'pow-mia-iraqi-freedom.kml?r='+date : url+'pow-iraqi-freedom.kml';

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
function _loader(file, reset) {

    /* unset any existing overlays first */
    if ((data)&&(reset)) data.setMap(null);

    /* initialize a layer with the specified kml file */
    data = new google.maps.KmlLayer(files[file], {
        map: map
    });

    /* bind click events to the markers using kml attributes to populate the info windows */
    google.maps.event.addListener(data, 'click', function(kmlEvent) {
        _modal(kmlEvent.featureData.description);
    });
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

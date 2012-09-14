/* google needs this URL to be publicly accessible & should be root path of kml files */
var url = 'http://dev.in-my-cloud.com/pow-mia/kml/';

/* disable google's caching of kml data (enabled for debugging) */
var date = (new Date()).valueOf();

/* associative array of kml data files */
var files = new Array();
files['wwi']              = (date) ? url+'pow-mia-wwi.kml?r='+date : url+'pow-mia-wwi.kml';
files['wwii']             = (date) ? url+'pow-mia-wwii.kml?r='+date : url+'pow-mia-wwii.kml';
files['korea']            = (date) ? url+'pow-mia-korea.kml?r='+date : url+'pow-mia-korea.kml';
files['vietnam']          = (date) ? url+'pow-mia-vietnam.kml?r='+date : url+'pow-mia-vietnam.kml';
files['cold-war']         = (date) ? url+'pow-mia-cold-war.kml?r='+date : url+'pow-mia-cold-war.kml';
files['el-dorado-canyon'] = (date) ? url+'pow-mia-el-dorado-canyon.kml?r='+date : url+'pow-mia-el-dorado-canyon.kml';
files['desert-storm']     = (date) ? url+'pow-mia-desert-storm.kml?r='+date : url+'pow-desert-storm.kml';
files['iraqi-freedom']    = (date) ? url+'pow-mia-iraqi-freedom.kml?r='+date : url+'pow-iraqi-freedom.kml';

/* globalize the map & data objects */
var map;
var data;

/* initialize defaults for the map map */
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
function loader(file) {

    /* unset any existing overlays first */
    if (data) data.setMap(null);

    /* initialize a layer with the specified kml file */
    data = new google.maps.KmlLayer(files[file], {
        map: map,
    });

    /* bind click events to the markers using kml attributes to populate the info windows */
    google.maps.event.addListener(data, 'click', function(kmlEvent) {
        var text = kmlEvent.featureData.description;
        new google.maps.InfoWindow({content: text});
    });
}

/* spoof links for users */
function spoof(link) {
    link.style.cursor = 'pointer';
}

/* change page title */
function title(text) {
    document.title = text;
}

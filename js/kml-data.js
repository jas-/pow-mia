/* google needs this URL to be publicly accessible & should be root path of kml files */
var url = 'http://dev.in-my-cloud.com/pow-mia/kml/';

/* disable google's caching of kml data (enabled for debugging) */
var date = (new Date()).valueOf();

/* associative array of kml data files */
var files = new Array();

/* ### WWI KML data files ### */
/* kml data file associated with overview of WWI */
files['wwi'] = (date) ?
    url+'pow-mia-wwi.kml?r='+date : url+'pow-mia-wwi.kml';

/* kml data file associated with US Army during WWI */
files['wwi-army'] = (date) ?
    url+'pow-mia-wwi-army.kml?r='+date : url+'pow-mia-wwi-army.kml';

/* kml data file associated with US Navy during WWI */
files['wwi-navy'] = (date) ?
    url+'pow-mia-wwi-navy.kml?r='+date : url+'pow-mia-wwi-navy.kml';

/* kml data file associated with US Marines during WWI */
files['wwi-marines'] = (date) ?
    url+'pow-mia-wwi-marines.kml?r='+date : url+'pow-mia-wwi-marines.kml';

/* kml data file associated with US Air Force during WWI */
files['wwi-air-force'] = (date) ?
    url+'pow-mia-wwi-air-force.kml?r='+date : url+'pow-mia-wwi-airforce.kml';
/* ### End WWI KML data files ### */

/* ### WWII KML data files ### */
/* kml data file associated with overview of WWII */
files['wwii'] = (date) ?
    url+'pow-mia-wwii.kml?r='+date : url+'pow-mia-wwii.kml';

/* kml data file associated with US Army during WWII */
files['wwii-army'] = (date) ?
    url+'pow-mia-wwii-army.kml?r='+date : url+'pow-mia-wwii-army.kml';

/* kml data file associated with US Navy during WWII */
files['wwii-navy'] = (date) ?
    url+'pow-mia-wwii-navy.kml?r='+date : url+'pow-mia-wwii-navy.kml';

/* kml data file associated with US Marines during WWII */
files['wwii-marines'] = (date) ?
    url+'pow-mia-wwii-marines.kml?r='+date : url+'pow-mia-wwii-marines.kml';

/* kml data file associated with US Air Force during WWII */
files['wwii-air-force'] = (date) ?
    url+'pow-mia-wwii-air-force.kml?r='+date : url+'pow-mia-wwwii-airforce.kml';
/* ### End WWII KML data files ### */

/* ### Korea KML data files ### */
/* kml data file associated with overview of Korea */
files['korea'] = (date) ?
    url+'pow-mia-korea.kml?r='+date : url+'pow-mia-korea.kml';

/* kml data file associated with US Army during Korean conflict */
files['korea-army'] = (date) ?
    url+'pow-mia-korea-army.kml?r='+date : url+'pow-mia-korea-army.kml';

/* kml data file associated with US Navy during Korean conflict */
files['korea-navy'] = (date) ?
    url+'pow-mia-korea-navy.kml?r='+date : url+'pow-mia-korea-navy.kml';

/* kml data file associated with US Marine corp during Korean conflict */
files['korea-marines'] = (date) ?
    url+'pow-mia-korea-marines.kml?r='+date : url+'pow-mia-korea-marines.kml';

/* kml data file associated with US Air Force during Korean conflict */
files['korea-air-force'] = (date) ?
    url+'pow-mia-korea-air-force.kml?r='+date : url+'pow-mia-korea-airforce.kml';
/* ### End Korea KML data files ### */

/* ### Vietnam KML data files ### */
/* kml data file associated with overview of Vietnam */
files['vietnam'] = (date) ?
    url+'pow-mia-vietnam.kml?r='+date : url+'pow-mia-vietnam.kml';

/* kml data file associated with US Army during Vietnam */
files['vietnam-army'] = (date) ?
    url+'pow-mia-vietnam-army.kml?r='+date : url+'pow-mia-vietnam-army.kml';

/* kml data file associated with US Navy during Vietnam */
files['vietnam-navy'] = (date) ?
    url+'pow-mia-vietnam-navy.kml?r='+date : url+'pow-mia-vietnam-navy.kml';

/* kml data file associated with US Marine Corp during Vietnam */
files['vietnam-marines'] = (date) ?
    url+'pow-mia-vietnam-marines.kml?r='+date : url+'pow-mia-vietnam-marines.kml';

/* kml data file associated with US Air Force during Vietnam */
files['vietnam-air-force'] = (date) ?
    url+'pow-mia-vietnam-air-force.kml?r='+date : url+'pow-mia-vietnam-airforce.kml';
/* ### End Vietnam KML data files ### */

/* ### Cold war KML data files ### */
/* kml data file associated with overview of Vietnam */
files['cold-war'] = (date) ?
    url+'pow-mia-cold-war.kml?r='+date : url+'pow-mia-cold-war.kml';

files['cold-war-army'] = (date) ?
    url+'pow-mia-cold-war-army.kml?r='+date : url+'pow-mia-cold-war-army.kml';

files['cold-war-navy'] = (date) ?
    url+'pow-mia-cold-war-navy.kml?r='+date : url+'pow-mia-cold-war-navy.kml';

files['cold-war-marines'] = (date) ?
    url+'pow-mia-cold-war-marines.kml?r='+date : url+'pow-mia-cold-war-marines.kml';

files['cold-war-air-force'] = (date) ?
    url+'pow-mia-cold-war-air-force.kml?r='+date : url+'pow-mia-cold-war-airforce.kml';
/* ### End Cold war KML data files ### */

/* ### Desert storm KML data files ### */
/* kml data file associated with over view of Vietnam */
files['desert-storm'] = (date) ?
    url+'pow-mia-desert-storm.kml?r='+date : url+'pow-desert-storm.kml';

/* kml data file associated with US Army during Desert storm */
files['desert-storm-army'] = (date) ?
    url+'pow-mia-desert-storm-army.kml?r='+date : url+'pow-mia-desert-storm-army.kml';

/* kml data file associated with US Navy during Desert storm */
files['desert-storm-navy'] = (date) ?
    url+'pow-mia-desert-storm-navy.kml?r='+date : url+'pow-mia-desert-storm-navy.kml';

/* kml data file associated with US Marine corp during Desert storm */
files['desert-storm-marines'] = (date) ?
    url+'pow-mia-desert-storm-marines.kml?r='+date : url+'pow-mia-desert-storm-marines.kml';

/* kml data file associated with US Air Force during Desert storm */
files['desert-storm-air-force'] = (date) ?
    url+'pow-mia-desert-storm-air-force.kml?r='+date : url+'pow-mia-desert-storm-airforce.kml';
/* ### End desert storm KML data files ### */

/* ### Iraqi freedom KML data files ### */
/* kml data files associated with iraqi freedom */
files['iraqi-freedom'] = (date) ?
    url+'pow-mia-iraqi-freedom.kml?r='+date : url+'pow-iraqi-freedom.kml';

/* kml data file associated with US Army during Iraqi freedom */
files['iraqi-freedom-army'] = (date) ?
    url+'pow-mia-iraqi-freedom-army.kml?r='+date : url+'pow-mia-iraqi-freedom-army.kml';

/* kml data file associated with US Navy during Iraqi freedom */
files['iraqi-freedom-navy'] = (date) ?
    url+'pow-mia-iraqi-freedom-navy.kml?r='+date : url+'pow-mia-iraqi-freedom-navy.kml';

/* kml data file associated with US Marine corp during Iraqi freedom */
files['iraqi-freedom-marines'] = (date) ?
    url+'pow-mia-iraqi-freedom-marines.kml?r='+date : url+'pow-mia-iraqi-freedom-marines.kml';

/* kml data file associated with US Air froce during Iraqi freedom */
files['iraqi-freedom-air-force'] = (date) ?
    url+'pow-mia-iraqi-freedom-air-force.kml?r='+date : url+'pow-mia-iraqi-freedom-airforce.kml';
/* ### End Iraqi freedom KML data files ### */

/* ### Afghanistan KML data files ### */
/* kml data files associated with afghanistan */
files['afghanistan'] = (date) ?
    url+'pow-mia-afghanistan.kml?r='+date : url+'pow-afghanistan.kml';

/* kml data file associated with US Army during Afghanistan */
files['afghanistan-army'] = (date) ?
    url+'pow-mia-afghanistan-army.kml?r='+date : url+'pow-mia-afghanistan-army.kml';

/* kml data file associated with US Navy during Afghanistan */
files['afghanistan-navy'] = (date) ?
    url+'pow-mia-afghanistan-navy.kml?r='+date : url+'pow-mia-afghanistan-navy.kml';

/* kml data file associated with US Marine corp during Afghanistan */
files['afghanistan-marines'] = (date) ?
    url+'pow-mia-afghanistan-marines.kml?r='+date : url+'pow-mia-afghanistan-marines.kml';

/* kml data file associated with US Air Force during Afghanistan */
files['afghanistan-air-force'] = (date) ?
    url+'pow-mia-afghanistan-air-force.kml?r='+date : url+'pow-mia-afghanistan-airforce.kml';
/* ### End Afghanistan KML data files ### */
//>>built
// wrapped by build app
define("ibm/tivoli/fwm/doh/fullscreen/StartedWithFullScreenOn", ["dijit","dojo","dojox","dojo/require!ibm/tivoli/fwm/doh/fullscreen/FullScreen,ibm/tivoli/fwm/mxmap/factory,ibm/tivoli/fwm/i18n,ibm/tivoli/fwm/doh/ConfigHelper"], function(dijit,dojo,dojox){
dojo.provide("ibm.tivoli.fwm.doh.fullscreen.StartedWithFullScreenOn");

dojo.require("ibm.tivoli.fwm.doh.fullscreen.FullScreen");
dojo.require('ibm.tivoli.fwm.mxmap.factory');
dojo.require('ibm.tivoli.fwm.i18n');
dojo.require('ibm.tivoli.fwm.doh.ConfigHelper');

dojo.declare("ibm.tivoli.fwm.doh.fullscreen.StartedWithFullScreenOn", [ibm.tivoli.fwm.doh.fullscreen.FullScreen], {
	name: "Started with Full Screen on",
	constructor: function(params)
	{
		dojo.mixin(this, params);
	},	
	prepareConfData: function()
	{
		this.confHelper.conf.mapConf.inputConfs.fullscreenmode = "true";
	},
	_validate: function(map)
	{
		ibm.tivoli.fwm.doh.fullscreen
				.validateMapWithFullScreen(map);
	}
});


});
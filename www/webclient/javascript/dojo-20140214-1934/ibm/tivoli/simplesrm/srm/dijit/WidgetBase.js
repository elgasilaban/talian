//>>built
// wrapped by build app
define("ibm/tivoli/simplesrm/srm/dijit/WidgetBase", ["dijit","dojo","dojox","dojo/i18n!ibm/tivoli/simplesrm/srm/dijit/nls/uiStringTable","dojo/require!dojo/cookie,ibm/tivoli/simplesrm/srm/dojo/SimpleSRMError,dojo/i18n"], function(dijit,dojo,dojox){
//////////////////////////////////////////////////////////////////
// @JS_LONG_COPYRIGHT_BEGIN@
// @JS_LONG_COPYRIGHT_END@
//////////////////////////////////////////////////////////////////

dojo.provide("ibm.tivoli.simplesrm.srm.dijit.WidgetBase");

dojo.require("dojo.cookie");
dojo.require("ibm.tivoli.simplesrm.srm.dojo.SimpleSRMError");
dojo.require("dojo.i18n");
dojo.requireLocalization("ibm.tivoli.simplesrm.srm.dijit", "uiStringTable");

// the WidgetBase class is the base class for other widgets
dojo.declare("ibm.tivoli.simplesrm.srm.dijit.WidgetBase", null,
{	
	srmTokenName: "SimpleSRMToken",
	proxyUrl: "/SRMCommonsWeb/ProxyServlet",
	imageCacheUrl: "/SRMCommonsWeb/MaxImageCache/",
	_uiStringTable: null,

	// constructor declares properties
	constructor: function(/*object*/params, /*domNode*/domNode)
	{
		console.log("WidgetBase.ctor");
		this._uiStringTable = dojo.i18n.getLocalization("ibm.tivoli.simplesrm.srm.dijit", "uiStringTable");
	},
	isLoggedIn: function() {
		return (null != dojo.cookie(this.srmTokenName));
	},
	getRelativePath: function(/* string */ pathFragment)
	{
		var relPath;
		if(this.iContext) {
			relPath = this.iContext.io.rewriteURI(pathFragment);
		}
		else {
			relPath = dojo.moduleUrl(this.declaredClass.substring(0, this.declaredClass.lastIndexOf('.')), pathFragment).toString();
		}
		return relPath;
	},
	_crossFade: function(outnode, innode) 
	{
		if(dojo.isIE) {
			// this still doesn't work!
			// for some reason, the inlist gets the correct styling, but never shows up
			if(outnode) {
				dojo.style(outnode, "display", "none");
			}
			dojo.style(innode, "display", "block");
		}
		else {
			var shower = dojo.fadeIn({
				node: innode,
				duration: 500,
				onPlay: function() {
					dojo.style(innode, "display", "block");
				}});
			if(outnode) {			
				var hider = dojo.fadeOut({
					node: outnode,
					duration: 500,
					onEnd:function(){
						dojo.style(outnode,"display", "none");
					}});
				dojo.fx.chain([hider, shower]).play();
			}
			else {
				shower.play();
			}
		}			
	}
});

});

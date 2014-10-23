//>>built
// wrapped by build app
define("ibm/tivoli/simplesrm/srm/dojo/Utilities", ["dijit","dojo","dojox","dojo/require!dojo/date/locale"], function(dijit,dojo,dojox){
//////////////////////////////////////////////////////////////////
// @JS_LONG_COPYRIGHT_BEGIN@
// @JS_LONG_COPYRIGHT_END@
//////////////////////////////////////////////////////////////////

dojo.provide("ibm.tivoli.simplesrm.srm.dojo.Utilities");

dojo.require("dojo.date.locale");

String.prototype.htmlencode = function()
{
	return this.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/'/gm, "&#39;").replace(/"/gm, "&#34;");
};
String.prototype.safeencode = function()
{
	//return (this).replace(/\+/g, "%2B");
	return this;
};

String.prototype.htmldecode = function() {
	var tempdiv = document.createElement("div");
	tempdiv.innerHTML = this;
	return tempdiv.childNodes[0].nodeValue;
};

String.prototype.formatISODateString = function(params)
{
	var d = this;
	var isod = this.replace(' ', 'T');
	var dt = dojo.date.stamp.fromISOString(isod);

	var sel = "date";
	if (params && params.sel && params.sel == "datetime") {
		sel = undefined; /* This is weird, I know */
	}
	
	if(dt) {
		//var sel = isod.search("T00:00:00") > 0 ? "date" : ""; // only format date if exactly midnight
	
		d = dojo.date.locale.format(dt, {fullYear:true, selector: sel});
	}
	return d;
};
if(undefined === String.prototype.trim) {
	String.prototype.trim = function()
	{
		return this.replace(/^\s+|\s+$/g, "");
	};
}

});

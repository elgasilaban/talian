<%--
* Licensed Materials - Property of IBM
* 
* 5724-U18
* 
* (C) COPYRIGHT IBM CORP. 2013 All Rights Reserved.
* 
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with
* IBM Corp.
--%><%
	if(is7504FPEnabled) { 
		if(useGotoButton && wcs.showSystemNavBar(currentPage)) {
			useGotoButton = "1".equals(WebClientRuntime.getWebClientSystemProperty(WebClientConstants.WEBCLIENT_GOTOBUTTON,"1"));
		}
		
		if (applinking)
		{
			height="16";
			cssclass="stubmsg";
		}
	}	%>
<%--
* Licensed Materials - Property of IBM
* 
* 5724-U18
* 
* (C) COPYRIGHT IBM CORP. 2006, 2011 All Rights Reserved.
* 
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with
* IBM Corp.
--%><%@ include file="../common/simpleheader.jsp" %><%

String width= component.getProperty("width");
String pixelsize = component.getProperty("pixelsize");
%>	
<hr style="height:<%=pixelsize %>;width:<%=width%>" class="<%=cssclass%>"/>
<%@ include file="../common/componentfooter.jsp" %>
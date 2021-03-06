<%--
 *
 * IBM Confidential
 *
 * OCO Source Materials
 *
 * 5724-M19
 *
 * (C) COPYRIGHT IBM CORP. 2006
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
--%><%@ include file="../common/simpleheader.jsp" %>
    <%@ page import="psdi.util.HTML;" %>
	<%
		
	String label = control.getProperty("label");
	if (label==null || label.equals(""))
		label = "LiveChatPod";
	
    String title = component.getProperty("title");
	if (title==null || title.equals(""))
	   title = "";
	title = HTML.encode(title);
	
	String buttontitle = component.getProperty("buttontitle");
	if (buttontitle==null || buttontitle.equals(""))
		   buttontitle = "";	
	buttontitle = HTML.encode(buttontitle);
	
	String dialog = component.getProperty("dialog");
	String iconimage = component.getProperty("iconimage");
	
	String value =  "";	 
	boolean userEditable= component.getProperty("usereditable").equalsIgnoreCase("true");
	String width = component.getProperty("width");
	String numericonly= component.getProperty("numericonly");
	String isdatefield =  "";
	String menutype=component.getMenuType();
	String lookup=component.getLookupName();
	String requiredString = wcs.getMaxMessage("ui","required").getMessage();
	ComponentInstance linkBack = null;
	boolean longdesc = false;
	boolean isReadOnly = false;
	boolean isMasked = false;
	boolean isRequired = false;
	
	String widgetid=id+"livechatpod";
	
	//boolean comboBox = controlType.indexOf("combobox")!=-1 || (controlType.equals("reasonchange") && control.getProperty("usecombo").equalsIgnoreCase("true"));
	BoundComponentInstance boundComponent = null;
	String maskedTitle = "";
	boolean isDate = false; 
	if(component instanceof BoundComponentInstance)
	{
		boundComponent = (BoundComponentInstance)component;
		isReadOnly = boundComponent.isReadOnly();
		isMasked = boundComponent.isMasked();
		isRequired = boundComponent.isRequired();
		if(isMasked)
			maskedTitle=wcs.getMaxMessage("ui","maskedtitle").getMessage();
	}
	String mdStr = hiddenFrame? "MAINDOC." : "";
	 
		
	// If needsRender, then this is the first time this control is being rendered and we need to send back the html
	// to render the dojo widget.
	if (control.needsRender())
	{
	
		if (designmode) 
		{%>
			<div control="true" id="<%=widgetid%>" <%=automationId%>>			    
				<span class="text dl" <%=componentEvents%>><a href=''onclick='return false;'><%=label%>...</a></span>
			</div>
		<%} 
		else
		{%>   	 
			<div  id='<%=widgetid%>' dojoType='ibm.tivoli.simplesrm.srm.dijit.Overview.LiveChatPod' class='tundra simplesrm' dojoAttachPoint='srmpod_5' title='<%=title%>' buttontitle='<%=buttontitle%>' dialog='<%=dialog%>' iconimage='<%=iconimage%>'></div>
	
			<script type="text/javascript">		                           						 							 						
				 dojo.addOnLoad(function() {
              	   dojo.require('ibm.tivoli.simplesrm.srm.dijit.Overview.LiveChatPod');	
              	   dojo.addOnLoad(function() {
              		   if (dijit.byId('<%=widgetid%>') != undefined) {
                  		    dijit.byId('<%=widgetid%>').destroyRecursive();
              		   }
            		   try
            		   {
            		      dojohelper.parseDojo('<%=widgetid%>');
            		   }
            		   catch(error)
            		   {
            			   console.log(error);
            		   }
              	   });
                 });       
				
			</script>
		<%
		}
	} 
	else
	{		
		
	}
	 %>
<%@ include file="../common/componentfooter.jsp" %>
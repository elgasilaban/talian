package com.talian.json;

import java.rmi.RemoteException ;
import java.util.Iterator ;

import psdi.mbo.HierarchicalMboRemote ;
import psdi.mbo.HierarchicalMboSetRemote ;
import psdi.mbo.MboRemote ;
import psdi.mbo.MboSetInfo ;
import psdi.mbo.MboSetRemote ;
import psdi.mbo.MboValueInfo ;
import psdi.util.MXException ;
import psdi.util.MXSession ;

public class JsonWrapper implements JsonConstants {
	
	static public String getFlatStream (MboSetRemote mboset) throws RemoteException, MXException {
		StringBuffer retval = new StringBuffer() ;
		
		MboSetInfo mboinfo = mboset.getMboSetInfo() ;
		
		mboset.moveFirst() ;
		if (! mboset.isEmpty()) {
			retval = retval.append(SQUARE_OPEN) ;
			
			for (int i=0; i<mboset.count(); i++) {
				MboRemote mbo = mboset.getMbo(i) ;
				if (i>0) 
					retval = retval.append(COMMA) ;
				
				retval  = retval.append(BRACKET_OPEN) ;
				retval  = dolistValue(mbo, mboinfo) ;
				retval  = retval.append(BRACKET_CLOSE) ;
			}
			
			retval = retval.append(SQUARE_CLOSE) ; 
		}
		
		return retval.toString() ;
	}
	
	static private StringBuffer dolistValue (MboRemote mbo, MboSetInfo mboinfo) throws RemoteException, MXException {
		StringBuffer retval = new StringBuffer() ;	

		Iterator it = mboinfo.getAttributes() ;
		boolean bFirst = true ;
		while (it.hasNext()) {
			MboValueInfo mvi = (MboValueInfo)it.next() ;
			if (!bFirst) 
				retval = retval.append(COMMA) ;
			
			String cocotype = mvi.getMaxType() ;
			String colValue = mbo.getString(mvi.getAttributeName()) ;
			
			if (!mvi.getAttributeName().equals("ROWSTAMP")) {
				
				retval = retval.append(mvi.getAttributeName()) ;
				retval = retval.append(COLON) ;
				if (cocotype.indexOf("DATE") >= 0 || cocotype.indexOf("TIME") >= 0)
				{
					String str = colValue ;
					colValue = str.substring(0, str.lastIndexOf("."));	    // yyyy-mm-dd hh:mm:ss
					retval = retval.append(colValue) ;
				}
				/*
				else if ("ALN,UPPER,GL,RAW,CLOB,BLOB,LONGALN,YORN".indexOf(cocotype)>=0) {
					//TODO: parse special character to HTML character
					retval = retval.append(SINGLE_QUOTE + colValue + SINGLE_QUOTE);
				}
				else if ("INTEGER".equalsIgnoreCase(cocotype)) {
						retval = retval.append(mbo.getInt(mvi.getAttributeName())) ;
				}
				else
					retval = retval.append(colValue);
				*/
				retval = retval.append(SINGLE_QUOTE + colValue + SINGLE_QUOTE);
			}
				
			
			bFirst = false ;					
		}
		
		return retval ;
	}
	
	static public String getFlatStream (MXSession cocosession, String boname, String whereclause, String orderby)  throws RemoteException, MXException {
		MboSetRemote mboset = cocosession.getMboSet(boname) ;
		mboset.setWhere(whereclause) ;
		mboset.setOrderBy(orderby) ;
		return getFlatStream(mboset) ;
	}
	
	
	static public String getHierarchicalStream (MXSession cocosession, String boname, String whereclause, String orderby)  throws RemoteException, MXException {
		MboSetRemote mboset = cocosession.getMboSet(boname) ;
		mboset.setWhere(whereclause) ;
		mboset.setOrderBy(orderby) ;
		if (mboset instanceof HierarchicalMboSetRemote) {
			HierarchicalMboSetRemote hmboset = (HierarchicalMboSetRemote) mboset ;
			return getHierarchicalStream(hmboset) ;
		}
		return null ;
	}
	
	static public String getHierarchicalStream (HierarchicalMboSetRemote mboset) throws RemoteException, MXException {
		return dogetHierarchicalStream (mboset).toString() ;
	}
	
	static private StringBuffer dogetHierarchicalStream (HierarchicalMboSetRemote mboset) throws RemoteException, MXException { 
		StringBuffer retval = new StringBuffer() ;
		MboSetInfo mboinfo = mboset.getMboSetInfo() ;
		mboset.moveFirst() ;
		
		if (! mboset.isEmpty()) {
			retval = retval.append(SQUARE_OPEN) ;
			for (int i=0; i<mboset.count(); i++) {
				MboRemote  mbo = (MboRemote)mboset.getMbo(i) ;
				HierarchicalMboRemote hmbo = (HierarchicalMboRemote) mbo ; 
				if (i>0) 
					retval = retval.append(COMMA) ;

				retval  = retval.append(BRACKET_OPEN) ;
				retval  = retval.append(dolistValue(mbo, mboinfo)) ;
				
				if (hmbo.hasChildren()) {
					retval = retval.append(",iconCls: 'task-folder'") ;
					retval = retval.append(",children: ") ;
					HierarchicalMboSetRemote children = (HierarchicalMboSetRemote)mbo.getMboSet("children") ;
					children.setOrderBy(mboset.getOrderBy()) ;
					children.reset();
					
					retval.append(dogetHierarchicalStream(children)) ;
				}
				else {
					retval = retval.append(",iconCls: 'task'") ;
					retval = retval.append(",leaf: true ") ;
				}
				
				retval  = retval.append(BRACKET_CLOSE) ;
			}
			
			retval = retval.append(SQUARE_CLOSE) ;
		}
		return retval ;
	}

}

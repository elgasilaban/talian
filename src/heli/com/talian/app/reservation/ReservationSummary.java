/*
 *
 * 
 *
 * (C) COPYRIGHT Talian Limited, 2011
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets.
 *
 */
package com.talian.app.reservation;

import java.rmi.RemoteException;
import java.util.Date;
import java.util.Hashtable;

import psdi.mbo.MboRemote;
import psdi.mbo.MboSetRemote;
import psdi.server.MXServer;
import psdi.server.MXServerRemote;
import psdi.util.MXException;

/**
 * @author Seno
 *
 */
public class ReservationSummary {
	class ReservationInfo {
		String   portFrom, portTo ;
		int      npax ;
		Double   weight ;
		
		ReservationInfo () {
			npax = 0 ;
			weight = 0.0 ;
		}
		
		String getKey () {
			return portFrom + "-" + portTo ;
		}
		
		void addPax (Double w) {
			npax ++ ;
			this.weight = this.weight + w;
		}
	}
	
	Hashtable<String, ReservationInfo> legs ;
	Hashtable<String, Hashtable<String, ReservationInfo>> departing ;
	
	void initData (Date transdate, String session) throws RemoteException, MXException {
		MXServer server = MXServer.getMXServer() ;
		MboSetRemote reservations = server.getMboSet("reservation", server.getSystemUserInfo()) ;
		reservations.setWhere("flightsession = '" + session + "'") ;
		reservations.reset() ;
		
		legs = new Hashtable<String, ReservationInfo> () ;
		departing = new Hashtable<String, Hashtable<String, ReservationInfo>> () ;
		
		MboRemote r = reservations.moveFirst() ;
		while (r != null) {
			ReservationInfo x = new ReservationInfo() ;
			x.portFrom = r.getString("org") ;
			x.portFrom = r.getString("dest") ;
			ReservationInfo info = legs.get(x.getKey()) ;
			if (info == null)
				info = x ;
			else 
				x = null ;

			info.addPax(70.0) ;  // default pax weight = 70
			Hashtable<String, ReservationInfo> set1 = departing.get(x.portFrom) ;
			if (set1 == null) {
				set1 = new Hashtable<String, ReservationInfo>() ;
				departing.put(x.portFrom, set1) ;
			}
			
			ReservationInfo info1 = set1.get(info.getKey()) ;
			if (info1 != null) 
				set1.remove(info.getKey()) ;
			
			set1.put(info.getKey(), info) ;				
			
			r = reservations.moveNext() ;
		}
	}
	
	

}

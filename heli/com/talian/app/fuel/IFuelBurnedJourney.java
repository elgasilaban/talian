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
package com.talian.app.fuel;


/**
 * @author Seno
 *
 */
public interface IFuelBurnedJourney {
	public Double tripFuel () ;
	public Double distanceToInMinutes () ;
	public IFuelConsumer getConsumer () ;
}
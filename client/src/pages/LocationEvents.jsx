import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import * as LocationsAPI from '../services/LocationAPI'
const LocationEvents = ({index, name}) => {
    const [location, setLocation] = useState([])
    const [event, setEvents] = useState([])
    useEffect(() => {
        (async () => {
            try {
                console.log(name)
                const eventData = await LocationsAPI.getLocation(index)
                setEvents(eventData)
                console.log('eventData',eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])


    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {/* <img width= "100px" height= "60px"src={location[0].img_url} /> */}
                </div>

                <div className='location-info'>
                    <h2>{name}</h2>
                    {/* <p>{location.address}, {location.city}, {location.state} {location.zip}</p> */}
                </div>
            </header>

            <main>
                  <div className='event-container'> 
            {
                event && event.length > 0 ?
                event.map((event) => 
           
                <article className='event-information'>
                <img src={event.img_url} />
                <div className='event-information-overlay'>
                    <div className='text'>
                        <h3>{event.name}</h3>
                        <p><i className="fa-regular fa-calendar fa-bounce"></i> {event.date} <br /> </p>
                        <p id={`remaining-${event.id}`}>{event.time}</p>
                    </div>
                </div>
            </article>
           
                ) : <h3 className="noResults">{'No Gifts Yet 😞'}</h3>
            } 
            
            </div>
            </main>
        </div>
    )
}

export default LocationEvents
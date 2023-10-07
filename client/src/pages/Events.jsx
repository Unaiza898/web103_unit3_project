import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import * as EventsAPI from "../services/EventsAPI";

const Event = () => {

    const [event, setEvent] = useState([])
    const [time, setTime] = useState([])
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getAllEvents()
                setEvent(eventData)
                console.log("event loca", eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    


    return (
<div className="Gifts">
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
                        <p><i className="fa-regular fa-calendar fa-bounce"></i> {event.date} <br /> {time}</p>
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

export default Event
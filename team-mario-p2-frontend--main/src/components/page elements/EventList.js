import axios from "axios";
import React from "react";
import { useContext } from "react";
import { eventContext, eventNumberContext } from "../../App";
import { useEffect } from "react";
export default function EventList() {
    const [eventList, setEventList] = useContext(eventContext)
    function generateEvents(){
        axios.get('20.40.202.9:9000/user1').then(
            response => { 
                let userEvents = response.data;
                setEventList(userEvents);
                // your API might not use .results: make sure the structure conforms to whatever you make
                // in backend
               /* let myEvent = response.data.results;
                console.log(myEvent);
                this.setState({EventList: myEvent}); */
            }
        )
    }
        return (
            <div>
            { useEffect(() => {generateEvents();}, [])}
            {/*() => generateEvent() */};
            <ul class="eventwrapper">
            {
                eventList.map(() => <li><div class = "eventlisting">
                    <ul class="eventinfo">
                    <li>Event: {'name'}</li>
                    <li>Host: {'username'}</li>
                    <li>Sport: {'sport'}</li>
                    <li>Skill level: {'level'}</li>
                    <li>Date: {'date'}</li>
                    <li>Time: {'time'}</li>
                    <li>Location: {'place'}</li>
                    </ul>
                    <img class="event-image" alt="A bunch of sports balls." src = "https://www.google.com/search?q=sports&sxsrf=APq-WBvMTx9goHZzsbpdu7xwm2O01jTyIw:1647821729558&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjXqN-m9tX2AhUQh-AKHVPZCdkQ_AUoAnoECAIQBA&biw=1920&bih=937&dpr=1#imgrc=T-ncBKvTcH1JQM" />
                    </div> </li>)
            }
            </ul>
        </div>
    )
    }
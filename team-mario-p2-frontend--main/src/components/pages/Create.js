//Create page
//sport, skill level, age range, time/date, place
//show event posted! with a link to the view page
import { loginContext } from "../../App";
import { useContext } from "react";
import { eventNumberContext } from "../../App";
import axios from "axios";
export default function Create() {
    const [currentUser] = useContext(loginContext)
    const [currentEventNumber, setEventNumber] = useContext(eventNumberContext)

    function postEventButton()
    {
        const newEvent =
        {
            'name': document.getElementById("posteventnamefield").value,
            'sport': document.getElementById("postsportfield").value,
            'date': document.getElementById("postdatefield").value,
            'place': document.getElementById("postlocationfield").value,
            'time': document.getElementById("posttimefield").value,
            'level': document.getElementById("postskilllevelfield").value,
            'username': {currentUser}
        };
        console.log(newEvent);
        axios.post("20.40.202.9:9000/event", newEvent);
        alert("Event posted!");
        setEventNumber(currentEventNumber+1);
    }
    return (
        <section class="general" id="create">
        <div class="eventformwrapper" id="wrapper">
          <div class="container">
              <div class="tabs">
                  <ul>
                    <li class="sign_in_li">Create Event</li>
                  </ul>
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Event Name" class="input" id="posteventnamefield" required />
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Sport" class="input" id="postsportfield" required />
              </div>
              <div class="input_field" >
                  <select name="Skill level" placeholder="Skill level" class="input" id="postskilllevelfield" required>
                      <option value = "" disabled selected hidden>Skill level</option>
                      <option value = "Beginner">Beginner</option>
                      <option value = "Intermediate">Intermediate</option>
                      <option value = "Advanced">Advanced</option>
                  </select>
              </div>
              <div class="input_field">
                  <input type="date" placeholder="Date" class="input" id="postdatefield" required />
              </div>
              <div class="input_field">
                  <input type="time" placeholder="Time" class="input" id="posttimefield" required />
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Location" class="input" id="postlocationfield" required />
              </div>
              <div class="btn" onClick={() => postEventButton()}>Post Event</div>
          </div>
      </div>
      </section> 
    );
  }
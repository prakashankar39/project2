import './index.css';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/page elements/Navbar';
import Home from './components/pages/Home';
import SignUp from './components/pages/Sign Up';
import Create from './components/pages/Create';
import Discover from './components/pages/Discover';
import Update from './components/pages/Update';
import About from './components/pages/About';
import UpdateEvent from './components/pages/UpdateEvent';
import { Footer } from './components/page elements/Footer';
import Login from './components/pages/Login';


export const loginContext = createContext();
export const AllLoginsContext = createContext();
export const eventNumberContext = createContext();
export const eventContext = createContext();
export default function App() {
  const [AllLogins, setLogins] = useState()
  const [currentUser, setCurrentUser] = useState();
  const [currentEventNumber, setEventNumber] = useState();
  const [eventList, setEventList] = useState();
   function getAllLogins(){
     axios.get('20.40.202.9:9000/user1/')
     .then(response => {
       let returnedUsers = response.data;
       setLogins(returnedUsers);
     })
   }
  function generateEvents(){
    axios.get('20.40.202.9:9000/event/')
    .then(response => { 
          let userEvents = response.data;
          setEventList(userEvents);
        }
    )
   }
  return (
    <>
      <eventContext.Provider value = {[useEffect(() => {generateEvents();}, []), setEventList]}>
      <AllLoginsContext.Provider value = {[useEffect(() => {getAllLogins();}, []), setLogins]}>
      <loginContext.Provider value ={["Guest", setCurrentUser]}>
      <eventNumberContext.Provider value ={[0, setEventNumber]}>
    <BrowserRouter>
    <Navbar />
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="login" element={<Login />} />
       <Route path="signup" element={<SignUp />} />
       <Route path="create" element={<Create />} />
       <Route path="discover" element={<Discover />} />
       <Route path="update" element={<Update />} />
       <Route path="about" element={<About />} />
       <Route path="UpdateEvent" element={<UpdateEvent />} />
     </Routes>
     <Footer />
   </BrowserRouter>
    </eventNumberContext.Provider>
    </loginContext.Provider>
    </AllLoginsContext.Provider>
    </eventContext.Provider>
    </>
  );
}


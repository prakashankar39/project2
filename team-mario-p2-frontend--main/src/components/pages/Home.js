import React from 'react';
import { loginContext } from '../../App';
import { useContext } from 'react';
//Home Page
//Adding a welcome message with user name and photo
export default function Home() {
    const [currentUser] = useContext(loginContext)
        //change to context
        if (currentUser === "Guest")
        {
            return (
            <section class="home" id="home">  
            <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to</div>
                <div class="text-2">Team<span>Up</span></div>
                <div class="text-3">A sport application...</div>
                <a href="/about">Learn More</a>
            </div>
        </div>
        </section>
            )
        }
        //change to context
        else if (currentUser !== "Guest")
        {
            return (
            <section class="loggedhome" id="loggedhome">  
            <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to</div>
                <div class="text-2">Team<span>Up</span></div>
                <div class="text-3">A sport application...</div>
                <a href="/about">Learn More</a>
            </div>
        </div>
             <div class="profile">Hello<span>&nbsp;{currentUser}</span>!</div>
            </section>
            )
        }
    }
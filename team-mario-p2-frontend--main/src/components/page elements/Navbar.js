import React from "react";
import { loginContext } from "../../App";
import { useContext } from "react";
export default function Navbar() {
const [currentUser, setCurrentUser] = useContext(loginContext);    
function SignOut() {
    setCurrentUser("Guest");
}    
if (currentUser === "Guest")
        {
    return (
<nav class="navbar">
<div class="max-width">
    <div class="logo"><a href="/">Team<span>Up</span></a></div>
    <ul class="menu">
        <li><a href ="/login" class="menu-btn">Log In</a></li>
        <li><a href ="/signup" class="menu-btn">Sign Up</a></li>
        <li><a href ="/discover" class="menu-btn">Discover</a></li>
    </ul>
    <div class="menu-btn">
        <i class="fas fa-bars"></i>
    </div>
</div>
</nav>
)
    }
    else
        {
            return (
                <nav class="navbar">
                <div class="max-width">
                    <div class="logo"><a href="/">Team<span>Up</span></a></div>
                    <ul class="menu">
                        <li class="menu-btn">{currentUser}</li>
                        <li onClick={SignOut()}><a href="/" class="menu-btn">Sign Out</a></li>
                        <li><a href ="/discover" class="menu-btn">Discover</a></li>
                    </ul>
                    <div class="menu-btn">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
                </nav>
            )
        } 
}
// Login Page
import React from "react";
import { useContext } from "react";
import { loginContext } from "../../App";
import { AllLoginsContext } from "../../App";
import { useRef } from "react";
export default function Login() {
    const usernameInput = useRef();
    const passwordInput = useRef();
    const [currentUser, setCurrentUser] = useContext(loginContext);
    const [AllLogins] = useContext(AllLoginsContext);
    function LoginButton(e)
    {
        e.preventDefault();
        let inputtedUser = usernameInput.current.value;
        let inputtedPassword = passwordInput.current.value;

        let match = AllLogins.filter(User => User.username = inputtedUser);
        if (match.length === 0)
        {
            alert("Incorrect username or password.");
        }
        else if (match[0].password !== inputtedPassword)
        {
            alert("Incorrect username or password.");
        }
        else if (match[0].password === inputtedPassword)
        {
            setCurrentUser(match[0].username1)
            alert("Welcome" + {currentUser});
            //login user
            // provide functionality to events
            // set the home page display to the user
            // change the navbar to user, 'sign out', 'discover'
        }
    }
        return (
        <section className="general" id="login">
            <div className="wrapper login" id="wrapper">
                <div className="container">
                    <div className="tabs">
                        <ul>
                            <li className="sign_in_li">Sign in</li>
                        </ul>
                    </div>
                    <div className="input_field">
                        <input  className="input" placeholder="username" type="text" id="name" ref={usernameInput}/>
                    </div>
                    <div className="input_field">
                        <input className="input" placeholder="password" type="Password" id="loginpassword" ref={passwordInput} />
                    </div>
                    <div class="btn" onClick={() => LoginButton()}>Log In</div>
                    <li><a href="/signup" className="next-page">Not a user? Sign Up</a></li>
                </div>
            </div>
        </section>
    )
    }

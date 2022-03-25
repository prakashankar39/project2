import * as React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AllLoginsContext } from '../../App';
//Adds a new user in the user table
//change to vm
export default function SignUpButton() {
    const [setLogins] = useContext(AllLoginsContext);
    function getAllLogins(){
        axios.get('20.40.202.9:9000/user')
        .then(response => {
          let returnedUsers = response.data;
          setLogins(returnedUsers);
        })
      }
    function signUp() {
        if(document.getElementById("passwordfield").value === document.getElementById("confirmpasswordfield").value)
        {
            const newUser =
        {
            'fullname1': document.getElementById("fullnamefield").value,
            'email1': document.getElementById("emailfield").value,
            'username1': document.getElementById("usernamefield").value,
            'password1': document.getElementById("passwordfield").value, 
        };
        axios.post("20.40.202.9:9000/UserController", newUser);
        getAllLogins();
        alert("Welcome to TeamUp!");
        }
        else{
            alert("Your passwords do not match.")
        }
    }
    return (
        <div class="btn" onClick={() => signUp()}>Sign Up</div>
    )    
}
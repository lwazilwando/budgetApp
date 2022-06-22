import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../config/firebase'

function SignUp(){

    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sig={
        width:'150px',
        height:'30px',
        marginTop:'3%'
    }


    let history = useHistory();

    const Register= () =>{

        createUserWithEmailAndPassword( auth, email, password).then(()=>{
            history.push("/home");
        }).catch((error)=>{
            console.log(error);
        })

        history.push("/home");
    };

    return(
        <div className="container">

            <h1>Register account here</h1><br/>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}  />
            <button style={sig} onClick={Register}>SignUp</button>
        </div>

    );
}

export default SignUp;
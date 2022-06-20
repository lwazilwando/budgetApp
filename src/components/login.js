import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Login(){

    const btn={
        width:'150px',
        height:'30px',
        marginTop:'3%'
    }


    let history = useHistory();

    const login= (() =>{
        history.push("/home");
    })

    return(
        <div className="container">
            <input type="email" placeholder="Enter your email"></input> <br/><br/>
            <input type="password" placeholder="Enter your password"></input>
            <button style={btn} onClick={login}>Login</button>

            <span> Dont have an account </span> 
            
            <span>
                <Link to="/sign-up">Create account here</Link>

                
            </span>
        </div>
    );
}

export default Login;
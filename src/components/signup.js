import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function SignUp(){

    const sig={
        width:'150px',
        height:'30px',
        marginTop:'3%'
    }


    let history = useHistory();

    const Register= (() =>{
        history.push("/home");
    })

    return(
        <div className="container">

            <h1>Register account here</h1><br/>
            <input type="email" placeholder="Enter your email" /><br/><br/>
            <input type="password" placeholder="Enter your password" />
            <button style={sig} onClick={Register}>SignUp</button>
        </div>

    );
}

export default SignUp;
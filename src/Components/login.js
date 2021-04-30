import React, { useState,useContext } from 'react'
import './login.css'
import {UserContext} from '../contextapi'
function Login(props) {

    const [state,setState] = useContext(UserContext)

    const [data,setdata] = useState({
        uname : '',
        password : ''
    })
    const changehandler = (e) =>{
        e.preventDefault();
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handleclick =(e)=>{
        e.preventDefault();    
    console.log(data)
        if(data.uname === "foo" && data.password === "bar")
        {
            // alert("true")
            setState({show_logout_btn: true})  
        }
        else
        {
            alert("invalid login , use username: foo , password: bar")
        }


    }

    return (
        <div className="loginwin">
            <form >
                <label htmlFor="unam">username :</label>
                <input name="uname" value={data.uname} onChange={changehandler} type="text"  id="unam" />
                <label htmlFor="pass">password :</label>
                <input name="password" value={data.password} onChange={changehandler} type="password"  id="pass" />
                <button onClick={handleclick}>Submit</button>
            </form>
        </div>
    )
}

export default Login

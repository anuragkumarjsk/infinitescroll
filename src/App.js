import React, { useState,useContext } from  'react'
import './App.css';
import Login from './Components/login'
import Infinitelist from './Components/infinitelist'
import {UserContext} from './contextapi'


function App() {
  const [state,setState] = useContext(UserContext)
  const logoutclicked =() =>{
    setState({show_logout_btn: false})  
  }
  return (<>
    <div className="App">
         <h2>Contact list App</h2>
         {state.show_logout_btn && <button id="logoutbtn" onClick={logoutclicked}>Logout</button>}
         </div>
    {!state.show_logout_btn &&<Login />}  
    {state.show_logout_btn  &&<Infinitelist/>}
    </>   
  );
}
export default App;

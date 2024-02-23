import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function SignUp() {

  const[user,setuser]=useState(
    {
      name:"",
      email:"",
      password:"",
      confirm_password:"",
    }
  );

  const handlechange = (event)=>{
  
setuser((prev)=>{
  return {...prev,[event.target.name]:event.target.value}
});
//console.log(user);
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/signup",{...user});
      }catch(err){
        console.log(err);
        }
    };
    
  return(
    <>

    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
    <form >
      <h3>Sign Up</h3>

      <label htmlFor="username">Username</label>
      <input type="text" onChange={handlechange} placeholder="UserName" id="username" />
      <label htmlFor="email">Email</label>
      <input type="email" onChange={handlechange} placeholder="Email" id="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" onChange={handlechange} placeholder="Password" id="password" />
      <button className="sign" onClick={handlesubmit}><Link to="/SignUp">Sign Up</Link></button>
      <Link style={{textDecoration:"none"}} to="/SignIn"><p1>I have an account</p1></Link>
    </form>
  </>
  )
}


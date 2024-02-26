import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>{console.log(result)
    navigate('/SignIn')
    })
    .catch(err=>console.log(err))
  }
  return(
    <>
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Enter Name" autoComplete="off" onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Enter Email"  autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter Password" autoComplete="off" onChange={(e)=>setPassword(e.target.value)}/>
      <button className="sign" type="submit">Register</button>
      <p>Already have an account</p>
      <Link to="/SignIn">
        <button className="sign">Login</button>
      </Link>
    </form>
  </>
  )
}


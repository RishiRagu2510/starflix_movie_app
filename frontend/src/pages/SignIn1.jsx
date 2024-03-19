import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import './signIn1.css';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Container className="back">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="sign" type="submit">Login</button>
        <p>I don't have an account</p>
        <Link to="/SignUp">
          <button className="sign">Register</button>
        </Link>
      </form>
    </Container>
  );
}

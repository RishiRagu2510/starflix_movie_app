import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import navListData from '../data/navListData';
import "./Header.css";
import logo from '../pages/logo1.jpeg';
function Header({ scroll }) {

  const currentUser = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();
  const [navList, setNavList] = useState(navListData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const handleLogout = () => {
    axios.post('http://localhost:3001/logout')
      .then(response => {
        console.log(response.data);
        navigate('/signin');
        setIsAuthenticated(false);
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const handleNavOnClick = (id) => {
    console.log(`Clicked navigation item with ID: ${id}`);
  };

  return (
    <header className={`${scroll > 1 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo" >
      <img src={logo} alt="StarFlix Logo" className="logo" style={{ width: '60px' }} />
          StarFlix
      </a>
      <Search />
      <ul className="nav">
        {navList.map(nav => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
         
          <button onClick={handleLogout} className='signin'><ion-icon name="log-in-outline"></ion-icon>
          {' LOGOUT'}</button>
          
      </ul>
    </header>
  );
}

export default Header;
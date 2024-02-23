import React, { useState } from 'react';
import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import navListData from '../data/navListData';
import "./Header.css";
import { Link } from 'react-router-dom';
function Header({scroll}) {
  const[navList,setNavList]=useState(navListData)
  const handleNavOnClick=id=>{
    const newNavList=navList.map(nav=>{
      nav.active=false;
      if(nav._id==id)nav.active=true;
      return nav;
    });
  }
  return (
    
    <header className={`${scroll>1?'scrolled':undefined}`}>
    <a href="/" className="logo">
        StarFlix
    </a>
    <Search />
    <ul className="nav">
    {navList.map(nav => (
            <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
        <Link to="/signin" className='signin'>
   
        <ion-icon name="log-in-outline"></ion-icon>
        {' SIGN IN'}
        </Link>
    </ul>
    
    </header>
  )
}

export default Header;
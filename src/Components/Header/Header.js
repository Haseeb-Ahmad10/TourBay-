import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Header.module.css'; 
import Button from '../UI/Button';

const Header = () => {
  const navigate = useNavigate();

//   const linkActive =   isActive ? 'nav-link nav-link-active' : 'nav-link'
          

  return (
    <header className={classes.header}>
        <NavLink to="/" className={classes['header-logo']}>
        Tour<span>Bay</span>
      </NavLink>
      <nav className={classes['nav-container']}>
        <NavLink
          to="/add-tour"
          className={classes['nav-link']}
        >
          Add Tour
        </NavLink>
        <NavLink
          to="/book-tour"
          className={classes['nav-link']}
        >
          Book Tour
        </NavLink>
        <NavLink
          to="/my-tour"
          className={classes['nav-link']}
        >
          My Tour
        </NavLink>
      </nav>

      <Button className={classes['explore-btn']}
       onClick={() => navigate('/explore')}
      >Explore Now</Button>
    </header>
  );
};

export default Header;

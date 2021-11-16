import React from 'react';
import './style.scss';
import logo from './logo.png'
import Sidebar from '../../components/Sidebar/Sidebar';

const Header = () => {
    return (
      <header>
       <nav className="navbar color block"> 
        <div>
            <img img src={logo} alt={"logo"} className="logo" />
        </div>
        <div className="navbar__sidebar-menu">
        <Sidebar />
        </div>
      </nav>
      <div className="invizible"></div>
    </header>
    )
}

export default Header

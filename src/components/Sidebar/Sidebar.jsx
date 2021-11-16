import React from 'react'
import { NavLink } from 'react-router-dom'
import "./SideBar.scss";

const Sidebar = () => {
    return (
        <ul className="sidebar">
            <li className="sidebar__navBtn">
                <NavLink className="sidebar__text" activeClassName="sidebar__is-active" to='/home'>
                    Home</NavLink></li>
            <li className="sidebar__navBtn">
                <NavLink className="sidebar__text" activeClassName="sidebar__is-active" to='/favorites'>
                    Favorites</NavLink></li>
            <li className="sidebar__navBtn">
                <NavLink className="sidebar__text" activeClassName="sidebar__is-active" to='/cart'>
                    Cart</NavLink></li>
        </ul>
    )
}

export default Sidebar;

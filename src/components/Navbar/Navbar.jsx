import React from 'react';
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
<nav className={s.nav}>
      <ul>
        <li><a>Profile</a></li>
        <li><a>Messages</a></li>
        <li><a>News</a></li>
        <li><a>Music</a></li>
      </ul>
      <div><a>Settings</a></div>
    </nav>
    )
}

export default Navbar
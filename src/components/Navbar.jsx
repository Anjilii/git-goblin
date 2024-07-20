// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">Git-Goblin</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">About</a></li>
          <li>
            <details>
              <summary>Setting</summary>
              <ul className=" bg-primary text-primary-content rounded-t-none p-2">
                <li><a href="/">T&C</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

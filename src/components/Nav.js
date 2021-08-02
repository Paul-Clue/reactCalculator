import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => (
  <div>
    <nav className="navbar navbar-light bg-info">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1"><h1>Math Magicians</h1></span>

        <div className="AllLinks">
          <Link className="Link border" to="/">Home</Link>
          <Link className="Link border" to="/calculator">Calculator</Link>
          <Link className="Link" to="/quote">Quote</Link>
        </div>
      </div>
    </nav>
  </div>
);

export default Nav;

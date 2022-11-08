import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="text-center text-xl font-bold ">TMC Virajpet</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Collections</Link>
          </li>
          <li>
            <Link to="/">Schemes</Link>
          </li>
          <li>
            <Link to="/">Revenue Streams</Link>
          </li>
          <li>
            <Link to="/">Misc</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/face/">Face Detection</Link>
              </li>
              <li>
                <Link to="/image/">Image Recognition</Link>
              </li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <p>Welcome on {}</p>

        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

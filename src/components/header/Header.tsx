import Wrapper from '../wrapper/Wrapper';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className={style.header}>
          <Wrapper>
            <ul className={style.nav}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.item} ${style.active}` : style.item
                  }
                  to={'/'}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.item} ${style.active}` : style.item
                  }
                  to={'/about'}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </Wrapper>
        </nav>
      </header>
    );
  }
}

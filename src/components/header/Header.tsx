import Wrapper from '../wrapper/Wrapper';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './Header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className={style.header}>
      <Wrapper>
        <nav className={style.navigate}>
          <p className={style.title}>
            Welcome on&nbsp;
            {mapPathnameToTitle(location.pathname)}
            &nbsp;page
          </p>
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
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.item} ${style.active}` : style.item
                }
                to={'/form'}
              >
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;

export function mapPathnameToTitle(pathname: string) {
  if (pathname === '/') return 'main';

  return pathname.substring(1);
}

import Wrapper from '../wrapper/Wrapper';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import { withRouter, withRouter2 } from 'hoc/withRouter';

class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <Wrapper>
          <nav className={style.navigate}>
            <p className={style.title}>Header</p>
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
          </nav>
        </Wrapper>
      </header>
    );
  }
}

export const HeaderWithRouter = withRouter2(Header);
// export default withRouter(Header);

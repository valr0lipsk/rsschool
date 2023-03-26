import Wrapper from '../wrapper/Wrapper';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import { withLocation } from '../../hoc/withLocation';

interface Props {
  location: typeof location;
}

export class Header extends React.Component<Props> {
  render() {
    return (
      <header className={style.header}>
        <Wrapper>
          <nav className={style.navigate}>
            <p className={style.title}>
              Welcome on&nbsp;
              {mapPathnameToTitle(this.props.location.pathname)}
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
  }
}

export default withLocation(Header);

function mapPathnameToTitle(pathname: string) {
  if (pathname === '/') return 'main';

  return pathname.substring(1);
}

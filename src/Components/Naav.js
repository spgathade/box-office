import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Naavstyle';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Naav = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {Links.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Naav;

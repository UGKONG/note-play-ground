import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

export default () => {
  return (
    <Header>
      <NavLink to='/'>Home</NavLink>
      <span />
      <NavLink to='/about'>About</NavLink>
    </Header>
  )
}

const Header = Styled.header`
  margin-bottom: 50px;

  a {
    color: #ddd;
    font-weight: 500;
    &:hover { color: #ccc }
    &:active { color: #bbb }
    &.active { color: #5a02aa }
  }
  span {
    display: inline-block;
    margin: 0 10px;
    color: #aaa;
  }
`;
import React from "react";
import styled from 'styled-components';
import Logo from "./Logo";
import Hamburguer from './Hamburguer';
import MainNavigation from './MainNavigation';
import { useToggle } from '../hooks/useToggle';

const SiteHeader = styled.header`
  background-color: var(--darkBlue);
  box-shadow: var(--level-2), var(--level-1);
  color: var(--white);
  display: flex;
  min-height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  h1 {
    margin: 0;
  }
`;

const Header = () => {
  const [open, , toggleMenu] = useToggle(false);

  return (
    <SiteHeader>
      <Logo white main />
      <MainNavigation open={open} />
      <Hamburguer open={open} onClick={toggleMenu} />
    </SiteHeader>
  );
};

export default Header;

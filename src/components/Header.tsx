import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import Logo from "./Logo";

const SiteHeader = styled.header`
  background-color: var(--darkBlue);
  box-shadow: var(--level-2), var(--level-1);
  color: var(--white);
  display: flex;
  min-height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);

  & a {
    color: var(--white);
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: var(pText);
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all .2s;
    &:hover {
      text-decoration-color: var(--white);
    }

    & + a {
      margin-left: calc(var(--margin) / 2);
    }
  }
  h1 {
    margin: 0;
  }
`;


const Header = () => {


  return (
    <>
    <SiteHeader>
      <Logo white main />
      <nav>
        <Link to="/">Quem Somos</Link>
        <Link to="/santa-ajuda">Blog</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/lojas">Lojas</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      </SiteHeader>
      <Logo />
      </>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;

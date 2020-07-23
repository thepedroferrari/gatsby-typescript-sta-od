import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

const SiteHeader = styled.header`
  background-color: var(--darkBlue);
  box-shadow: var(--level-2);
  color: var(--white);
  display: flex;
  min-height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);

  & a {
    color: var(--white);
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
`;


const Header = () => (
  <SiteHeader>
    <h1 style={{ margin: 0 }}>
      <Link to="/">SantaOdila</Link>
    </h1>
    <nav>
      <Link to="/">Quem Somos</Link>
      <Link to="/">Blog Santa Ajuda</Link>
      <Link to="/">Produtos</Link>
      <Link to="/">Lojas</Link>
      <Link to="/">Cursos</Link>
      <Link to="/">Contato</Link>
    </nav>
  </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;

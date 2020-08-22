import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

interface IMainNavigation {
  open: boolean;
}

const MainNav = styled.nav<IMainNavigation>`
  a {
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
  @media screen and (max-width: 60rem) {
    position: absolute;
    right: ${props => props.open ? '0' : '-320px'};
    display: flex;
    flex-direction: column;
    min-width: fit-content;
    max-width: 320px;
    text-align: right;
    padding: 0 1rem 0 1.5rem;
    top: 3rem;
    background-color: var(--darkBlue);
    transition: right 300ms ease-in-out;
    a, a + a {
      margin-left: 0;
      padding: .5rem 0;
    }
  }
`;

const MainNavigation = ({ open }: IMainNavigation) => (
  <MainNav open={open}>
    <Link to="/">Quem Somos</Link>
    <Link to="/santa-ajuda">Blog</Link>
    <Link to="/produtos">Produtos</Link>
    <Link to="/lojas">Lojas</Link>
    <Link to="/contato">Contato</Link>
  </MainNav>
);

export default MainNavigation;
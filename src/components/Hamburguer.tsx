
import React from "react";
import styled from 'styled-components';

interface IHamburguer {
  open: boolean;
  onClick: () => void;
}

const HamburguerStyles = styled.i<IHamburguer>`
  display: none;
  @media screen and (max-width: 60rem) {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 48px;
    justify-content: ${(props) => props.open ? 'unset' : 'space-around'};
    overflow: hidden;
    padding: 4px;
    width: 48px;
    span {
      background: var(--white);
      border-radius: 2px;
      height: 5px;
      position: ${(props) => props.open && 'absolute'};
      transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000), opacity 200ms;
      width: 40px;

      &:first-child {
        top: 26px;
        transform: ${(props) => props.open && 'rotate(45deg)'};
      }

      &:nth-child(2) {
        opacity: ${(props) => props.open ? '0' : '1'};
      }

      &:last-child {
        top: 26px;
        transform: ${(props) => props.open && 'rotate(-45deg)'};
      }
    }
  }
`;

const Hamburguer = ({ open, onClick }: IHamburguer) => (
  <HamburguerStyles open={open} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </HamburguerStyles>
);

export default Hamburguer;
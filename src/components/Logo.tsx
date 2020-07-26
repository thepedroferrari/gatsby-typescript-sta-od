import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from 'styled-components';

interface ISiteLogo extends Record<string, any> {
  white?: boolean;
  main?: boolean;
}

const SiteLogo = styled.hgroup<ISiteLogo>`
  min-width: 11.5em;
  a, a:hover {
    text-decoration: none;
  }
  h1, h2 {
    line-height: 1;
    margin: 0;
  }
  h1 {
    font-family: 'Arial Black';
    font-size: 1.33em;
    font-weight: bolder;

    & span {
      color: ${props => props.white ? "var(--white)" : "var(--darkBlue)"};
      display: inline-block; /* To use ::first letter, the element must be a block */

      &::first-letter {
        color: ${props => props.white ? "var(--white)" : "var(--blue)"};
        font-size: 1.6em;
      }
    }
  }
  h2 {
    color: ${props => props.white ? "var(--white)" : "var(--blue)"};
    font-family: 'Arial Narrow';
    font-size: .88em;
    font-weight: 100;
    margin-left: .15em;
  }
`;


const Logo = ({ white, main }: ISiteLogo) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const { title, description } = site.siteMetadata;

  return (
    <SiteLogo white={white}>
      <Link to="/" title={title}>
        <h1><span>SANTA</span> <span>ODILA</span></h1>
        <h2>MATERIAIS PARA CONSTRUÇÃO</h2>
        {main && <h3 className="visually-hidden">{title}. {description}</h3>}
      </Link>
    </SiteLogo>
  )
};

export default Logo;

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import { GlobalStyle } from "./GlobalStyle";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <>
      <GlobalStyle />
      <Header />
      <div
        style={{
          margin: "3rem auto 0",
          maxWidth: 960,
          padding: "0 1.0875rem 1.45rem",

        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} {title}
        </footer>
      </div>
    </>
  );
};

export default Layout;

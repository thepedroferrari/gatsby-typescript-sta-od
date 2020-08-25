import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Query } from '../../graphql-types';

const Blog = () => {
  const data: Query = useStaticQuery(graphql`
    query BlogPosts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;

  const posts = edges.map((edge, i: number) => {
    if (!edge.node.frontmatter || !edge.node.fields) return null;
    const { title, date } = edge.node.frontmatter;
    const { slug } = edge.node.fields;
    if (!title || !date || !slug) return null;

    return (
      <li key={i}>
        <h2><Link to={slug}>{title}</Link></h2>
        <time>{date}</time>
      </li>
    );
  });

  return (
    <Layout>
      <SEO title="Santa Ajuda: O Blog da Santa Odila Materiais de Construção" />
      <ol>
        {posts}
      </ol>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Blog;

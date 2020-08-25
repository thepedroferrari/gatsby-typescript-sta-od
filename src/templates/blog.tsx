import React from 'react';
import { graphql, PageRendererProps } from 'gatsby';

import Layout from '../components/Layout';
import { Query, SitePageContext } from "../graphql-types";

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: Query;
}

const Blog = ({ data }: Props) => {
  const html = data.markdownRemark?.html;
  if (!html) return null;

  return (
    <Layout>
      <header>
        <h1>{data.markdownRemark?.frontmatter?.title}</h1>
        <time>{data.markdownRemark?.frontmatter?.date}</time>
      </header>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
    </Layout>
  );
};

export default Blog;


export const blogPostQuery = graphql`
  query($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
import { CreateNodeArgs, CreatePagesArgs } from 'gatsby';
import { IAllMarkdownRemark } from './src/interfaces';

const path = require('path');

module.exports.onCreateNode = ({ node, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

  }
};


module.exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  // 1. get path to template
  const blogPostTemplate = path.resolve(`src/templates/blog.tsx`);

  // 2. get markdown data
  const res: IAllMarkdownRemark = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // 3. Create new pages
  if (!res.data) return;

  res.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields;
    if (!slug) return;

    createPage({
      component: blogPostTemplate,
      path: `/santa-ajuda/${slug}`,
      context: {
        slug
      }
    });
  });
};

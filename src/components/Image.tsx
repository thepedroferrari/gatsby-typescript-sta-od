import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

import { ImageQuery } from "../../graphql-types";

export const imageQuery = graphql`
  query Image {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Image = () => {
  const data = useStaticQuery(imageQuery) as ImageQuery;

  if (data.placeholderImage?.childImageSharp?.fluid == null) {
    throw Error(
      `data.placeholderImage.childImageSharp.fluid must not be null: ${JSON.stringify(
        data,
        null,
        2
      )}`
    );
  }

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid as FluidObject} />
  );
};

export default Image;

export interface IAllMarkdownRemark {
  errors?: any;
  data?: IAllMarkdownRemarkData;
}

export interface IAllMarkdownRemarkData {
  allMarkdownRemark: {
    edges: IAllMarkdownRemarkEdges[];
  };
}

export interface IAllMarkdownRemarkEdges {
  node: {
    fields: {
      slug?: string;
    };
    frontmatter: IFrontMatter;
  };
};

export interface ISingleMarkdownRemark {
  frontmatter: IFrontMatter;
  html: string;
}

interface IFrontMatter {
  title?: string;
  date?: string;
}
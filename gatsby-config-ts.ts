interface IAddress {
  address: string;
  city: 'Campinas' | 'Itatiba';
  district: string;
  email: string;
  phone: string;
  whatsApp: string;
}

interface ISocialNetworks {
  facebook: 'https://www.facebook.com/santa.odila',
  instagram: 'https://www.instagram.com/santa.odila';
}

interface ISiteMetadata {
  title: string;
  description: string;
  author: string;
  name: string;
  address: IAddress[];
  socialNetworks: ISocialNetworks;
}

export const siteMetadata: ISiteMetadata = {
  title: "Santa Odila Materiais de Construção. Entrega rápida em até 12h",
  description:
    "Conheça nossa linha completa de Materiais de Construção, Básico, Acabamentos e Revestimentos. Qualidade, agilidade, preço justo e atendimento de primeira.",
  author: "Bruno Camaleão",
  name: "Santa Odila",
  address: [
    {
      address: 'Rua Abolição, 3283',
      city: 'Campinas',
      district: 'Bela Vista',
      email: 'santaodila@uol.com.br',
      phone: '(19) 3779-7993',
      whatsApp: '5519991130323'
    },
    {
      address: 'Av. Edmundo Vignatti, 371',
      city: 'Campinas',
      district: 'Esmeraldina',
      email: 'santaodila2@uol.com.br',
      phone: '(19) 3276-7787',
      whatsApp: '5519994618225'
    },
    {
      address: 'Av. Benedito Alves Barbosa Sobrinho, 810',
      city: 'Itatiba',
      district: 'Brotas',
      email: 'santaodila3@uol.com.br',
      phone: '(11) 4524-6617',
      whatsApp: '5511956807642'
    },
  ],
  socialNetworks: {
    facebook: 'https://www.facebook.com/santa.odila',
    instagram: 'https://www.instagram.com/santa.odila'
  }
};

export const plugins = [
  "gatsby-plugin-typescript",
  "gatsby-plugin-typescript-checker",
  {
    resolve: "gatsby-plugin-graphql-codegen",
    options: {
      documentPaths: [
        "./src/**/*.{ts,tsx}",
        "./node_modules/gatsby-*/**/*.js",
        "./gatsby-node.ts",
      ],
    },
  },
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
    },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/gatsby-icon.png",
    },
  },
  "gatsby-transformer-remark"
];

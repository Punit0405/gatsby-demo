import type { GatsbyConfig } from "gatsby";
console.log( `${__dirname}/src/images/` , "PathName")


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Intive Demo`,
    siteUrl: `https://www.yourdomain.tld`,
    headerLinks:['INDUSTRIES','SERVICES','INSIGHTS','ABOUT','CAREERS','CONTACT'],
    carouselImages:['https://images.ctfassets.net/ue4ib83wzj4v/3xDSG1SOrBpIwYw5YDrzHb/032d607ceb0d6e5af20c5b9e3a224c26/MicrosoftTeams-image__2_.png?w=1810&h=905&q=100&fm=png&bg=transparent',
    'https://images.ctfassets.net/ue4ib83wzj4v/hgHqHsOOGxSXmnmJ9Qf7k/da5c3f8d6b84b3f3582c269271bb606e/Holistic_Shopping_Experience_campaign.png?w=1810&h=905&q=100&fm=png&bg=transparent',
    'https://images.ctfassets.net/ue4ib83wzj4v/2sItMWjiZXM9QXAqk2RPCw/a501afbd10218cf1330201168d9fd034/EdTech_Header.png?w=1810&h=905&q=100&fm=png&bg=transparent'],
    customerLogos:[
      'https://images.ctfassets.net/ue4ib83wzj4v/55k0HZMElryiLE16Jo1dJg/a43bd0c865c8dc677ac930d2d74a5392/paramount.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/4sAr2NN8D2dtAY2ZRklEJh/39c2fd6b04d00ff58ab442d6813eb631/Audi.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/72RnLiGg3uMHwvSiKSMrbg/6fa388f98ebb30940e2fcf477b7a5b8c/BASF.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/55k0HZMElryiLE16Jo1dJg/a43bd0c865c8dc677ac930d2d74a5392/paramount.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/5dYIpcJVxfZlktwJUksS6C/452e1b9e3a8c0e1ecbff81101c0dad73/nubi.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/NLu6eYXslY70pAkN8u1Ny/d4ab7bc2d9eb3ad7f21e1eb0adb35d3a/netzsch.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/3fwelp34KtTZyoBaYmwf0l/808b0bc1be1092b450f763007ed2618d/mosaic.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/5sg00GGfRBTDxGcFD618u1/13b54edee69f5411faefe3382fc95237/kaplan.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/3emGM5lXMZgwCWNtfeGvuZ/daa8de46c9ddf6589ccfee0b7ab39032/intersport.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/4LEH3vNr9eMzhkytfjCB2H/91969fdf280963e8e1ef000f8efdd8f8/facebook.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/1Ujh09G9f1PKQNhih0W1L/153edc1acd2574c7b645cd93f37cefbd/amc_networks.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/5iHniBNpmnYFqTqrkItJyX/2dde6baeab8baa043711b3933bd4921c/ae.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/6myI8qHEJLUwOBHmkAGiI2/62eee5279302f841d3ea6573f473c06d/arri.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/1GRLuJ4p1FLQ2QJEgbdccD/e5820bc2060e0bb3a42f20e38c763358/osn.svg',
      'https://images.ctfassets.net/ue4ib83wzj4v/4s9JozF3GRSJPoaVxjnJLh/2edd77a42f936d29188401a1b086fd31/Galicia_Logo_square.svg'
    ],
    industries:[
      "AUTOMOTIVE",
      "TECHNOLOGY,MEDIA & COMMUNICATOINS",
      "ENERGY & UTILITIES",
      "FINTECH",
      "INDUSTRIAL",
      "LIFE SCIENCES",
      "ECOMMERCE,RETAIL & CONSUMER PRODUCTS",
      "TELECOMMUNICATIONS",
      "TRANSPOTATION"
  ]
},
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    }
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Lato`,
          file: `https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap`,
        },
      ],
    },
  },
]
};

export default config;

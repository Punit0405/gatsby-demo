import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useStaticQuery, graphql } from "gatsby";

const Layout = (props: any) => {
    const data = useStaticQuery(graphql`
    query {
      nav: allContentfulNavigation(sort: { createdAt: ASC }) {
        links: nodes {
          id
          link
          title
        }
      }
    }
  `);
    const {
        nav: { links },
    } = data;
    return (
        <>
            <Header links={links} />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;

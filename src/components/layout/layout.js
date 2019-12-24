/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import PropTypes from 'prop-types';

import Header from '../header/header';
import './layout.css';
import useSiteMetadata from '../../hooks/use-sitemetadata';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={title} />
      <div style={{}}>
        <main>{children}</main>
        {/* <section className="content">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </section> */}
      </div>
      <Footer data={children} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;

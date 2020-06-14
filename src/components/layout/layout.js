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
import Sidebar from '../sidebar';
import styled from 'styled-components';

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: calc(20px + (50% - (1000px / 2)));
    padding-right: calc(20px + (50% - (1000px / 2)));
  }
  main {
  }
  aside {
    width: 100%;
    @media (min-width: 1000px) {
      width: 300px;
    }
  }
`;

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={title} />
      <ContentWrap>
        <main>{children}</main>
        <Sidebar />
      </ContentWrap>
      <Footer data={children} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;

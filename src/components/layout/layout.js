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
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    padding-bottom: 80px;
  }
  @media (min-width: 1150px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: calc(20px + (50% - (1150px / 2)));
    padding-right: calc(20px + (50% - (1150px / 2)));
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
      <Header siteTitle={title} currentPage={children[0].props.title} />
      <ContentWrap>
        <main>{children}</main>
        <Sidebar currentPage={children[0].props.title} />
      </ContentWrap>
      <Footer data={children} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;

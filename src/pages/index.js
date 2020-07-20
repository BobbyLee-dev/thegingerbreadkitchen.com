import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Posts from '../components/page-home/posts';
import styled from 'styled-components';

const ContentWrap = styled.section`
  padding-top: 0 !important;
`;

export const pageQuery = graphql`
  {
    wpgraphql {
      pageBy(uri: "home") {
        homePage {
          welcome
          fieldGroupName
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  // const sections = data.wpgraphql.pageBy.homePage;

  return (
    <Layout>
      <SEO title="Home" />
      {/* <ContentWrap className="content"> */}
      <Posts />
      {/* </ContentWrap> */}
    </Layout>
  );
};

export default Home;

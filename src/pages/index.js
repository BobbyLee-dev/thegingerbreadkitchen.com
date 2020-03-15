import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import RecentPost from '../components/page-home/recent-post';
// import HomeWelcome from '../components/page-home/welcome';

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
      {/* <HomeWelcome content={sections.welcome} /> */}
      <section className="content">
        {/* <h2>Recent Posts</h2> */}
        <RecentPost />
      </section>

      <section
        // className="content"
        style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: 'auto' }}
      ></section>
    </Layout>
  );
};

export default Home;

import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="content">
        <h1>Hi from the About page</h1>
      </section>
    </Layout>
  );
};

export default About;

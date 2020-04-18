import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="content">
        <h1>Hi from the Contact Page</h1>
      </section>
    </Layout>
  );
};

export default Contact;
